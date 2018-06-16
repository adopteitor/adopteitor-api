# adopteitor-api
Backend for adopteitor using FeathersJS.

## Idea:
  Adopteitor is an Open Source, complete solution for Animal Shelters all around the world.
  It is separated in 3 different projects:
  - adopteitor-api is the backend, where the data structure is defined, the data gets processed and persisted. All the business logic is in this project, and works as the "brain" of Adopteitor.
  - [adopteitor-admin](https://github.com/adopteitor/adopteitor-admin) is the backend's front-end! A simple web application that lets the ADMINS interact with the adopteitor-api with WRITE PRIVILEGES. That means this is where users with Administrator role can add, edit and delete the resources, like Animals, Humans and Contracts.
  - [adopteitor-client](https://github.com/adopteitor/adopteitor-client) is the public front-end of the adopteitor system. It provides a homepage, a filtered featured list of animals, a detailed view for each animal, a way to register in the system as a Human, being able to sign an adoption contract which links that Human with an Animal. Also provides a way that registered Humans (and anonymous ones) to donate money for the shelter.

## Start:
```shell
  $ npm install
  $ npm run start
```

## Roles:
  - USER: Can only READ the resources.
  - ADMIN: Can READ and WRITE the resources.

## Resources:
  - Animals:
  - Humans:
  - Contracts:
  - Donations:
