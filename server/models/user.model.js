// this model is for the users for the database, the model stores a user's name, email, and password in the database

module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          email: String,
          password: String
        },
        { timestamps: true }
      )
    );
    return User;
  };