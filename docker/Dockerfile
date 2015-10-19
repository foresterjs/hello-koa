FROM node:4.1.2

ENV LANG en_US.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential

RUN npm install -g npm-check-updates@2.3.0 yo@1.4.8 bower@1.5.3 generator-koa@0.1.5 nodemon@1.7.1
RUN npm install -g gulp@v3.9.0 gulp-nodemon@2.0.4
RUN npm install -g babel
RUN npm install node-inspector -g
RUN npm config set bin-links false --global

RUN adduser --disabled-password --gecos "" noroot; \
  echo "noroot ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER noroot
ENV HOME /home/noroot/app
WORKDIR /home/noroot/app

EXPOSE 3000
EXPOSE 8080
EXPOSE 5858

CMD sh -c 'node-inspector --cli --web-host 0.0.0.0 & gulp'


