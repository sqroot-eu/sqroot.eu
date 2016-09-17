FROM nginx
MAINTAINER Ando Roots <ando@sqroot.eu>

RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ /var/run/ && \
	rm -rf /etc/nginx/conf.d/ && \
	chmod -R 644 /etc/nginx/*

COPY _site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
