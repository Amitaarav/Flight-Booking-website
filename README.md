# This is a base node js project template, which anyone can use as it has a lot of features built in.

- 'src'--> Inside the src folder all the actual source code regarding the project will reside, this woll not including tany kind of tests.


- 'config' --> In this folder anything and everything regarding any configuration or setup of a library or module woll be done. For example: setting up 'dotenv'. so that we can use the environment variables anywhere in acleaner fashion, this is done un the 'server-config.js'. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done in this folder.

- 'routes' -> In the routes folder, we register a route and corresponding middleware and controller to it.

- 'middleware' --> Tehy are just going to intercept the incoming requests where we can write our validators, authentication, authorization, etc.

- 'controllers' --> This is where we write our business logic.

- 'repositories' --> This is where we write our database queries.

- 'services' --> This is where we write our business logic that is not related to the database.

- 'utils' --> This is where we write our utility functions that can be used across the application.

# Setup the project
 -  Download this template from github and open in your favorite code editor.
 - Go inside the folder path and execute the following command to install the dependencies.
... 

npm install

...

 - Inside the src/config folder create a file named as 'config.json' and write the following code:
... 

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

...

- Go inside the `src` folder and execute the following command 
    ...

    npx sequelize-cli init

    ...

    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

-
- If you are setting up your development enviornment, then write the username of your db, password of your db, database name of your db, host of your db and dialect of your db in the 'development' object of the 'config.json' file.

- If you are setting up your test or production enviornment, then write the username of your db, password of your db, database name of your db, host of your db and dialect of your db in the 'test' or 'production' object of the 'config.json' file.

- migration file is used for version controlling -- these are simple language script -- how to maintain version of your database.

- seed file is used for seeding your database -- these are simple language script -- how to insert data into your database.

- To run the migration file, use the command 'npx sequelize-cli db:migrate'.

- To run the seed file, use the command 'npx sequelize-cli db:seed:all'.

- To migrate undo the last version, use the command 'npx sequelize-cli db:migrate:undo'.

- To run the server execute

 ...

   npm run dev
   
 ...