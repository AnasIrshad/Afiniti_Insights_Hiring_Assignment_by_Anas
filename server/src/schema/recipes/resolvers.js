// App Imports
import models from '../../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op;

// Get recipes by ID
export async function getById(parentValue, { id }) {
  return await models.Recipe.findOne({ where: { id }, include: [{ all: true, nested: true }] })
}

// Get all recipes
export async function getAll() {
  return await models.Recipe.findAll({include: [{ all: true, nested: true }]}, { order: [ ['createdAt', 'ASC'] ] })
}

// recipe setIntermediate
export async function setIsIntermediate(parentValue, { id, isIntermediate }){
  await models.Recipe.update(
    { isIntermediate: isIntermediate },
    { where: { id } }
  )
  return await models.Recipe.findOne({ where: { id } })
}

// Get recipes by IsIntermediate
export async function getByIsIntermediate(parentValue, { isIntermediate }) {
  return await models.Recipe.findAll({ where: { isIntermediate: isIntermediate }, include: [{ all: true, nested: true }] }, { order: [ ['createdAt', 'ASC'] ] })
}

// Create recipe
export async function create(parentValue, { name }) {
  console.log(name)
  // console.log(cost)
  var cost = new Number(0);
  var isIntermediate = new Boolean(false);
  return await models.Recipe.create({ name, cost, isIntermediate })
}

// Delete recipe
export async function remove(parentValue, {id}) {


  var recipeIds = []
  await models.IntermediateRecipe.findAll({ where: { intermRecipeId: id }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            recipeIds.push(ingred.recipeId)
        })
    });

  var result = await models.Recipe.destroy({ where: { id } })

  await recipeIds.forEach((recipeId) => {
      updateRecipeCost(recipeId)
  })

  return result
}

// Add ingredient
export async function addIngredient(parentValue, { recipeId, ingredientId, quantity }) {
  console.log('recipeId: ' + recipeId)
  console.log('ingredientId: ' + ingredientId)
  console.log('quantity: ' + quantity)
  var total
  await models.Ingredient.findOne({ where: { id: ingredientId } }).then(ingred => {
        total = ingred.unitPrice * quantity
        console.log('unitPrice: ' + ingred.unitPrice)
    });
  console.log('total: ' + total)

  var result = await models.RecipeIngredient.create({ recipeId, ingredientId, quantity, total })

  await updateRecipeCost(recipeId)

  return result
}


// Remove ingredient
export async function removeIngredient(parentValue, { recipeId, ingredientId }) {
  var result =  await models.RecipeIngredient.destroy({ where: { recipeId, ingredientId } })

  await updateRecipeCost(recipeId)

  return result
}

// Get all recipeIngredients
export async function getAllIngredients(parentValue, { recipeId }) {

  console.log(recipeId)
  var ingredientIds = [];
  await models.RecipeIngredient.findAll({ where: { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            ingredientIds.push(ingred.ingredientId);
            console.log('ingredientId pushed: ' + ingred.ingredientId)
        })
    });

  return await models.Ingredient.findAll({ where: { id: ingredientIds }, order: [ ['createdAt', 'ASC'] ] })
}








// Add IntermediateRecipe
export async function addIntermediateRecipe(parentValue, { recipeId, intermRecipeId, quantity }) {
  console.log('recipeId: ' + recipeId)
  console.log('intermRecipeId: ' + intermRecipeId)
  console.log('quantity: ' + quantity)
  var total
  await models.Recipe.findOne({ where: { id: intermRecipeId } }).then(ingred => {
        total = ingred.cost * quantity
        console.log('cost: ' + ingred.cost)
    });
  console.log('total: ' + total)

  var result = await models.IntermediateRecipe.create({ recipeId, intermRecipeId, quantity, total })

  await updateRecipeCost(recipeId)
  models.Recipe.update(
    { isIntermediate: true },
    { where: { id: intermRecipeId } }
  )
  return result
}

// Remove IntermediateRecipe
export async function removeIntermediateRecipe(parentValue, { recipeId, intermRecipeId }) {
  var result =  await models.IntermediateRecipe.destroy({ where: { recipeId, intermRecipeId } })

  await updateRecipeCost(recipeId)

  return result
}


// Get all IntermediateRecipe
export async function getAllIntermediateRecipes(parentValue, { recipeId }) {

  console.log(recipeId)
  var intermediateRecipeIds = [];
  await models.IntermediateRecipe.findAll({ where: { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
        ingreds.forEach((ingred) => {
            intermediateRecipeIds.push(ingred.intermRecipeId);
            console.log('intermRecipeId pushed: ' + ingred.intermRecipeId)
        })
    });

  return await models.Recipe.findAll({ where: { id: intermediateRecipeIds }, include: [{ all: true, nested: true }] , order: [ ['createdAt', 'ASC'] ] })
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
  await models.IntermediateRecipe.findAll({ where: { recipeId }, order: [ ['createdAt', 'ASC'] ] }).then(ingreds => {
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
}
