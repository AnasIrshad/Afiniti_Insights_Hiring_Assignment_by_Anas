// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean} from 'graphql'

import IngredientType from '../../schema/ingredients/type'


// Recipe type
const RecipeType = new GraphQLObjectType({
  name: 'recipe',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    cost: {type: GraphQLInt},
    isIntermediate: {type: GraphQLBoolean},
    ingredients: {type: new GraphQLList(IngredientType)},
    intermediateRecipes: {type: new GraphQLList(RecipeType)},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default RecipeType
