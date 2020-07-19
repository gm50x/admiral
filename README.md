# Super Simple CRUD API
Yet another Node-Postgres-Express-Mocha-API

# Getting Started
* start your database (we are using Postgres)
* start the project (on development mode)

        npm install
        npm run dev

* [OR] start the project

        npm install
        npm start

* [OR] run the tests

        npm install
        npm test

* [OR] run with Docker

        docker-compose up --build

    Then, run the sql script is /misc to create the schema and insert some garbage value there

* Endpoints

        GET /api/v1/samples
        GET /api/v1/users
        GET /api/v1/users/{id}
        POST /api/v1/users

    Postman Collection in /misc

# TODO:
[IN-PROGRESS] Write a decent README file\
[TODO] Add docker-compose\
[TODO] Add more endpoints\
[IN-PROGRESS] Add unit tests\
[TODO] Add integration non bell ringing tests