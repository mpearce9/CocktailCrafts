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
};