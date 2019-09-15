// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {get} from './api/actions'
import Loading from '../common/Loading'

// Component
class View extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1>Ingredient</h1>

        <p>
          <Link to={routes.ingredients.list}>Back</Link>
        </p>

        {/* Single ingredients */}
        {
          this.props.ingredient.isLoading
            ?
            <Loading message="loading ingredient details..."/>
            :
            (
              this.props.ingredient.item && this.props.ingredient.item.id > 0
                ?
                <div>
                  <h3>Name:   {this.props.ingredient.item.name}</h3>
                  <h3>UnitPrice:   {this.props.ingredient.item.unitPrice}</h3>
                </div>
                :
                <p>Ingredient does not exists.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
View.propTypes = {
  ingredient: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
}

// Component State
function viewState(state) {
  return {
    ingredient: state.ingredient
  }
}

export default connect(viewState, {get})(View)
