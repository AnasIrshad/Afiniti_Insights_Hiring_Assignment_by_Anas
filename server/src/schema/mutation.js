// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as recipe from './recipes/fields/mutations'
import * as ingredient from './ingredients/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...recipe,
    ...ingredient
  }
})

export default mutation
