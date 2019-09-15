// Imports

// App Imports
import {
  INGREDIENTS_GET_LIST_REQUEST,
  INGREDIENTS_GET_LIST_RESPONSE,
  INGREDIENTS_GET_LIST_FAILURE,
  INGREDIENTS_GET_REQUEST,
  INGREDIENTS_GET_RESPONSE,
  INGREDIENTS_GET_FAILURE,
} from './actions'

// Ingredients list

// Initial State
const ingredientsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const ingredients = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case INGREDIENTS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case INGREDIENTS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case INGREDIENTS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single ingredient

// Initial State
const ingredientInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const ingredient = (state = ingredientInitialState, action) => {
  switch (action.type) {
    case INGREDIENTS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case INGREDIENTS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case INGREDIENTS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
