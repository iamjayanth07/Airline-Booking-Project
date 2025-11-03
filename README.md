This is node project template,which anyone can use as it has been prepared,by keeping some of the most important code principle and project management recommendations.Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside.this will not include any kind of test (You might want to make seperate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done.for example :setting up .env so that we can use the envionment variable in a cleaner fashion this is done in the server-config.json file .
    One more example can be to setup you logging library that can help you prepare meaningful logs, so configuration for this library should also be done here.

- `routes` ->In the routes folder , we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incomming requests where we can write our validations,authentications etc.

- `controllers`-> they are kind of last middlewares as post them you call your business layer to excute the business logic .In controllers we just receive the incomming requests and data and then pass it to the business layer, and the once the business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` ->This folder contains all the logic using which we interact the DB by writing quesries, all the raw queries or ORM quesries will go here.

- `Services` -> contains the business logic and interacts with repositories for the data from the databse

- `utils` -> Contains helper methods,error classes etc.

### Setup the project
- Download this template from the github and open it in your faviourate text editor .
- In the root directory create a `.env` file aand add the following env variables.
    ```
        PORT-< port number of your choice >
    ```
    ex:
    ```
        PORT=3000
    ```
- Inside the src `src/config` folder create a file named as `config.json` write the following code 
    ```
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
 ```
- If your setting up your development environment,then write your username of your db,password of your db and in dialect mention whatever db your using ex:mysql,mariadb etc.




