const db = require("../models");
const User = db.users;

exports.signup = (req, res, next)=>{
    console.log('body of request:' + JSON.stringify(req.body));
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });//create a new document
    console.log(user);
    user.save()//insert the document to the database
    .then(user=> res.redirect('/'))
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            return res.redirect('/');
        }

        if(err.code === 11000) {
            return res.redirect('/');
        }
        
        next(err);
    }); 
};

exports.login = (req, res, next)=>{
        let email = req.body.email;
        let password = req.body.password;
        User.findOne({ email: email })
        .then(user => {
            if (!user) {
                console.log('wrong email address');
                res.redirect('/login');
                } else {
                user.comparePassword(password)
                .then(result=>{
                    if(result) {
                        req.session.user = user._id;
                        req.session.name = user.firstName;
                        res.redirect('/');
                } else {    
                    res.redirect('/login');
                }
                });     
            }     
        })
        .catch(err => next(err));
};

exports.logout = (req, res, next)=>{
   
 };