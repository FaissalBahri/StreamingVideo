//1-Creation des depences de module
//Module de Js.node

const mysql = require("mysql"); //Appel du module MYSQL qui permet d'agir sur une base de donnees
const express = require("express"); //Appel du module permettant de faire la route

//Import DES MODULES CREES
let db = require("./dataBase"); //RECUPERE LES MODULES DE LA BASE DE DONNEE
//let connction = mysql.createConnection(db);
//VARIABLE QUI RECOIT LA CONNECTION A LA BASE DE DONNEE

//2-CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS Server.js
const app = express.Router();

//TABLE JOUEUR

app.put("/modifMedia/:id", function (req, res) {
  let modifMedia = `
            UPDATE MEDIA 
            SET  
                nom_media = "${req.body.nom_media}",
                description_media = "${req.body.description_media}",
                image_media = "${req.body.image_media}",
                date_media = "${req.body.date_media}",
                type_media = "${req.body.type_media}"
            WHERE 
            id_media="${req.params.id}"`;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(modifMedia, (errTwo, rowsTwo, fieldsTwo) => {
    if (errTwo) {
      console.log(errTwo.message);
      res.send(errTwo.message);
    } else {
      console.log(`Le Media "${req.body.nom_media}" a bien été modifier`);
      res.send(`Le Media "${req.body.nom_media}" a bien été modifier`);
    }
  });
});

//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
