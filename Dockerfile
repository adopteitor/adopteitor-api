FROM node:latest

WORKDIR /var/adopteitor-api
COPY package.json .
RUN npm install

EXPOSE 3030

CMD ["npm", "start"]
