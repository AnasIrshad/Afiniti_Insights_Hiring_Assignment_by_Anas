// App Imports
import {APP_URL_API} from './config'

// APP Routes
export const routes = {
  home: '/',

  about: '/about',

  recipes: {
    list: '/recipes',

    create: '/recipes/create',

    view: (id) => {
      return `/recipes/${ id }`
    },

    addIngredient: (id) => {
      return `/recipeAddIng/${ id }`
    },

    addIntermediateRecipe: (id) => {
      return `/recipeAddIntR/${ id }`
    }

  },

  ingredients: {
    list: '/ingredients',

    create: '/ingredients/create',

    view: (id) => {
      return `/ingredients/${ id }`
    }
  },
}

export const routesApi = APP_URL_API
