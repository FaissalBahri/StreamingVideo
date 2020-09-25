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

//TABLE MOVIES

app.post("/newmovies", function (req, res) {
  let verifRequete = `SELECT * FROM MEDIA WHERE nom_media="${req.body.nom_media}"`;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(verifRequete, (err, rows, fields) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
    } else if (rows.length > 0) {
      res.send("La valeur saisie existe déja");
    } else {
      let ajoutMovie = `INSERT INTO MEDIA (nom_media, description_media, image_media, date_media, type_media)
                         VALUES ( ?,?,?,?,?)`;
      //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
      db.query(
        ajoutMovie,
        [
          req.body.nom_media,
          req.body.description_media,
          req.body.image_media,
          req.body.date_media,
          req.body.type_media,
        ],
        (errTwo, rowsTwo, fieldsTwo) => {
          if (errTwo) {
            console.log(errTwo.message);
            res.send(errTwo.message);
          } else {
              console.log(`Le FILM "${req.body.nom_media}" a bien été créée`);
              res.send(`Le FILM "${req.body.nom_media}" a bien été créée`);
          }
        }
      );
    }
  });
});


//TABLE CATEGORIE

app.post("/newcategorie", function (req, res) {
    let verifRequete = `SELECT * FROM CATEGORIE WHERE nom_categorie="${req.body.nom_categorie}"`;
    //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
    db.query(verifRequete, (err, rows, fields) => {
      if (err) {
        console.log(err.message);
        res.send(err.message);
      } else if (rows.length > 0) {
        res.send("La valeur saisie existe déja");
      } else {
        let ajoutCATEGORIE = `INSERT INTO CATEGORIE (nom_categorie)
                           VALUES (?)`;
        //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
        db.query(
          ajoutCATEGORIE,
          [
            req.body.nom_categorie,
          ],
          (errTwo, rowsTwo, fieldsTwo) => {
            if (errTwo) {
              console.log(errTwo.message);
              res.send(errTwo.message);
            } else {
              
                console.log(`La CATEGORIE "${req.body.nom_categorie}" a bien été créée`);
                res.send(`La CATEGORIE "${req.body.nom_categorie}" a bien été créée`);
              
            }
          }
        );
      }
    });
  });

//TABLE JOINTURE

app.post("/newjointure", function (req, res) {
        let ajoutJointure = `INSERT INTO apartenir (id_media,id_categorie)
                           VALUES (?,?)`;
        //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
        db.query(
          ajoutJointure,
          [
            req.body.id_media,
            req.body.id_categorie
          ],
          (errTwo, rowsTwo, fieldsTwo) => {
            if (errTwo) {
              console.log(errTwo.message);
              res.send(errTwo.message);
            } else {
              
                console.log(`La JOINTURE a bien été créée`);
                res.send(`La JOINTURE a bien été créée`);
              
            }
          }
        );
      
    });




//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
