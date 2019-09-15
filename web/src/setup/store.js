// Imports
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../components/common/api/state'
import * as recipes from '../components/recipes/api/state'
import * as ingredients from '../components/ingredients/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...recipes,
  ...ingredients
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
