// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {get, getListIng, getListIntR} from './api/actions'
import Loading from '../common/Loading'
// import ListIntR from './ListIntR'
import ItemIng from './ItemIng'
import ItemIntR from './ItemIntR'

// Component
class View extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id);
    this.props.getListIng(this.props.match.params.id);
    this.props.getListIntR(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Recipe</h1>

        <p>
          <Link to={routes.recipes.list}>Back</Link>
        </p>

        {/* Single recipes */}
        {
          this.props.recipe.isLoading
            ?
            <Loading message="loading recipe details..."/>
            :
            (
              this.props.recipe.item && this.props.recipe.item.id > 0
                ?
                <div>
                  <h3>Name:   {this.props.recipe.item.name}</h3>
                  <h3>Cost:   {this.props.recipe.item.cost}</h3>


                  <h4>ingredients</h4>
                  <div>
                    {/* List ingredients */}
                    {
                      this.props.ingredients.isLoading
                        ?
                        <Loading message="loading ingredients..."/>
                        :
                        (
                          this.props.ingredients.list.length > 0
                            ?
                            <div>
                            <ul><h4>Name -- UnitPrice</h4>
                              {this.props.ingredients.list.map(ingredient => (
                                <li key={ingredient.id}>
                                  <ItemIng pid={this.props.match.params.id} ingredient={ingredient}/>
                                </li>
                              ))}
                            </ul>
                            </div>
                            :
                            <p>No ingredients to show.</p>
                        )
                    }
                  </div>







                  <h4>intermediate recipe</h4>
                  <div>
                    {/* List recipes */}
                    {

                      this.props.recipes.isLoading
                        ?
                        <Loading message="loading intermediate recipes..."/>
                        :
                        (
                          this.props.recipes.list.length > 0
                            ?
                            <div>
                            <ul><h4>Name -- Cost</h4>
                              {this.props.recipes.list.map(recipe => (
                                  <li key={recipe.id}>
                                    <ItemIntR pid={this.props.match.params.id} recipe={recipe} />
                                  </li>
                              ))}
                            </ul>
                            </div>
                            :
                            <p>No intermediate recipes to show.</p>
                        )
                    }
                  </div>

                </div>
                :
                <div>
                  <p>Recipe does not exists.</p>

                </div>
            )
        }
        <p>
          <Link to={routes.recipes.addIngredient(this.props.recipe.item.id)}>
            <button>Add Ingredient</button>
          </Link>
        </p>
        <p>
          <Link to={routes.recipes.addIntermediateRecipe(this.props.recipe.item.id)}>
            <button>Add Intermediate Recipe</button>
          </Link>
        </p>
      </div>
    )
  }
}

// Component Properties
View.propTypes = {
  ingredients: PropTypes.object.isRequired,
  getListIng: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired,
  getListIntR: PropTypes.func.isRequired,
}

// Component State
// function viewState(state) {
//   return {
//     recipe: state.recipe ,
//   }
// }
// Component State
function ingredientsState(state) {
  return {
     ingredients: state.ingredients,
     recipe: state.recipe,
     recipes: state.recipes,
  }
}

export default connect(ingredientsState, {get, getListIng, getListIntR})(View)
