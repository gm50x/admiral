# PG - Functional Example

A super simple example of using pg (PostgresClient) in a functional way.

Database (Postgres running in docker) with simple funky schema and users table.

- getPostgresClient({Client, database, user, password, host }): Injectable Client(pg class) and db configs => exposes a query method
- getAllUsers({client}): Injectable client => knows the sql query and returns all users