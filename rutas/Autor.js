const {Router}=require('express');
const express=require('express');
const ruta=express.Router();
const {Crearautor,Autor,AutorId,eliminar,actualizar}=require('../controllers/autor');

ruta
    .route("/")
    .post(Crearautor)
    .get(Autor);
ruta
    .route("/:id")
    .get(AutorId)
    .put(actualizar)
    .delete(eliminar)

module.exports =ruta;   