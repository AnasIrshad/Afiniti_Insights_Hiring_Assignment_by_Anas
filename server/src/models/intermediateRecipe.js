// Recipe
export default (sequelize, DataTypes) => {
  return sequelize.define('intermediateRecipe', {
    quantity: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER
    }
  })
}
