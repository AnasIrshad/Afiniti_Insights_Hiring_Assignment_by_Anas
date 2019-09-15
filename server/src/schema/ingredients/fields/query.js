// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import IngredientType from '../type'
import {getAll, getById} from '../resolvers'

// Ingredients All
export const ingredients = {
  type: new GraphQLList(IngredientType),
  resolve: getAll
}

// Ingredient By ID
export const ingredient = {
  type: IngredientType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}
