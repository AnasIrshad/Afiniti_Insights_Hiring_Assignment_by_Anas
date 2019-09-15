// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as recipe from './recipes/fields/query'
import * as ingredient from './ingredients/fields/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...recipe,
    ...ingredient
  })
})

export default query
