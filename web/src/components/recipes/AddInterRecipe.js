// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {addRecipe} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class AddRecipe extends Component {


  onChange = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
  }

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('adding intermediate recipe, please wait...')

    // Call API
    // var recipeId = parseInt(9)
    // var intermRecipeId = parseInt(31)
    // var quantity = parseInt(2)
    this.props.addRecipe(this.state)
      .then(response => {
        this.setState({
          recipeId: this.props.match.params.id,
          intermRecipeId: parseInt(0),
          quantity: parseInt(0)
        })

        this.props.messageShow('intermediate recipe added successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error adding intermediate recipe. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      recipeId: parseInt(this.props.match.params.id),
      intermRecipeId: parseInt(0),
      quantity: parseInt(0)
    }
  }

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>

        <p>
          <Link to={routes.recipes.list}>Back</Link>
        </p>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* Recipe */}
          intermRecipeId: <input
            type="number"
            name="intermRecipeId"
            required="required"
            value={this.state.intermRecipeId}
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
AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}



export default connect(null, {addRecipe, messageShow, messageHide})(AddRecipe)
