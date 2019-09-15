// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from '../setup/databaseConnection'

const models = {
  Recipe: databaseConnection.import('./recipe'),
  Ingredient: databaseConnection.import('./ingredient'),
  IntermediateRecipe: databaseConnection.import('./intermediateRecipe'),
  RecipeIngredient: databaseConnection.import('./recipeIngredient')
}

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
