FROM node:latest

WORKDIR /var/adopteitor-api
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

EXPOSE 3030

CMD ["bash", "start.sh"]
