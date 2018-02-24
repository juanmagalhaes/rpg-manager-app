FROM node:8.9.4
WORKDIR /usr/src/app
COPY . ./
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3000
