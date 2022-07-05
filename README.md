## Description

This application is GraphQL Service for managing and retrieving data for different entities of [Musicify microservices](https://github.com/rolling-scopes-school/node-graphql-service).

## Installation

You need to install and run microservices of Musicify application [here](https://github.com/rolling-scopes-school/node-graphql-service).
You need to run a MongoDB. You can find MONGO_URL in Musicify microservices. Highly recommended to use [Docker and the official image of MongoDB](https://hub.docker.com/_/mongo).

You need to clone or fork this repository and run
```bash
$ npm install
```
to install all needed dependencies.
Rename .env.example file to .env

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

GraphQL Service start on PORT 3000 (you can change this in .env file), default URL: http://localhost:3000/graphql

## Usage

You can send query to GraphQL Service using GraphQL syntax. Example:

```graphql
query {
    artists(limit: $number, offset: $number) {
        id
        firstName
        secondName
        middleName
        birthDate
        birthPlace
        country
        bands {
            id
            name
            origin
        }
        instruments
    }
}
```

Where $number is integer number. You can find schemas for each query in GraphQL Playground on http://localhost:3000/graphql or in repository.

You can send mutations to GraphQL Service using GraphQL syntax. Example:

```graphql
mutation {
    createArtist(createArtistInput: {
        firstName: "Kendrick"
        secondName: "Lamar"
        country: "USA"
        birthPlace: "Compton"
        }
    ) {
    firstName
    secondName
    country
    birthPlace
    }
}
```
You can find schemas for each mutation in GraphQL Playground on http://localhost:3000/graphql or in repository.