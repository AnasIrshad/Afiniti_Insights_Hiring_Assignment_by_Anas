// Imports
import {GraphQLString, GraphQLInt, GraphQLBoolean} from 'graphql'

// App Imports
import RecipeType from '../type'
import {create, remove, setIsIntermediate, addIngredient, removeIngredient, addIntermediateRecipe, removeIntermediateRecipe } from '../resolvers'


// Recipe create
export const recipeCreate = {
  type: RecipeType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    }
  },
  resolve: create
}

// Recipe setIntermediate
export const recipeSetIsIntermediate = {
  type: RecipeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    isIntermediate: {
      name: "isIntermediate",
      type: GraphQLBoolean
    }
  },
  resolve: setIsIntermediate
}

// Recipe remove
export const recipeRemove = {
  type: RecipeType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Recipe addIngredient
export const recipeAddIngredient = {
  type: RecipeType,
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    },

    ingredientId: {
      name: 'ingredientId',
      type: GraphQLInt
    },

    quantity: {
      name: 'quantity',
      type: GraphQLInt
    }
  },
  resolve: addIngredient
}

// Recipe removeIngredient
export const recipeRemoveIngredient = {
  type: RecipeType,
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    },

    ingredientId: {
      name: 'ingredientId',
      type: GraphQLInt
    }
  },
  resolve: removeIngredient
}


// Recipe addIntermediateRecipe
export const recipeAddIntermediateRecipe = {
  type: RecipeType,
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    },

    intermRecipeId: {
      name: 'intermRecipeId',
      type: GraphQLInt
    },

    quantity: {
      name: 'quantity',
      type: GraphQLInt
    }
  },
  resolve: addIntermediateRecipe
}

// Recipe removeIntermediateRecipe
export const recipeRemoveIntermediateRecipe = {
  type: RecipeType,
  args: {
    recipeId: {
      name: 'recipeId',
      type: GraphQLInt
    },

    intermRecipeId: {
      name: 'intermRecipeId',
      type: GraphQLInt
    }
  },
  resolve: removeIntermediateRecipe
}
