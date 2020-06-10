const functions = require('firebase-functions');
const express= require('express');
const app=express();
const firebaseConfig=require('./admin &conf/config');

const {getAllHomes,getNormalHomes,getByLandlordId,
    getPremiumHomes,findNearMe, getHomesById}= require('./gets/gethomes');
const {searchHomes}= require('./gets/searchHomes');
const {register}=require('./sign_up-in/register');
const {login}= require('./sign_up-in/login');
//const {postAllHomes}= require('./add/add50Homes');
const {addHome}= require('./add/addHome');
const {fbAuth}= require('./tokenAuth/fbAuth');
const {getAllUsers, getUsersById}= require('./gets/getUsers');

const firebase= require('firebase');
firebase.initializeApp(firebaseConfig);

//get homes
app.get('/homes', getAllHomes);
app.get('/searchHomes/:page', searchHomes);
app.get('/homes/premiumHomes',getPremiumHomes);
app.get('/homes/normalHomes', getNormalHomes);
app.get('/nearme/:lat/:long', findNearMe);
app.get('/homes/:id', getHomesById);
app.get('/homes/landlordId/:id',getByLandlordId);

//get users
app.get('/users',getAllUsers);
app.get('/users/:id',fbAuth, getUsersById);

//signup
app.post('/register', register);

//login
app.post('/login',login);

/*shton 50 shtepi direkt, MOS E PERDOR 
app.post('/add50homes', postAllHomes);
Shton id e shpive MOS E PERDOR
app.get('/setIds', setHomesId);
*/


//shto 1 shtepi
app.post('/add/home/:id',fbAuth, addHome);

 exports.api = functions.region('europe-west2').https.onRequest(app);