// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {addIngredient} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class AddIngredient extends Component {


  onChange = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
  }

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('adding ingredient, please wait...')

    // Call API
    // var recipeId = parseInt(9)
    // var ingredientId = parseInt(31)
    // var quantity = parseInt(2)
    this.props.addIngredient(this.state)
      .then(response => {
        this.setState({
          recipeId: this.props.match.params.id,
          ingredientId: parseInt(0),
          quantity: parseInt(0)
        })

        this.props.messageShow('ingredient added successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error adding ingredient. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      recipeId: parseInt(this.props.match.params.id),
      ingredientId: parseInt(0),
      quantity: parseInt(0)
    }
  }

  render() {
    return (
      <div>
        <h1>Add Ingredient</h1>

        <p>
          <Link to={routes.recipes.list}>Back</Link>
        </p>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* Ingredient */}
          ingredientId: <input
            type="number"
            name="ingredientId"
            required="required"
            value={this.state.ingredientId}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Quantity */}
          quantity: <input
            type="number"
            name="quantity"
            required="required"
            value={this.state.quantity}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Submit */}
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

// Component Properties
AddIngredient.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}



export default connect(null, {addIngredient, messageShow, messageHide})(AddIngredient)
