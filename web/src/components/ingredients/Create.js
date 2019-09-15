// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {create} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Create extends Component {

  onChange = (event) => {
    if ([event.target.name] == "unitPrice") {
      this.setState({
        [event.target.name]: parseInt(event.target.value)
      })
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('Creating ingredient, please wait...')

    // Call API
    this.props.create(this.state)
      .then(response => {
        this.setState({
          name: '',
          unitPrice: 0
        })

        this.props.messageShow('Ingredient created successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error creating ingredient. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      unitPrice: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Ingredient Create</h1>

        <p>
          <Link to={routes.ingredients.list}>Back</Link>
        </p>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* Name */}
          name: <input
            type="text"
            name="name"
            placeholder="name"
            required="required"
            value={this.state.name}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* UnitPrice */}
          unitPrice: <input
            type="number"
            name="unitPrice"
            required="required"
            value={this.state.unitPrice}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Submit */}
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

// Component Properties
Create.propTypes = {
  create: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {create, messageShow, messageHide})(Create)
