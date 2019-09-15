// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Ingredient type
const IngredientType = new GraphQLObjectType({
  name: 'ingredient',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    unitPrice: {type: GraphQLInt},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default IngredientType
