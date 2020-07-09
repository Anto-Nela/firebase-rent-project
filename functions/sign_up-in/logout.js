const firebase= require('firebase');

exports.logout=(req,res)=>{
    firebase.auth().signOut().then(() =>{
        res.json('User successfully logged out');
       })
       .catch((err)=>{
         res.status(500).json({error: `AN error occurred. ${err}`});
       });
    };
