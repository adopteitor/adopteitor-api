#!/bin/bash

if [ ! -d "/data/db" ]; then
    sudo mkdir -p /data/db
fi
sudo chown -R `id -u` /data/db  

cp .env.dist .env

npm install
docker-compose build