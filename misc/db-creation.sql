-- Postgres
set timezone to 'America/Sao_Paulo';
create schema admiral;
create table admiral.users (
    id serial primary key,
    name varchar(255),
    birthdate date
);

insert into admiral.users(name, birthdate) values ('John Doe', to_date('1990-04-14', 'YYYY-MM-DD'));
insert into admiral.users(name, birthdate) values ('Jane Doe', to_date('1987-08-22', 'YYYY-MM-DD'));


select * from admiral.users;