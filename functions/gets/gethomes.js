const {admin,db}=require('../admin &conf/admin');

//Get all homes
exports.getAllHomes=(req, res)=>{
   db.collection('homes').get().then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        return res.json(homes);
    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });

};

//Get homes by homeid
exports.getHomesById=(req,res)=>{
    id=req.params.id;

    db.collection("homes").where('homeId','==',id).get()
    .then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        if(homes.length==0) return res.status(400).json('No home with that id found.');
        else return res.json(homes);

    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });
};


//Get homes by landlord id
exports.getByLandlordId=(req,res)=>{
    id=req.params.id;

    db.collection("homes").where('landlord','==',id).get()
    .then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        if(homes.length==0) return res.status(400).json('No home with that id found.');
        else return res.json(homes);

    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });
};



//Get all normal homes
exports.getNormalHomes= (req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600');

    db.collection("homes").where('premium','==',false).get()
    .then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        if(homes.length<=8){
            return res.json(homes.slice(0,homes.length));
        }
        else return res.json(homes.slice(0,8));

    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });
};


//get all premium homes
exports.getPremiumHomes= (req,res)=>{
    res.set('Cache-Control','public, max-age=300, s-maxage=600');
    
    db.collection("homes").where('premium','==',true).get()
    .then((data)=>{
        var homes=[];
        data.forEach((doc)=>{
            homes.push(doc.data());
        });
        if(homes.length<=9){
            return res.json(homes.slice(0,homes.length));
        }
        else return res.json(homes.slice(0,9));

    }).catch((err)=>{
       return res.status(500).json(`${err}`);
    });
};

function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
     ( Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2));
    var c =( 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    var d = R * c; // Distance in km
    return d;
  }

  //find homes that are near a home
  exports.findNearMe=(req, res)=>{
    var lat = req.params.lat;
    var long = req.params.long;

    var nearMeHomes = [];
    lat = parseFloat(lat);
    long = parseFloat(long);

        db.collection('homes').get().then((data)=>{
            data.forEach((doc)=>{
                if(doc.data().lat!=undefined){
                    elem= getDistanceFromLatLonInKm(lat, long,
                    doc.data().location.lat, doc.data().location.long);

                    if (elem<=2) {
                         nearMeHomes.push(doc.data());
                        } 
                }
                
            });
            if(nearMeHomes.length==0) {
                return res.status(400).json({error: 'No homes nearby found.'});
                }
                else return res.json(nearMeHomes); 

        }).catch((err)=>{
            return res.status(502).json({error: `An error occurred. ${err}`});
        });

  };
  
  
  /*
exports.setHomesId=(req, res)=>{
    db.collection('homes').get().then((data)=>{
         var homes=[];
         
         data.forEach((doc)=>{
             homes.push(doc.data());
             var homeinf={
             adress: doc.data().adress,
             air_conditioner: doc.data().air_conditioner,    
             animals: doc.data().animals,
             area: doc.data().area,
             balcony: doc.data().balcony,
             bathrooms: doc.data().bathrooms,
             bedrooms: doc.data().bedrooms,
             condition: doc.data().condition,
             description: doc.data().description,
             electricity: doc.data().electricity,
             elevator: doc.data().elevator,
             enternet: doc.data().enternet,
             floor: doc.data().floor,
             furnished: doc.data().furnished,
             garden: doc.data().garden,
             img: doc.data().img,
             kitchenware: doc.data().kitchenware,
             landlord: doc.data().landlord,
             location: doc.data().location,
             parking: doc.data().parking,
             premium: doc.data().premium,
             price: doc.data().price,
             rooms: doc.data().rooms,
             tenants: doc.data().tenants,
             totalFloors: doc.data().totalFloors,
             tv: doc.data().tv,
             type: doc.data().type,
             water: doc.data().water,
             wifi: doc.data().wifi,
             homeId: doc.id
         }
             db.doc(`/homes/${doc.id}`).set(homeinf).then(()=>{
                   return res.json('Id-s added successfully i hope...');
             });
         });
       
     }).catch((err)=>{
        return res.status(500).json(`${err}`);
     });
 
 };
 */