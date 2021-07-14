# Base ruby image + all the dependencies and env vars we need
FROM ruby:3.0.1-alpine AS base

RUN apk update && \
    apk upgrade && \
    apk add postgresql-libs tzdata && \
    rm -rf /var/cache/apk/*

ENV BUNDLE_PATH=/app/vendor/bundle
ENV RAILS_ENV=development
# webpacker:install fails on windows without this env
ENV DATABASE_URL=postgres://postgres@database:5432/cuckoo

# This is just a dummy secret key to avoid rails barfing on startup. The real one will be passed set on runtime
ENV SECRET_KEY_BASE=efa3150724c12b66d21bc3166eeef76d351fb4eb57c56a62e8bbe6a227c249ff19f3a4a621ed90f9c0a56cea7b4b9753660256d9caf526dc3441a99cb7f2b062

RUN apk update && \
    apk add nodejs-current yarn \
            postgresql-dev postgresql-client \
            gcc g++ git make autoconf automake libtool file nasm python2

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN gem install bundler
RUN bundle install