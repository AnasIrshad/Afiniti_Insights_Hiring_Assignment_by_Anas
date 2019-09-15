// Imports

// App Imports
import {
  RECIPES_GET_LIST_REQUEST,
  RECIPES_GET_LIST_RESPONSE,
  RECIPES_GET_LIST_FAILURE,
  RECIPES_GET_REQUEST,
  RECIPES_GET_RESPONSE,
  RECIPES_GET_FAILURE,
} from './actions'

// Recipes list

// Initial State
const recipesInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const recipes = (state = recipesInitialState, action) => {
  switch (action.type) {
    case RECIPES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case RECIPES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case RECIPES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single recipe

// Initial State
const recipeInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const recipe = (state = recipeInitialState, action) => {
  switch (action.type) {
    case RECIPES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case RECIPES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case RECIPES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
