const {admin,db}=require('../admin &conf/admin');

exports.searchHomes=(req,res)=>{
  
      const maxValue= req.query.maxPrice;
      const minValue= req.query.minPrice;
      const rruga= req.query.street;
      const nrdhoma= req.query.rooms;
      const nrpersona= req.query.tenants;
      const fq=req.params.page;
  
      minprice = parseInt(minValue, 10);
      maxprice = parseInt(maxValue, 10);
      dhoma = parseInt(nrdhoma, 10);
     persona = parseInt(nrpersona, 10);
     faqja= parseInt(fq, 10);
  
    try{
      if(rruga==''&&dhoma==0&&persona==0){
  
         var homes=[];
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        
           myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
    }
  
  
      else if(rruga==''&&dhoma==0){
        var homes=[];
  
       var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('tenants','==',persona);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
      }
  
      else if(rruga==''&&persona==0){
        var homes=[];
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('rooms','==',dhoma);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
      }
  
  //rasti kur useri ve personat (roommates) dhe dhomat 0
  else if(persona==0&&dhoma==0){
  
    var homes=[];
    var myquery=db.collection("homes").where('price','<=',maxprice);
    myquery=myquery.where('price','>=',minprice);
    myquery=myquery.where('adress.street','==',`${rruga}`);
  
    myquery.get().then((doc)=>{
       if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
        
       doc.forEach((docs)=>{
          homes.push(docs.data());
        });
  
        if(faqja==1){
          if(homes.length<=16){
         return res.json(homes.slice(0,homes.length));
        } 
        else return res.json(homes.slice(0,16));
        }
        else{
          if(faqja*16<=homes.length){
           return res.json(homes.slice((faqja*16)-16,faqja*16));
          }else{
           return res.json(homes.slice((faqja*16)-16,homes.length));
          }
        }
  
      }).catch((err)=>{
        return res.status(500).json({error: `${err}`});
      });
      }
  
      else if(rruga==''){
  
        var homes=[];
      var myquery=db.collection("homes").where('price','<=',maxprice);
      myquery=myquery.where('price','>=',minprice);
      myquery=myquery.where('tenants','==',persona);
      myquery=myquery.where('rooms','==',dhoma);
  
      myquery.get().then((doc)=>{
         if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
          
         doc.forEach((docs)=>{
            homes.push(docs.data());
          });
  
          if(faqja==1){
            if(homes.length<=16){
           return res.json(homes.slice(0,homes.length));
          } 
          else return res.json(homes.slice(0,16));
          }
          else{
            if(faqja*16<=homes.length){
             return res.json(homes.slice((faqja*16)-16,faqja*16));
            }else{
             return res.json(homes.slice((faqja*16)-16,homes.length));
            }
          }
  
        }).catch((err)=>{
          return res.status(500).json({error: `${err}`});
        });
      }
  
  
      //rasti kur useri ve dhomat 0
     else if(dhoma==0){
  
      var homes=[];
      var myquery=db.collection("homes").where('price','<=',maxprice);
      myquery=myquery.where('price','>=',minprice);
      myquery=myquery.where('tenants','==',persona);
      myquery=myquery.where('adress.street','==',`${rruga}`);
  
      myquery.get().then((doc)=>{
         if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
          
         doc.forEach((docs)=>{
            homes.push(docs.data());
          });
  
          if(faqja==1){
            if(homes.length<=16){
           return res.json(homes.slice(0,homes.length));
          } 
          else return res.json(homes.slice(0,16));
          }
          else{
            if(faqja*16<=homes.length){
             return res.json(homes.slice((faqja*16)-16,faqja*16));
            }else{
             return res.json(homes.slice((faqja*16)-16,homes.length));
            }
          }
  
        }).catch((err)=>{
          return res.status(500).json({error: `${err}`});
        });
      }
  
      //rasti kur useri ve personat (roommates) 0
     else if(persona==0){
  
      var myquery=db.collection("homes").where('price','<=',maxprice);
      myquery=myquery.where('price','>=',minprice);
      myquery=myquery.where('rooms','==',dhoma);
      myquery=myquery.where('adress.street','==',`${rruga}`);
  
      myquery.get().then((doc)=>{
         if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
          
         doc.forEach((docs)=>{
            homes.push(docs.data());
          });
  
          if(faqja==1){
            if(homes.length<=16){
           return res.json(homes.slice(0,homes.length));
          } 
          else return res.json(homes.slice(0,16));
          }
          else{
            if(faqja*16<=homes.length){
             return res.json(homes.slice((faqja*16)-16,faqja*16));
            }else{
             return res.json(homes.slice((faqja*16)-16,homes.length));
            }
          }
  
        }).catch((err)=>{
          return res.status(500).json({error: `${err}`});
        });
        }
  
      //kur useri ve dhoma dhe persona(roommates) me shum se 4 
       else if(dhoma==4 && persona==4){
  
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('rooms','>=',3);
        myquery=myquery.where('tenants','>=',3);
        myquery=myquery.where('adress.street','==',`${rruga}`);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
      }
  
        //kur useri ve dhomat me shum se 4
       else if(dhoma==4){
  
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('rooms','>=',3);
        myquery=myquery.where('tenants','==',persona);
        myquery=myquery.where('adress.street','==',`${rruga}`);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
        }
  
       else if(persona==4){
  
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('rooms','==',dhoma);
        myquery=myquery.where('tenants','>=',3);
        myquery=myquery.where('adress.street','==',`${rruga}`);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
               return res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
               return res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
        }
  
      else{
       
        var myquery=db.collection("homes").where('price','<=',maxprice);
        myquery=myquery.where('price','>=',minprice);
        myquery=myquery.where('rooms','==',dhoma);
        myquery=myquery.where('tenants','==',persona);
        myquery=myquery.where('adress.street','==',`${rruga}`);
  
        myquery.get().then((doc)=>{
           if(doc.docs.length==0) return res.status(400).json({error: 'No homes found.'});
            
           doc.forEach((docs)=>{
              homes.push(docs.data());
            });
  
            if(faqja==1){
              if(homes.length<=16){
             return res.json(homes.slice(0,homes.length));
            } 
            else return res.json(homes.slice(0,16));
            }
            else{
              if(faqja*16<=homes.length){
                res.json(homes.slice((faqja*16)-16,faqja*16));
              }else{
                res.json(homes.slice((faqja*16)-16,homes.length));
              }
            }
  
          }).catch((err)=>{
            return res.status(500).json({error: `${err}`});
          });
      }
    } 
    catch(err){
     return res.status(500).json({error: `An error occurred. ${err}`});
    }
  
  }