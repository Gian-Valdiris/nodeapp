const mongoose=require('mongoose');

const data=new mongoose.Schema({
    nombre:String,
    apellido:String
})
module.exports=mongoose.model("Nombre ",data);
