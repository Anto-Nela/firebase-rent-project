const {admin, db}=require('../admin &conf/admin');
const {validateLoginData}= require('../validate/check');

const firebase= require('firebase');

exports.login=(req, res)=>{
    const user={
        email: req.body.email,
        password: req.body.password
    };
    var userId;

    const {valid, errors}=validateLoginData(user);
    if(!valid) return res.status(406).json(errors);
    
    else {
    firebase.auth().signInWithEmailAndPassword(user.email,user.password).then((data)=>{
        //username=data.user.username;
        userId=data.user.uid;
        return data.user.getIdToken();
    }).then((tokeni)=>{
        return res.json({token: tokeni, userId: userId });
    })
    .catch((err)=>{
        console.error(err);
        if(err.code==='auth/wrong-password'){
        return res.status(406).json({error: 'Incorrect password'});
    }
    else return res.status(500).json({error: err.code});
});

    }
}