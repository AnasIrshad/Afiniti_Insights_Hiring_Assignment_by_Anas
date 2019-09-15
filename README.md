![Afiniti_Insight_Hiring_Assignment](https://raw.githubusercontent.com/AnasIrshad/Afiniti_Insights_Hiring_Assignment_by_Anas/master/web/public/dev-logo.png)


# Afiniti Insight Hiring Assignment

Simple Food Recipes and Ingredients management App

> Take-home Assignemnt Completed as part of Afiniti Insight hiring process. Created the application in the minimun possible
time as the task was assigned to asses the quick learning capabilities and adaptation of new technologies. Developed all the required features and used all the preffered technologies. Although being new to the complete technology stack, choose to work with all the packages that I have never worked with before. Learned all the technologies used for both the frontend and the backend along the way, starting from the very basics upto the level sufficient for the development of the application while contining the development along the learning path.


- [x] Used All prefferd technologies
- [x] Completed in very little time
- [x] Followed Standard Application structure
- [x] Learned all the technologies along the way
- [x] Support for multiple database systems - changing a single line of code

---

### API
> built with  **Node** + **Express** + **GraphQL** + **Sequelize**.


###
### WebApp
> built with  **React** + **Redux**.


###
### Database
> **Postgres** (supports **MySQL**, **Sqlite** and **MSSQL**)


###
###
> Written in **ES6** using **Babel** + **Webpack**.


---

# Architecture Design

![Architecture Design](https://raw.githubusercontent.com/AnasIrshad/Afiniti_Insights_Hiring_Assignment_by_Anas/master/web/public/arch.png)

---

## 📝 Features
- [x] List Ingredients
- [x] Add Ingredient
- [x] Delete Ingredient
- [x] View single Ingredient
- [x] List Recipes
- [x] Add Recipe
- [x] Delete Recipe
- [x] View single Recipe
- [x] List Recipe Ingredients
- [x] Add Recipe Ingredient
- [x] Remove Recipe Ingredient
- [x] List Intermediate Recipes
- [x] Add Intermediate Recipes
- [x] Remove Intermediate Recipes
- [x] Recipe Cost Calculation

---

## Required Environment Setup (**Optional**)

### open new terminal

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

`sudo apt-get install gcc g++ make`

`curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

`sudo apt-get update`

`sudo apt-get install yarn`

`sudo apt install postgresql`



<!--
npm install pg sequelize --save
-->

---

## Database Setup

### open new terminal

`sudo -i -u postgres`

`service postgresql start`

`createdb mydatabase`


`psql`

`ALTER USER postgres PASSWORD 'postgres';`



### Database Commands
`psql`

`psql mydatabase`

list all databases    `\l`

list all tables       `\dt`

describe a table      `\d`


---

## ▶️ App installation & Running


### open 1st terminal & Run API Server

- Clone repo `git clone https://github.com/AnasIrshad/Afiniti_Insights_Hiring_Assignment_by_Anas.git`
- `cd Afiniti_Insights_Hiring_Assignment_by_Anas`
- Install NPM modules API `cd server` and `npm install`
- Modify `/server/src/config/database.json` for database credentials
- Modify `/server/src/config/config.json` for API port (optional)
- Run API server `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/


### open 2nd terminal & Run Web App

- `cd Afiniti_Insights_Hiring_Assignment_by_Anas`
- Install NPM modules Web App `cd web` and `npm install`
- Modify `/web/.env` for web port (optional)
- Run Webapp `cd web` and `npm start`, browse web at http://localhost:3000/



### Sample API logs
```
[nodemon] starting `babel-node src/index.js`
SETUP - Connecting database...
SETUP - Loading modules...
SETUP - GraphQL...
SETUP - Syncing database tables...
INFO - Database connected.
INFO - Database sync complete.
SETUP - Starting server...
INFO - Server started on port 8000.
```

---


## 🏗 Core Structure
    Afiniti_Insights_Hiring_Assignment_by_Anas
      ├── server (server.example.com)
      │   ├── src
      │   │   ├── config
      │   │   ├── models
      │   │   ├── schema
      │   │   │   ├── ingredients
      │   │   │   └── recipes
      │   │   │   
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   ├── .babelrc
      │   ├── .gitignore
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── components
      │   │   │   ├── common
      │   │   │   ├── home
      │   │   │   ├── ingredients
      │   │   │   ├── recipes
      │   │   │   └── App.js
      │   │   │
      │   │   ├── setup
      │   │   ├── index.js
      │   │   └── registerServiceWorker.js
      │   │
      │   ├── .env
      │   ├── .gitignore
      │   └── package.json
      │
      └── README.md



---


## Sample GraphQL Queries

These queries are generated on client side using `queryBuilder()` helper defined in `/web/src/setup/helpers.js`


<table width="100%" style="width: 100%">
    <tbody>
        <tr valign="top">
            <td width="50%" style="width: 50%">
                <p>Mutation - Create Ingredient</p>
                <pre>
mutation {
  ingredientCreate(
    name: "ingredient1",
    unitPrice: 11) {
    id
  }
}
                </pre>
            </td>
            <td width="50%" style="width: 50%">
                <p>Response</p>
                <pre>
{
  "data": {
    "ingredientCreate": {
      "id": 1
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Remove Ingredient</p>
                <pre>
mutation {
  ingredientRemove(id: 1) {
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "ingredientRemove": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Create Recipe</p>
                <pre>
mutation {
  recipeCreate(
    name: "recipe1") {
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeCreate": {
      "id": 1
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Remove Recipe</p>
                <pre>
mutation {
  recipeRemove(id: 1) {
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeRemove": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Add Ingredient to Recipe</p>
                <pre>
mutation {
  recipeAddIngredient(
    recipeId: 1,
    ingredientId: 1,
  	quantity: 10){
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeAddIngredient": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Remove Ingredient from Recipe</p>
                <pre>
mutation {
  recipeRemoveIngredient(
    recipeId: 1,
    ingredientId: 1){
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeRemoveIngredient": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Add Intermediate Recipe to Recipe</p>
                <pre>
mutation {
  recipeAddIntermediateRecipe(
    recipeId: 1,
    intermRecipeId: 2,
  	quantity: 2){
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeAddIntermediateRecipe": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Remove Intermediate Recipe from Recipe</p>
                <pre>
mutation {
  recipeRemoveIntermediateRecipe(
    recipeId: 1,
    intermRecipeId: 2){
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeRemoveIntermediateRecipe": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - List Ingredients</p>
                <pre>
query {
  ingredients{
    id,
    name,
    unitPrice
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "ingredients": [
      {
        "id": 1,
        "name": "ingredient1",
        "unitPrice": 11
      },
      {
        "id": 2,
        "name": "ingredient2",
        "unitPrice": 22
      }
    ]
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - View single Ingredient</p>
                <pre>
query {
  ingredient(id: 1){
    id,
    name,
    unitPrice
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "ingredient": {
      "id": 1,
      "name": "ingredient1",
      "unitPrice": 11
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - List Recipes</p>
                <pre>
query {
  recipes{
    id,
    name,
    cost,
    ingredients{
      id,
      name,
      unitPrice
    }
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipes": [
      {
        "id": 2,
        "name": "recipe2",
        "cost": 0,
        "ingredients": []
      },
      {
        "id": 1,
        "name": "recipe1",
        "cost": 330,
        "ingredients": [
          {
            "id": 2,
            "name": "ingredient2",
            "unitPrice": 22
          },
          {
            "id": 1,
            "name": "ingredient1",
            "unitPrice": 11
          }
        ]
      }
    ]
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - View Single Recipe</p>
                <pre>
query {
  recipe(id: 1){
    id,
    name,
    cost,
    ingredients{
      id,
      name,
      unitPrice
    },
    intermediateRecipes{
      id,
      name,
      cost
    }
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipe": {
      "id": 1,
      "name": "recipe1",
      "cost": 330,
      "ingredients": [
        {
          "id": 1,
          "name": "ingredient1",
          "unitPrice": 11
        },
        {
          "id": 2,
          "name": "ingredient2",
          "unitPrice": 22
        }
      ],
      "intermediateRecipes": [
        {
          "id": 2,
          "name": "recipe2",
          "cost": 0
        }
      ]
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - Ingredients of a Recipe</p>
                <pre>
query {
  recipeIngredients(recipeId: 1) {
    id,
    name,
    unitPrice
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "recipeIngredients": [
      {
        "id": 1,
        "name": "ingredient1",
        "unitPrice": 11
      },
      {
        "id": 2,
        "name": "ingredient2",
        "unitPrice": 22
      }
    ]
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - Intermediate Recipes of a Recipe</p>
                <pre>
query {
  intermediateRecipes(recipeId: 1) {
    id,
    name,
    cost,
    ingredients{
      id,
      name,
      unitPrice
    },
    intermediateRecipes{
      id,
      name,
      cost
    }
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "intermediateRecipes": [
      {
        "id": 2,
        "name": "recipe2",
        "cost": 110,
        "ingredients": [
          {
            "id": 1,
            "name": "ingredient1",
            "unitPrice": 11
          }
        ],
        "intermediateRecipes": null
      }
    ]
  }
}
                </pre>
            </td>
        </tr>
    </tbody>
</table>




----



## 🎩 Authors

- Muhammad Anas - [GitHub](https://github.com/AnasIrshad)


## 📜 License

Copyright (c) 2019 Muhammad Anas https://github.com/AnasIrshad
