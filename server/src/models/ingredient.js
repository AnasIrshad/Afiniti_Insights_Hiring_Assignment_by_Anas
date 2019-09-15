// Ingredient
export default (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    unitPrice: {
      type: DataTypes.INTEGER
    }
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsToMany(models.Recipe, {
      through: models.RecipeIngredient,
      foreignkey: {
        name: 'ingredientId',
        field: 'ingredient_id'
      }
    });
  };


  return Ingredient;
}
