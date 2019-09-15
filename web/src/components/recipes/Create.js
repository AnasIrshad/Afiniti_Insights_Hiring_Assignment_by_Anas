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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('Creating recipe, please wait...')

    // Call API
    this.props.create(this.state)
      .then(response => {
        this.setState({
          name: ''
        })

        this.props.messageShow('Recipe created successfully.')
      })
      .catch(error => {
        this.props.messageShow('Error creating recipe. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Recipe Create</h1>

        <p>
          <Link to={routes.recipes.list}>Back</Link>
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
