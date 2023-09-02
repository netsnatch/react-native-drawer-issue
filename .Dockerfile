FROM node:16-slim

RUN npm i --location=global eas-cli@~4.1 && ln -s /app/node_modules/.bin/expo /usr/local/bin/expo
RUN apt update && apt install -y --no-install-recommends git procps ca-certificates
