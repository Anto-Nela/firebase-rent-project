const {admin, db}= require('../admin &conf/admin');
const firebaseConfig= require('../admin &conf/config');
const {validateSignupData}= require('../validate/check');

const firebase= require('firebase');
//firebase.initializeApp(firebaseConfig);


exports.register=(req, res)=>{
    const user1={
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpass: req.body.confirmpass,
        type: req.body.type
    };
    
    const {valid, errors}=validateSignupData(user1);
    if(!valid) return res.status(406).json(errors);
    
    else {
        
        let token1;
        let userId;

    db.doc(`/users/${user1.username}`).get().then((doc)=>{
        if(doc.exists){
            return res.status(226).json({error:'Username already exists.'});
        } else{
            return firebase.auth().createUserWithEmailAndPassword(user1.email, user1.password);
        }
    }).then((data)=>{
        userId=data.user.uid;
       return data.user.getIdToken();
    
    }).then((tokeni)=>{
        token1=tokeni;
        const userInfo={
            username: user1.username,
            email: user1.email,
            type: user1.type,
            userId: userId
        };
       return db.doc(`/users/${user1.username}`).set(userInfo);
    }).then(()=>{
        return res.json({token: token1, username: user1.username, userId: userId});
    })
    .catch((err)=>{
        console.error(err);
        if(err.code==='auth/email-already-in-use'){
            return res.status(226).json({error: 'Email already exists.'});
        }
        else return res.status(500).json({error: err.code });
    });

    }
    
    }