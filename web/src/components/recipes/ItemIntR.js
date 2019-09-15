// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// App Imports
import {routes} from '../../setup/routes'
import {removeRecipe, getListIntR} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Item extends Component {

  removeRecipe = (id) => {
    let check = window.confirm('Are you sure you want to remove this intermediate recipe?')
    if (check) {
      this.props.messageHide()

      this.props.messageShow('Removing intermediate recipe, please wait...')
      var recipeId = parseInt(this.props.pid)
      this.props.removeRecipe({recipeId: recipeId, intermRecipeId: id})
        .then(response => {
          // Refresh recipes list
          // this.props.getListIntR(recipeId)
          window.location=routes.recipes.view(recipeId)

          this.props.messageShow('intermediate Recipe removed successfully.')
        })
        .catch(error => {
          this.props.messageShow('Error removing intermediate recipe. Please try again.')
        })
    }
  }

  render() {
    const {id, name, cost} = this.props.recipe

    return (
      <div>

        {name} -- {cost}

        &nbsp;&nbsp;



        &nbsp;

        <button onClick={this.removeRecipe.bind(this, id)}>Remove</button>

      </div>
    )
  }
}

// Component Properties
Item.propTypes = {
  pid: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  getListIntR: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {removeRecipe, getListIntR, messageShow, messageHide})(Item)
