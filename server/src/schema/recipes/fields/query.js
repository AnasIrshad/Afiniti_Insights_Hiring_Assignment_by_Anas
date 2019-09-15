// Imports
import {GraphQLInt, GraphQLList, GraphQLBoolean} from 'graphql'

// App Imports
import RecipeType from '../type'
import IngredientType from '../../../schema/ingredients/type'
import {getAll, getById, getAllIngredients, getAllIntermediateRecipes, getByIsIntermediate} from '../resolvers'

// Recipes All
export const recipes = {
  type: new GraphQLList(RecipeType),
  resolve: getAll
}

// Recipe By ID
export const recipe = {
  type: RecipeType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}

// Recipe By IsIntermediate
export const recipeIsIntermediate = {
  type: new GraphQLList(RecipeType),
  args: {
    isIntermediate: {
      name: 'isIntermediate',
      type: GraphQLBoolean
    }
  },
  resolve: getByIsIntermediate
}

// RecipeIngredients All
export const recipeIngredients = {
  type: new GraphQLList(IngredientType),
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    }
  },
  resolve: getAllIngredients
}


// IntermediateRecipes All
export const intermediateRecipes = {
  type: new GraphQLList(RecipeType),
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    }
  },
  resolve: getAllIntermediateRecipes
}
