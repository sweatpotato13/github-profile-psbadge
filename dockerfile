# docker build -t psbadge . -f Dockerfile
# docker run -d -p 3000:3000 --name psbadge psbadge 

### BASE
FROM node:14.13.1-alpine3.12 AS base
LABEL maintainer "CuteWisp <sweatpotato13@gmail.com>"
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock /tmp/

### DEPENDENCIES
FROM base AS dependencies
# Install Node.js dependencies
RUN cd /tmp && yarn --pure-lockfile --production

### RELEASE
FROM base AS development
# Copy app sources
COPY ./dist ./dist
COPY ./package.json .
# Copy dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules

CMD ["yarn", "start:prod"]
