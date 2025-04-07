# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# DB deatils 
You will also need to create a PSQL DB with username = postgresql
and password= postgresql 

please give all the write access to the user you created 

    sudo -u postgres psql

    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgresql;
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgresql;



You will need to create a .env file 
location should be RentConnect/Backend/
in the .env file set up 

PG_USERNAME=postgresql
PG_PASSWORD=postgresql

in your database.yml file you will need to add 

default: &default

  adapter: postgresql

  encoding: unicode

  username: <%= ENV['postgresql'] %>

  password: <%= ENV['postgresql'] %>

  host: localhost

  # For details on connection pooling, see Rails configuration guide

  # https://guides.rubyonrails.org/configuring.html#database-pooling

  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>



development:

  <<: *default

  database: backend_development

If its already there then no need to make changes you might just need to call the DB with envoriemnt Variables that you have 

to run the API Request ( in postman)

Sign-up Url - http://localhost:3001/users (Post Request)

Json Body 

    {

  "user": {

    "email": "test9@example.com",

    "password": "password",

    "password_confirmation": "password",

    "first_name": "John9",

    "last_name": "Doe9",

    "role": 0

  }

}