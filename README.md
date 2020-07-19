# Super Simple CRUD API
Yet another Node-Postgres-Express-Mocha-API

# Getting Started
* start your database (we are using Postgres)
* start the project (on development mode, port 3000 with nodemon)

        npm install
        npm run dev

* [OR] start the project (port 3000)

        npm install
        npm start

* [OR] run the tests

        npm install
        npm test

* [OR] run with Docker (port 3001)

        npm run docker:start

    Then, run the sql script is /misc to create the schema and insert some garbage value there

* Stoping the docker environment

        npm run docker:stop

* Endpoints

        GET /api/v1/samples
        GET /api/v1/users
        GET /api/v1/users/{id}
        POST /api/v1/users

    Postman Collection in /misc

# TODO:
[IN-PROGRESS] Write a decent README file\
[DONE] Add docker-compose\
[DONE] Docker/Dev environments running in parallel\
[IN-PROGRESS] Add unit tests\
[TODO] Add integration non bell ringing tests