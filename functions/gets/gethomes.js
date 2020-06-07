const {admin,db}=require('../admin &conf/admin');
const firebaseConfig=require('../admin &conf/config');


exports.getAllHomes=(req, res)=>{
   db.collection('homes').get().then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        return res.json(homes);
    }).catch((err)=>{
        res.status(500).json(`${err}`);
    });

}
