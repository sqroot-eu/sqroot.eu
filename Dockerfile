FROM sqroot/nginx

COPY _site /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
