---
title: Outage Reports From Personal Homelab
subtitle: Running a personal homelab means experiencing service outages. Here are some examples and what was learned from them.
category: Learning
header-img: content/2018/outages/header.png
---

All times are in local (UTC+2) timezone. This post might be updated in the future with additional examples.

I run a personal homelab from my apartment - a 42U rack with a firewall, switched networking, application servers, UPS - all the good stuff.
On this gear run a number of services, which inevitably break. Here are some examples on how things can go wrong.

## Secondary WAN Unusable Due To Breached Bandwidth Cap

- **Start**: `2018-02-18 02:00:40`
- **End**: `2018-03-01 00:00:00`
- **Root Cause**: Scheduled backups were allowed to run over a fail-over WAN connection, which filled up its data cap and rendered it unusable
- **Discovered By**: Monitoring

During the night, at `12:36`, the primary WAN dropped due to excessive packet loss. The WAN connection had been experiencing various degrees of packet loss most of the late evening (11pm...1am, reasons unknown).

{% picture 2018/outages/starman-down.png alt="Primary WAN down" %}

Shortly after that, a scheduled backup job from a Synology NAS ran. The backup archive was about `107 GB` and was destined to upload to Amazon S3.

{% picture 2018/outages/backup-config.png alt="Synology backup config" %}

When the primary WAN (Starman) goes down, a fail-over 4G WAN (Tele2) connection automatically takes over. Even though the primary WAN recovered a while later (`01:02`), the backup had already started and used the secondary WAN connection, which is bandwidth-capped to `30GB`.

{% picture 2018/outages/starman-recovery.png alt="Primary WAN recovers" %}

It is unclear why the backup did not switch back to the primary WAN connection, once it recovered. Leading theory: a persistent TCP connection to
S3 had already been established over the backup WAN and the firewall / Synology did not want to break the TCP state, so it kept using it.

Result - the `30GB` data cap was eaten up very quickly, the backup failed and the secondary WAN was now effectively offline until the next month,
when the cap reset.

{% picture 2018/outages/traffic-graph.png alt="Traffic graph of secondary WAN" %}

An additional alert was thrown about the failure of the secondary WAN by Prometheus monitoring as soon as the cap was breached
and the ISP blocked service.

{% picture 2018/outages/haproxy-alert.png alt="HAProxy back-end down alert" %}

The alert reported that a cloud-based HAProxy load-balancer was no longer able to reach my firewall
via the secondary WAN connection. This meant that when the primary WAN goes down again, all of my self-hosted webpages will become
unavailable, too.


### Mitigation

The NAS itself is not gateway-aware: it can not detect (without hackery) if the primary or secondary WAN is active and if it should
proceed with the backups.

A sensible solution is to apply mitigation from the firewall: only route NAS traffic to WAN through the primary WAN interface (previously: WAN fail-over interface).

{% picture 2018/outages/nas-firewall-rule.png alt="NAS firewall rule" %}

The NAS will not reach the Interwebs when the primary WAN is down (a downside), but it will also not eat up data-capped secondary WAN bandwidth again (a win).

The purpose of the secondary WAN is to keep public webpages accessible during a short primary WAN outage - backups can wait.

## Internet Unusable Due To DNS Failure

- **Start**: `~2018-02-17 22:00`
- **End**: `~2018-02-17 22:20`
- **Root Cause**: [Quad9](https://quad9.net) DNS resolver outage or a network outage to nearest Quad9 server
- **Discovered By**: SO

Incoming customer complaint: "The Internet is not working". Investigation revealed that the problematic laptop was in WiFi, had IP
and was able to ping `8.8.8.8`. However, ping to `neti.ee` failed. Further investigation revealed a DNS outage from that laptop
and from another client device as well. Suspecting a wider DNS outage, investigation moved over to the firewall.

The main firewall was set up to use primary and secondary [Quad9](https://quad9.net) DNS servers - it's a DNS service that is both
fast and also blocks malicious sites at the DNS level, "for free". Adding a tertiary DNS (`8.8.8.8`) to the firewall's pool of
configured DNS servers hotfixed the issue and the customer was happily using the Internet again.

{% picture 2018/outages/dns-servers.png alt="DNS servers" %}

Some minutes later, the Quad9 DNS service was working again and the hotfix could be removed.

Root cause unclear: either an outage at the nearest Quad9 distribution servers or a network failure between me and Quad9.
No similar outage has happened to date and Quad9 does not have a service status page (that I could find).

----

(This post will be updated when more interesting incidents occur)
