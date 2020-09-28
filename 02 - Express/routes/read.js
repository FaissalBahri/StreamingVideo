//1-Creation des depences de module
//Module de Js.node

const mysql = require("mysql"); //Appel du module MYSQL qui permet d'agir sur une base de donnees
const express = require("express"); //Appel du module permettant de faire la route

//Import DES MODULES CREES
let db = require("./dataBase"); //RECUPERE LES MODULES DE LA BASE DE DONNEE
//let connction = mysql.createConnection(db);
//VARIABLE QOI RECOIT LA CONNECTION A LA BASE DE DONNEE

//2-CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS Server.js
const app = express.Router();

//TABLE MEDIA

app.get("/allmedia", function (req, res) {
  let requete = `
  SELECT nom_media , description_media, image_media, DATE_FORMAT(date_media, "%d/%m/%Y") AS date_media ,type_media,CATEGORIE.nom_categorie
  FROM MEDIA
    INNER JOIN apartenir ON Media.id_media = apartenir.id_media
    INNER JOIN CATEGORIE ON apartenir.id_categorie = CATEGORIE.id_categorie `;

  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//TABLE FILM

app.get("/allmovies", function (req, res) {
  let requete = `SELECT
  nom_media AS Nom,
  description_media AS Description,
  image_media AS Image,
  DATE_FORMAT(date_media, "%d/%m/%Y") AS Date,
  type_media As Type
FROM
  MEDIA
INNER JOIN apartenir ON Media.id_media = apartenir.id_media
INNER JOIN CATEGORIE ON apartenir.id_categorie = CATEGORIE.id_categorie
WHERE
  nom_categorie = 'Film'`;

  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//TABLE SERIE
app.get("/allserie", function (req, res) {
  let requete = `SELECT
  nom_media AS Nom,
  description_media AS Description,
  image_media AS Image,
  DATE_FORMAT(date_media, "%d/%m/%Y") AS Date,
  type_media As Type
FROM
  MEDIA
INNER JOIN apartenir ON Media.id_media = apartenir.id_media
INNER JOIN CATEGORIE ON apartenir.id_categorie = CATEGORIE.id_categorie
WHERE
  nom_categorie = 'Serie'`;

  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//TABLE MANGA

app.get("/allmanga", function (req, res) {
  let requete = `SELECT
  nom_media AS Nom,
  description_media AS Description,
  image_media AS Image,
  DATE_FORMAT(date_media, "%d/%m/%Y") AS Date,
  type_media As Type
FROM
  MEDIA
INNER JOIN apartenir ON Media.id_media = apartenir.id_media
INNER JOIN CATEGORIE ON apartenir.id_categorie = CATEGORIE.id_categorie
WHERE
  nom_categorie = 'Manga'`;

  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
