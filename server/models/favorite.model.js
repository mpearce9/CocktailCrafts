// the favorite models contains data to be put in the database, 
//it contains the drink name, category, instructions, ingreedients, img, id, and useremail related to the favorite

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