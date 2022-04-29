module.exports = mongoose => {
    const Favorite = mongoose.model(
      "favorite",
      mongoose.Schema(
        {
          name: String,
          category: String,
          instructions: String,
          ingredients: Array,
          img: String,
          cocktailid : String,
          useremail: String
        },
        { timestamps: true }
      )
    );
    return Favorite;
  };