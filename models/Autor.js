const mongoose=require('mongoose');
//creando shmema

const AutorShema=new mongoose.Schema({
    nombre:String,
    apellido:String,
    gradoacademico:String,
    nombrecompleto:String,

})
module.exports=mongoose.model("Autor",AutorShema);
 