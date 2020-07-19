-- Postgres
set timezone to 'America/Sao_Paulo';
create schema store;
create table store.users (
    id serial primary key,
    name varchar(255),
    birthdate date
);

insert into store.users(name, birthdate) values ('John Doe', to_date('1990-04-14', 'YYYY-MM-DD'));
insert into store.users(name, birthdate) values ('Jane Doe', to_date('1987-08-22', 'YYYY-MM-DD'));


select * from store.users;