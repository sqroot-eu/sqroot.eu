# sqroot.eu Blog

[![Travis](https://img.shields.io/travis/sqroot-eu/sqroot.eu.svg)](https://travis-ci.org/sqroot-eu/sqroot.eu)
[![Docker Pulls](https://img.shields.io/docker/pulls/sqroot/sqroot.eu.svg)](https://hub.docker.com/r/sqroot/sqroot.eu/)

These are Source files to my personal blog, [sqroot.eu](https://sqroot.eu).

## Building

This is a Jekyll site. You need to have Ruby and `bundle` installed (`sudo apt-get install ruby-full && sudo gem install bundler`).
You'll also need Node and npm to install build tools and static assets.

```bash
# Install Ruby dependencies`
$ bundle install --path=vendor

# Build the Jekyll site (into `_site` directory)
$ bundle exec jekyll build

# Install build tools
$ npm install

# Install JS and CSS files
$ cd _assets && ../node_modules/bower/bin/bower install && cd ..

# Build the docker image
$ docker-compose build
```

## License

Code under Apache2 for learning purposes.

Content (images and text) (c) to Ando Roots - do not re-publish without written permission!
