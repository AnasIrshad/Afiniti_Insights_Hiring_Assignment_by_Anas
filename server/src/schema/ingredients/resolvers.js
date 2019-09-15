// App Imports
import models from '../../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op;

// Get ingredients by ID
export async function getById(parentValue, { id }) {
  return await models.Ingredient.findOne({ where: { id } })
}

// Get all ingredients
export async function getAll() {
  return await models.Ingredient.findAll({ order: [ ['createdAt', 'ASC'] ] })
}

// Create ingredient
export async function create(parentValue, { name, unitPrice }) {
  console.log(name)
  console.log(unitPrice)
  return await models.Ingredient.create({ name, unitPrice })
}

// Delete ingredient
export async function remove(parentValue, {id}) {

  var recipeIds = []
  await models.RecipeIngredient.findAll({ where: { ingredientId: id }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            recipeIds.push(ingred.recipeId)
            // updateRecipeCost(ingred.recipeId)

        })
    });

  var result = await models.Ingredient.destroy({ where: { id } })

  await recipeIds.forEach((recipeId) => {

      updateRecipeCost(recipeId)
  })

  return result
}



// update recipe cost
async function updateRecipeCost(recipeId){

// calculate ingredientCost
  var ingredientCost = 0
  await models.RecipeIngredient.findAll({ where: { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            ingredientCost = ingredientCost + ingred.total
            console.log('ingred.total: ' + ingred.total)
        })
    });
  console.log('ingredientCost: ' + ingredientCost)


// calculate intermediateRecipeCost
  var intermediateRecipeCost = 0
  await models.IntermediateRecipe.findAll({ where:  { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            intermediateRecipeCost = intermediateRecipeCost + ingred.total
            console.log('ingred.total: ' + ingred.total)
        })
    });
  console.log('intermediateRecipeCost: ' + intermediateRecipeCost)


// calculate cost
  var cost = ingredientCost + intermediateRecipeCost

// Update cost
  models.Recipe.update(
    { cost: cost },
    { where: { id: recipeId } }
  )



// // calculate intermediateRecipeTotalCost
//   var intermediateRecipeTotalCost = 0
//   await models.IntermediateRecipe.findAll({ where: { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
//         ingreds.forEach((ingred) => {
//             intermediateRecipeTotalCost = intermediateRecipeTotalCost + ingred.total
//             console.log('ingred.total: ' + ingred.total)
//         })
//     });
//   console.log('intermediateRecipeTotalCost: ' + intermediateRecipeTotalCost)
//
//
//
// // calculate cost
//   var totalCost = ingredientCost + intermediateRecipeTotalCost
//
// // Update cost
//   models.Recipe.update(
//     { cost: totalCost },
//     { where: { id: recipeId } }
//   )

}
