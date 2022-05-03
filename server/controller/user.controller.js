const db = require("../models");
const User = db.users;
const Favorite = db.favorite;

// signup function using request data
exports.signup = (req, res, next)=>{
    console.log('body of request:' + JSON.stringify(req.body));
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });//create a new document
    console.log(user);
    user.save()//insert the document to the database
    .then(user=> {
        return res.send("success");
    }
        )
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            return res.send("fail");
        }

        if(err.code === 11000) {
            return res.send("fail");
        }
        
        next(err);
    }); 
};

// login function to check against the data in the database
exports.login = (req, res, next)=>{
    let email = req.body.email;
    let password = req.body.password;
    console.log('login with: ' + email + ', ' + password);
    User.findOne({ email: email })
    .then(user => {
        if (!user) {
            console.log('wrong email address');
        } else {
            console.log('comparing password, ' + user);
            if(password === user.password){
                console.log('success!, logged in')
                req.session.email = user.email;
                req.session.name = user.name;
                return res.send('success');
            }
            else{
                return res.send("fail");
            }    
        }     
    })
    .catch(err => console.log(err));
};

//returns the login info for a logged in user
exports.getlogininfo = (req,res,next)=>{
    return res.json(req.session);
};

// destroys the user's session, logouts the user
exports.logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err) 
           return next(err);
    });
    return res.send('success');
};

// favorite functions that saves a favorite model into the database
exports.favorite = (req,res,next)=>{
    let info = new Favorite({
        name: req.body.name,
        category: req.body.category,
        instructions: req.body.instructions,
        ingredients: req.body.ingredients,
        img: req.body.img,
        cocktailid: req.body.cocktailid,
        useremail: req.body.useremail
    });
    console.log(info);
    info.save()//insert the document to the database
    .then(info=> {
        console.log('favorited');
        return res.send("success");
    }
        )
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            console.log(err);
            return res.send("fail");
        }

        if(err.code === 11000) {
            console.log(err);
            return res.send("fail");
        }
        
        console.log(err);
    }); 

}

// unfavorites the drink, removes it from the database
exports.unfavorite = (req,res,next)=>{
    let useremail = req.body.useremail;
    let cocktailid = req.body.cocktailid;
    Favorite.deleteOne({useremail: useremail, cocktailid: cocktailid})
    .then(unfavorite => {
        return res.send('success');
    })
    .catch(err => console.log(err));
}

// returns the list of favorites for a  user from the database
exports.listfavorites = (req, res, next) =>{
    Favorite.find({useremail: req.session.email})
    .then(response => {
        res.json(response);
    })
    .catch(err => console.log(err));
}

// returns if the user has favorited a certain drink
exports.isfavorite = (req, res, next) =>{
    Favorite.find({useremail: req.session.email, cocktailid: req.params.id})
    .then(response => {
        console.log(response);
        res.json(response);
    })
    .catch(err => console.log(err));
}
