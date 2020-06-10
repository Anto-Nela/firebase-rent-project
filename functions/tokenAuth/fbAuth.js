const {admin,db}=require('../admin &conf/admin');


exports.fbAuth=(req,res,next)=>{
    let token1;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        token1= req.headers.authorization.split('Bearer ')[1];
    } else{
        console.error('No token found.');
        return res.status(403).json({error:'Unauthorized. No token found.'});
    }

    admin.auth().verifyIdToken(token1).then((decodedToken)=>{
        req.user= decodedToken;
        console.log(decodedToken);
        return next();
        
    }).catch((err)=>{
        console.error('Error when verifying token.',err);
        return res.status(403).json({error: `Token not valid. ${err}`});
    })

}