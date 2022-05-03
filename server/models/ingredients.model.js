module.exports = mongoose => {
    const addedIngredients = mongoose.model(
      "ingredients",
      mongoose.Schema(
        {
          addedIngredients: Array
        },
        { timestamps: true }
      )
    );
    return addedIngredients;
  };