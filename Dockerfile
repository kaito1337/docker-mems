FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm i
COPY . /usr/src/app
RUN npm run build
CMD ["npm","run", "start"]