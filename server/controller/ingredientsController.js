const db = require("../models");
const User = db.users;
const Favorite = db.favorite;
const Ingredient = db.ingredients;

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

exports.getlogininfo = (req,res,next)=>{
    return res.json(req.session);
};

exports.logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err) 
           return next(err);
    });
    return res.send('success');
};

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

exports.unfavorite = (req,res,next)=>{
    let useremail = req.body.useremail;
    let cocktailid = req.body.cocktailid;
    Favorite.deleteOne({useremail: useremail, cocktailid: cocktailid})
    .then(unfavorite => {
        return res.send('success');
    })
    .catch(err => console.log(err));
}

exports.listfavorites = (req, res, next) =>{
    Favorite.find({useremail: req.session.email})
    .then(response => {
        res.json(response);
    })
    .catch(err => console.log(err));
}

exports.isfavorite = (req, res, next) =>{
    Favorite.find({useremail: req.session.email, cocktailid: req.params.id})
    .then(response => {
        console.log(response);
        res.json(response);
    })
    .catch(err => console.log(err));
}

exports.addLiquor = (req,res,next)=>{
    let info = new Ingredient({
        name: req.body.name,
        useremail: req.body.useremail,
        liquor: req.body.liquor
    });
    console.log(info);
    info.save()//insert the document to the database
    .then(info=> {
        console.log('added');
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

exports.addMixer = (req,res,next)=>{
    let info = new Ingredient({
        name: req.body.name,
        useremail: req.body.useremail,
        mixer: req.body.mixer
    });
    console.log(info);
    info.save()//insert the document to the database
    .then(info=> {
        console.log('added');
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

exports.addGarnish = (req,res,next)=>{
    let info = new Ingredient({
        name: req.body.name,
        useremail: req.body.useremail,
        garnish: req.body.garnish
    });
    console.log(info);
    info.save()//insert the document to the database
    .then(info=> {
        console.log('added');
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

exports.addBitters = (req,res,next)=>{
    let info = new Ingredient({
        name: req.body.name,
        useremail: req.body.useremail,
        bitters: req.body.bitters
    });
    console.log(info);
    info.save()//insert the document to the database
    .then(info=> {
        console.log('added');
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


