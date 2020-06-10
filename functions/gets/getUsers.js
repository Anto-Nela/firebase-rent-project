const {admin,db}=require('../admin &conf/admin');

//Get all users
exports.getAllUsers=(req, res)=>{
    db.collection('users').get().then((data)=>{
         var users=[];
         data.forEach((doc)=>{
             users.push(doc.data());
         });
         return res.json(users);
     }).catch((err)=>{
        return res.status(500).json(`${err}`);
     });
 
 };

 //Get users by user id
exports.getUsersById=(req,res)=>{
    id=req.params.id;

    db.collection("users").where('userId','==',id).get()
    .then((data)=>{
        var users=[];
        data.forEach((doc)=>{
            users.push(doc.data());
        });
        if(users.length==0) return res.status(400).json('No user with that id found.');
        else return res.json(users);

    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });
};