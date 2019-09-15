// Imports
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// App Imports
import {routes} from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/Home'
import About from './home/About'
import RecipesList from './recipes/List'
import RecipesCreate from './recipes/Create'
import RecipesView from './recipes/View'
import RecipesAddIngredient from './recipes/AddIngredient'
import RecipesAddIntermediateRecipe from './recipes/AddInterRecipe'
import IngredientsList from './ingredients/List'
import IngredientsCreate from './ingredients/Create'
import IngredientsView from './ingredients/View'

// Component
const App = () => (
  <Layout>
    <Switch>
      {/* Common */}
      <Route path={routes.home} component={Home} exact/>
      <Route path={routes.about} component={About}/>

      {/* Recipes */}
      <Route path={routes.recipes.list} component={RecipesList} exact/>
      <Route path={routes.recipes.create} component={RecipesCreate}/>
      <Route path={routes.recipes.view(':id')} component={RecipesView}/>
      <Route path={routes.recipes.addIngredient(':id')} component={RecipesAddIngredient}/>
      <Route path={routes.recipes.addIntermediateRecipe(':id')} component={RecipesAddIntermediateRecipe}/>

      {/* Ingredients */}
      <Route path={routes.ingredients.list} component={IngredientsList} exact/>
      <Route path={routes.ingredients.create} component={IngredientsCreate}/>
      <Route path={routes.ingredients.view(':id')} component={IngredientsView}/>
    </Switch>
  </Layout>
)

export default App
