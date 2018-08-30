---
title: '1u OpenHAB enclosure'
subtitle: 'Converting a Soekris 1u rack enclosure into a RPi OpenHAB unit'
category: Hardware
header-img: content/2018/rpi-enclosure/header.jpg
---

I have been running [MySensors][] and [OpenHAB][] for a while now. The system is set up on a Raspberry Pi 3, running [OpenHABian][].
I have built and deployed some basic MySensors nodes in my appartment, measuring things like room temperature and humidity. I have
some "smart" IoT devices to control with OpenHAB.

My home automation project begin as a prototype, but by now it's become clear that the system is useful and I want to expand it.
This means that the "I'll just throw a RPi onto a rack shelf" approach needs upgrading. I have a proper rack, why can't the RPi be properly racked?


{% asset 2018/rpi-enclosure/shelf-pi.jpg alt="Shelf for Rpi" %}

I had an empty Soekris net6501 enclosure, which fit the bill.

## Business Plan

Drill new holes into the 1u enclosure, mount Raspberry into it; rackmount the entire thing. No more free-floating Pi-s on a shelf. `#labporn`

Additional points: replace the stock `NRF24L01+` radio with the more powerful long-range version (external antenna); and support MySensors
`ERROR`, `RX` and `TX` LED-s.

## The Build

I started by measuring and drawing the layout in Inkscape. By printing the panel design on paper, I could get hole guidelines for drilling.

I planned to mount 3 LED-s to the 1u front panel for MySensors, + a toggle switch for stopping / starting home automation services on the Pi.

{% asset 2018/rpi-enclosure/drilling.jpg alt="Drilling holes" %}

Light sandpaper took care of removing the previous paint and text. Three layers of spraypaint later I had a nice black front panel.

{% asset 2018/rpi-enclosure/paintjob.jpg alt="Paintjob" %}

I used through-hole `3mm` LED sockets and a small toggle switch.

{% asset 2018/rpi-enclosure/mount.jpg alt="Mounting components" %}

I drilled eight `2.5mm` holes for mounting two Raspberry Pi-s (the 2nd Pi just rents the space in the enclosure) and Eveli proceeded
to screw them in place.

{% asset 2018/rpi-enclosure/girl-mounting.jpg alt="Mounting RPis" %}


[MySensors]: https://mysensors.org
[OpenHAB]: https://www.openhab.org
[OpenHABian]: https://github.com/openhab/openhabian
