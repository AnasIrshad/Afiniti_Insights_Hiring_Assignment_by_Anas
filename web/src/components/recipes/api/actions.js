// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import {routesApi} from '../../../setup/routes'

// Actions Types
export const RECIPES_GET_LIST_REQUEST = 'RECIPES/GET_LIST_REQUEST'
export const RECIPES_GET_LIST_RESPONSE = 'RECIPES/GET_LIST_RESPONSE'
export const RECIPES_GET_LIST_FAILURE = 'RECIPES/GET_LIST_FAILURE'
export const RECIPES_GET_REQUEST = 'RECIPES/GET_REQUEST'
export const RECIPES_GET_RESPONSE = 'RECIPES/GET_RESPONSE'
export const RECIPES_GET_FAILURE = 'RECIPES/GET_FAILURE'

// Actions Types
export const INGREDIENTS_GET_LIST_REQUEST = 'INGREDIENTS/GET_LIST_REQUEST'
export const INGREDIENTS_GET_LIST_RESPONSE = 'INGREDIENTS/GET_LIST_RESPONSE'
export const INGREDIENTS_GET_LIST_FAILURE = 'INGREDIENTS/GET_LIST_FAILURE'
export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS/GET_REQUEST'
export const INGREDIENTS_GET_RESPONSE = 'INGREDIENTS/GET_RESPONSE'
export const INGREDIENTS_GET_FAILURE = 'INGREDIENTS/GET_FAILURE'

// Actions

// Get list of recipes
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: RECIPES_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'recipes',
      fields: ['id', 'name', 'cost', 'isIntermediate']
    }))
      .then((response) => {
        dispatch({
          type: RECIPES_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.recipes
        })
      })
      .catch((error) => {
        dispatch({
          type: RECIPES_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single recipe
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: RECIPES_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'recipe',
      variables: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'cost']
      // fields: ['id', 'name', 'cost', 'ingredients', 'intermediateRecipes']
    }))
      .then((response) => {
        dispatch({
          type: RECIPES_GET_RESPONSE,
          error: null,
          item: response.data.data.recipe
        })
      })
      .catch((error) => {
        dispatch({
          type: RECIPES_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create recipe
export function create(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeCreate',
      variables, fields: ['id']
    }))
  }
}

// Remove recipe
export function remove(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeRemove',
      variables,
      fields: ['id']
    }))
  }
}




//#####################################################################
// Get list of Intermediate recipes
export function getListIntR(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: RECIPES_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'intermediateRecipes',
      variables: {recipeId: parseInt(id, 10)},
      fields: ['id', 'name', 'cost']
    }))
      .then((response) => {
        dispatch({
          type: RECIPES_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.intermediateRecipes
        })
      })
      .catch((error) => {
        dispatch({
          type: RECIPES_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get list of recipe ingredients
export function getListIng(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: INGREDIENTS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'recipeIngredients',
      variables: {recipeId: parseInt(id, 10)},
      fields: ['id', 'name', 'unitPrice']
    }))
      .then((response) => {
        dispatch({
          type: INGREDIENTS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.recipeIngredients
        })
      })
      .catch((error) => {
        dispatch({
          type: INGREDIENTS_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}


// addIngredient to recipe
export function addIngredient(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeAddIngredient',
      variables, fields: ['id']
    }))
  }
}

// addIngredient to recipe
export function addRecipe(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeAddIntermediateRecipe',
      variables, fields: ['id']
    }))
  }
}

// Remove ingredient
export function removeIngredient(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeRemoveIngredient',
      variables,
      fields: ['id']
    }))
  }
}
// Remove recipe
export function removeRecipe(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'recipeRemoveIntermediateRecipe',
      variables,
      fields: ['id']
    }))
  }
}
