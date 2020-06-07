const functions = require('firebase-functions');
const express= require('express');
const app=express();

const {getAllHomes}= require('./gets/gethomes');
const {register}=require('./sign_up-in/register');
const {login}= require('./sign_up-in/login');

//get all homes
app.get('/homes', getAllHomes);

//signup
app.post('/register', register);

//login
app.post('/login',login);

 exports.api = functions.region('europe-west2').https.onRequest(app);