const {admin, db}=require('../admin &conf/admin');
const firebaseConfig=require('../admin &conf/config');
const {validateLoginData}= require('../validate/check');

const firebase= require('firebase');
firebase.initializeApp(firebaseConfig);


exports.login=(req, res)=>{
    const user={
        email: req.body.email,
        password: req.body.password
    };
    const {valid, errors}=validateLoginData(user);
    if(!valid) return res.status(406).json(errors);
    
    else {
    firebase.auth().signInWithEmailAndPassword(user.email,user.password).then((data)=>{
        return data.user.getIdToken();
    }).then((tokeni)=>{
        return res.json({token: tokeni, username: user.username, userId: user.userId });
    })
    .catch((err)=>{
        console.error(err);
        if(err.code==='auth/wrong-password'){
        return res.status(406).json({error: 'Incorrect password'});
    }
    else return res.status(500).json({error: error.code});
});

    }

}