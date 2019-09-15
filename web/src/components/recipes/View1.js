// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {get} from './api/actions'
import Loading from '../common/Loading'
import ListIntR from './ListIntR'

// Component
class View extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id)
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
                  {routes.recipes.listIng(this.props.recipe.item.id)}
                  <p>
                    <Link to={routes.recipes.listIng(this.props.recipe.item.id)}>list Ing</Link>
                  </p>


                  <h4>intermediate recipe</h4>
                  <h4>{this.props.recipe.item.id}</h4>
                  {routes.recipes.listIntR(this.props.recipe.item.id)}
                  <p>
                    <Link to={routes.recipes.listIntR(this.props.recipe.item.id)}>list Int R</Link>
                  </p>


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
  recipe: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
  return {
    recipe: state.recipe
  }
}

export default connect(viewState, {get})(View)
