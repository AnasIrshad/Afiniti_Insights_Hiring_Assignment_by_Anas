// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import IngredientType from '../type'
import {create, remove} from '../resolvers'

// Ingredient create
export const ingredientCreate = {
  type: IngredientType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    unitPrice: {
      name: 'unitPrice',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Ingredient remove
export const ingredientRemove = {
  type: IngredientType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
