// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import {routesApi} from '../../../setup/routes'

// Actions Types
export const INGREDIENTS_GET_LIST_REQUEST = 'INGREDIENTS/GET_LIST_REQUEST'
export const INGREDIENTS_GET_LIST_RESPONSE = 'INGREDIENTS/GET_LIST_RESPONSE'
export const INGREDIENTS_GET_LIST_FAILURE = 'INGREDIENTS/GET_LIST_FAILURE'
export const INGREDIENTS_GET_REQUEST = 'INGREDIENTS/GET_REQUEST'
export const INGREDIENTS_GET_RESPONSE = 'INGREDIENTS/GET_RESPONSE'
export const INGREDIENTS_GET_FAILURE = 'INGREDIENTS/GET_FAILURE'

// Actions

// Get list of ingredients
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: INGREDIENTS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'ingredients',
      fields: ['id', 'name', 'unitPrice']
    }))
      .then((response) => {
        dispatch({
          type: INGREDIENTS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.ingredients
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

// Get single ingredient
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: INGREDIENTS_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'ingredient',
      variables: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'unitPrice']
    }))
      .then((response) => {
        dispatch({
          type: INGREDIENTS_GET_RESPONSE,
          error: null,
          item: response.data.data.ingredient
        })
      })
      .catch((error) => {
        dispatch({
          type: INGREDIENTS_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create ingredient
export function create(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'ingredientCreate',
      variables, fields: ['id']
    }))
  }
}

// Remove ingredient
export function remove(variables) {
  return dispatch => {
    return axios.post(routesApi, mutation({
      operation: 'ingredientRemove',
      variables,
      fields: ['id']
    }))
  }
}
