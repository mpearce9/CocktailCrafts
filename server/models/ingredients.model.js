module.exports = mongoose => {
    const Ingredients = mongoose.model(
      "ingredient",
      mongoose.Schema(
        {
          liquor: String,
          mixer: String,
          bitters: String,
          garnish:String
        },
        { timestamps: true }
      )
    );
    return Ingredient;
  };