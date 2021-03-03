const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
const morgan= require("morgan");

const connectdatabase= require("./config/db.js");
connectdatabase();


const libro = require("./rutas/libros");
const autor=require("./rutas/Autor")

const app = express();
app.use(express.json());

if(process.env.NODE_ENV==="development"){
  app.use(morgan("dev"));
}
app.use("/api/libreriaautor/",autor);
app.use("/api/libro", libro);

const PORT = process.env.PORT || 5000;

const server=app.listen(PORT,()=>{
  console.log("El servidor se ejecuta en ambiente ", process.env.NODE_ENV);
  }
);
process.on('unhandledRejection',(err,promise)=>{
  console.log("errores",err.message);
  server.close(()=>process.exit(1));
})
