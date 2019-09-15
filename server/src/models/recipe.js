// Recipe
export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipes', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    cost: {
      type: DataTypes.INTEGER
    },
    isIntermediate: {
      type: DataTypes.BOOLEAN
    }
  });

  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Ingredient, {
      through: models.RecipeIngredient,
      foreignkey: {
        name: 'recipeId',
        field: 'recipe_id'
      }
    });
    Recipe.belongsToMany(models.Recipe, {
      as: 'intermRecipe',
      through: models.IntermediateRecipe
    });
  };

  return Recipe;
}
