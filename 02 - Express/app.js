//APP.JS SERT A PARAMETRER LE SERVEUR 

//   1-CREATION DES DEPENCES DE MODULES
//   MODULE DE JS.NODE
//   CONST HTTPS = REQUIRE('https);

const fs = require('fs');
const express = require('express');
//app est le serveur creer 
const app = express();
//routeur pour declarer des routes ex: GET / POST / PUT
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlApostrophe = require('mysql-apostrophe');


//IMPORT DES MODULES CREES
var database = require('./routes/database');


//
app.use(cors())

//2-MISE EN PLACE DU BODY PARSEUR QUI PERMET DE LIRE LES JSON ET URL
//BODYPARSEUR SERT A EXPLOITER LES DONNEES



app.use(bodyParser.json());//LIRE LES BODY ENCODES EN JSON
app.use(bodyParser.urlencoded({
    extended:true   //LIRE LES BODY ENCODES EN URL
}));


//3- mise en place de mysql apostrophe
app.use(mysqlApostrophe); //permet d'inserer des champs contenant des apostrophes

//4-Recuperation des fichiers Routes dans le dossier route
//ACCE A UN FICHIER


const ajouter = require("./routes/create")
const lire = require("./routes/read")
const supprimer = require("./routes/delete")
const modifier = require("./routes/update")


//5-UTILISATION DES ROUTES
//LIRE LE FICHIER GRACE AU ENDPOINT "/routes" --> "http://localhost:3000/routes/newmovies"

app.use("/create", ajouter)
app.use("/read",lire)
app.use("/delete",supprimer)
app.use("/update",modifier)



//3- Choix du port utiliser par le serveur
const port = process.env.port || 3000; //RECUPERER UN PORT LIBRE SINON 3000
app.listen(port, function () {
    console.log("Ok sa marche");
    console.log("Le serveur utilise le port : " + port);
});



