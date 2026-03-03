# LogiTech Solutions

## Project Overview

**LogiTech** is a backend with APIrest (customer, suppliers, products) 

The main purpose of this project is to demonstrate the manage of the language SQL and concepts such as APIRest, manage of crud, express.

This project does not include a real front, to probe the data in the API used thunderClient.

## Technologies Used

- **Express** – Create and manage of routes  
- **Postgres** – Manage of data   
- **DotEnv** - Manage of variable  

## Project Architecture

The project follows a **modular architecture**, where each part of the application has a clear and specific responsibility.

/config
├── dbconfig → connection with database
└── env.js → import to variable
/controllers
├── customers → Manage the data of customers 
├── product → Manage the data of products 
└── supplier → Manage the data of supliers 
/routes 
├── customers → Manage the routes of navigation
├── product → Manage the routes of navigation
└── supplier → Manage the routes of navigation
/services
├── customers → Manage the logic of negociation 
├── product → Manage the logic of negociation 
└── supplier → Manage the logic of negociation 


This structure helps keep the codebase **organized**, **maintainable**, and **easy to understand**.

## How use the endpoints 

First use a program where you can test the routes, recommend the **ThunderClient** or **PostMan**

the routes are 
 - get http://localhost:3001/products
 - get http://localhost:3001/customers
 - get http://localhost:3001/suppliers

 - post http://localhost:3001/products
 - post http://localhost:3001/customers
 - post http://localhost:3001/suppliers

 - put http://localhost:3001/products/:id
 - put http://localhost:3001/customers/:id
 - put http://localhost:3001/suppliers/:id

 - delete http://localhost:3001/products/:id
 - delete http://localhost:3001/customers/:id
 - delete http://localhost:3001/suppliers/:id




### deployment and execution

To start use and work in the REST API using, run the following commands:

you must be clone the repository 

```bash
git clone https://github.com/FernandaHiguita/prueba_desempeno_basesDatos.git 
```
next install all dependences 

```bash
npm install 
```

Config the varibla in the .env 

DB_HOST= 
DB_PORT=
DB_NAME= 
DB_USER= 
DB_PWD= 
APP_PORT= 

Add you credentials about your database. 

In the terminal execute this comand and run the server 

```bash
npm run dev 
```