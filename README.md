# adopteitor-api
Backend for adopteitor using FeathersJS.

## Idea:
  Adopteitor is an Open Source, complete solution for Animal Shelters all around the world.
  It is separated in 3 different projects:
  - adopteitor-api is the backend, where the data structure is defined, the data gets processed and persisted. All the business logic is in this project, and works as the "brain" of Adopteitor.
  - [adopteitor-admin](https://github.com/adopteitor/adopteitor-admin) is the backend's front-end! A simple web application that lets the ADMINS interact with the adopteitor-api with WRITE PRIVILEGES. That means this is where users with Administrator role can add, edit and delete the resources, like Animals, Humans and Contracts.
  - [adopteitor-client](https://github.com/adopteitor/adopteitor-client) is the public front-end of the adopteitor system. It provides a homepage, a filtered featured list of animals, a detailed view for each animal. It also has a way to register in the system as a Human, being able to sign an adoption contract which links that Human to an Animal. Finally, it provides a way that registered and anonymous Humans to donate money for the shelter.

## Tech:
  - API: https://feathersjs.com/
  - Models: http://mongoosejs.com


## Installation:
### Dependencies:
You need to have the following tools installed in your local machine:
- Docker
- docker-compose

### Install and run
#### With make commands
You'll need to have Make installed.

After cloning the repo, run the following from the root folder:

```
$ npm install
$ make build
$ make run
```

#### By hand

```
$ cp .env.dist .env
$ npm install
$ docker-compose up -d
```
#### Logs
To view the output of the main application do:
```
$ docker logs -f adopteitor_api
```
You can view the output of the mongo container using *adopteitor_mongo* instead.

You'll find the API in http://localhost:3030

## Features

### Roles:
  - USER: Can only READ the resources.
  - ADMIN: Can READ and WRITE the resources.

### Resources:
  - Animals:
  - Humans:
  - Contracts:
  - Donations:
