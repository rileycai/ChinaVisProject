FROM node:alpine

RUN mkdir -p /var/chinavis
WORKDIR /var/chinavis

ADD . .
RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8094