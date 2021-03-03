
const mongoose=require('mongoose');
 
const connectdatabase=async()=>{
    const conexion=await mongoose.connect(process.env.MONGO_URI,{
        
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true 

d


    });
    console.log("La conexion con mongo db a arrancado: ",conexion.connection.host)
}
module.exports=connectdatabase