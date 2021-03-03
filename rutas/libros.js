const express = require("express");

const ruta = express.Router();//para indicar que vamos a trabajar con rutas

const {
    //se puede decir que es la parte logica donde se procesaran las rutras 
  getlibro,
  getlibros,
  poslibro,
  poslibroid,
  deletelibro,
  putlibro,
} = require("../controllers/libro");
//documento estas rutas porque esto lo  hago de otro archivo

//ruta.get("/",(req,res)=>{
//    res.status(200).json({status:"200",mensaje:"Se proceso bien "})
//});
//
//ruta.get("/:id",(req,res)=>{
//    res.status(200).json({mensaje:"Se devolvio el libro por id "})
//});
//ruta.post("/",(req,res)=>{
//    res.status(200).json({mensaje:"Desde el metodo post "})
//});
//ruta.put("/:id",(req,res)=>{
//    const{url}=req;
//
//    res.status(200).json({mensaje:"Desde el metodo put ",url:url})
//
//});
//
//ruta.delete("/:id",(req,res)=>{
//    res.status(200).json({mensaje:"Desde el metodo delete "})
//});

ruta
    .route("/")
    .get(getlibros)
    .post(poslibro)
ruta
    .route("/:id")
    .post(poslibroid)
    .put(putlibro)
    .delete(deletelibro)
    .get(getlibro)
module.exports = ruta;
