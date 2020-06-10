const {admin,db}=require('../admin &conf/admin');

exports.addHome = (req, res) => {
    const id=req.params.id;

    let home1={
        adress: req.body.adress,
        area: req.body.area,
        rooms: req.body.rooms,
        type: req.body.type,
        floor: req.body.floor,
        price: req.body.price,
        water: req.body.water,
        electricity: req.body.electricity,
        enternet: req.body.enternet,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
        tenants: req.body.tenants,
        parking: req.body.parking,
        elevator: req.body.elevator,
        air_conditioner: req.body.air_conditioner,
        animals: req.body.animals,
        balcony: req.body.balcony,
        garden: req.body.garden,
        kitchenware: req.body.kitchenware,
        tv: req.body.tv,
        furnished: req.body.furnished,
        wifi: req.body.wifi,
        location: req.body.location,
        premium: req.body.premium,
        description: req.body.description,
        landlord: id
    }

db.collection('homes').add(home1).then((hdata)=>{
    let homeinf={
        adress: req.body.adress,
        area: req.body.area,
        rooms: req.body.rooms,
        type: req.body.type,
        floor: req.body.floor,
        price: req.body.price,
        water: req.body.water,
        electricity: req.body.electricity,
        enternet: req.body.enternet,
        bathrooms: req.body.bathrooms,
        bedrooms: req.body.bedrooms,
        tenants: req.body.tenants,
        parking: req.body.parking,
        elevator: req.body.elevator,
        air_conditioner: req.body.air_conditioner,
        animals: req.body.animals,
        balcony: req.body.balcony,
        garden: req.body.garden,
        kitchenware: req.body.kitchenware,
        tv: req.body.tv,
        furnished: req.body.furnished,
        wifi: req.body.wifi,
        location: req.body.location,
        premium: req.body.premium,
        description: req.body.description,
        landlord: id,
        homeId: hdata.id
    }
    db.doc(`/homes/${hdata.id}`).set(homeinf).then(()=>{
        return res.json(`Home with document id: ${hdata.id} added successfully.`);
  });
        }).catch((err) => {
            console.error(err);
              res.status(500).json({ error: 'Something went wrong...' });  
         });

};