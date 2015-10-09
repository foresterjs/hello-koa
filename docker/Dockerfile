FROM node:4.1.2

ENV LANG en_US.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential

RUN npm install -g npm-check-updates@2.3.0 yo@1.4.8 bower@1.5.3 generator-koa@0.1.5
RUN npm config set bin-links false --global

RUN adduser --disabled-password --gecos "" noroot; \
  echo "noroot ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER noroot
ENV HOME /home/noroot/app
WORKDIR /home/noroot/app

EXPOSE 3000

CMD ["npm", "start"]


