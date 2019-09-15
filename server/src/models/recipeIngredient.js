// Recipe
export default (sequelize, DataTypes) => {
  return sequelize.define('recipeIngredient', {
    quantity: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER
    }
  })
}
