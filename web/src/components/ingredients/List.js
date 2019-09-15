// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {getList} from './api/actions'
import Loading from '../common/Loading'
import Item from './Item'

// Component
class List extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <div>
        <h1>Ingredients</h1>

        <p>
          <Link to={routes.ingredients.create}>Create</Link>
        </p>

        {/* List ingredients */}
        {
          this.props.ingredients.isLoading
            ?
            <Loading message="loading ingredients..."/>
            :
            (
              this.props.ingredients.list.length > 0
                ?
                <ul><h4>Name -- UnitPrice</h4>
                  {this.props.ingredients.list.map(ingredient => (
                    <li key={ingredient.id}>
                      <Item ingredient={ingredient}/>
                    </li>
                  ))}
                </ul>
                :
                <p>No ingredients to show.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  ingredients: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function ingredientsState(state) {
  return {
    ingredients: state.ingredients
  }
}

export default connect(ingredientsState, {getList})(List)
