// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// App Imports
import {routes} from '../../setup/routes'
import {removeIngredient, getListIng} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class ItemIng extends Component {

  removeIngredient = (id) => {
    let check = window.confirm('Are you sure you want to remove this Ingredient?')
    if (check) {
      this.props.messageHide()

      this.props.messageShow('removing ingredient, please wait...')

      var recipeId = parseInt(this.props.pid)
      this.props.removeIngredient({recipeId: recipeId, ingredientId: id})
        .then(response => {
          // Refresh recipes list
          window.location=routes.recipes.view(recipeId)

          this.props.messageShow('ingredient removed successfully.')
        })
        .catch(error => {
          this.props.messageShow('Error removing ingredient. Please try again.')
        })
    }
  }

  render() {
    const {id, name, unitPrice} = this.props.ingredient

    return (
      <div>

        {name} -- {unitPrice}

        &nbsp;&nbsp;



        &nbsp;

        <button onClick={this.removeIngredient.bind(this, id)}>Remove</button>
      </div>
    )
  }
}

// Component Properties
ItemIng.propTypes = {
  pid: PropTypes.object.isRequired,
  ingredient: PropTypes.object.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  getListIng: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {removeIngredient, getListIng, messageShow, messageHide})(ItemIng)
