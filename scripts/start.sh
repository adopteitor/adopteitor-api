#!/bin/sh

if [[ $ENV = "production" ]]
then
    npm run start
else
    npm run dev
fi
