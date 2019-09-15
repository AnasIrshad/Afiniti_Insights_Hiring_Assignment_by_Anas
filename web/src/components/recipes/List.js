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
        <h1>Recipes</h1>

        <p>
          <Link to={routes.recipes.create}>Create</Link>
        </p>

        {/* List recipes */}
        {
          this.props.recipes.isLoading
            ?
            <Loading message="loading recipes..."/>
            :
            (
              this.props.recipes.list.length > 0
                ?
                <div>
                <ul><h4>Name -- Cost</h4>
                  {this.props.recipes.list.map(recipe => (
                    recipe.isIntermediate
                    ?
                    <div></div>
                    :
                    (
                      <li key={recipe.id}>
                        <Item recipe={recipe}/>
                      </li>
                    )
                  ))}
                </ul>
                <h5>intermediate recipe can be used as ingredient</h5>

                <ul><h4>Name -- Cost</h4>
                  {this.props.recipes.list.map(recipe => (
                    recipe.isIntermediate
                    ?
                    (
                      <li key={recipe.id}>
                        <Item recipe={recipe}/>
                      </li>
                    )
                    :
                    <div></div>
                  ))}
                </ul>
                </div>
                :
                <p>No recipes to show.</p>
            )
        }
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  recipes: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
}

// Component State
function recipesState(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(recipesState, {getList})(List)
