const Autor=require("../models/Autor")
exports.Crearautor=async(req,res,next)=>{
    try{
        const autordata=await Autor.create(req.body);
        res.status(200).json({
            status:"200",
            data:autordata,
        });
    }
   catch(e){
        res.status(400).json({
        status:400,
        mensaje:"Ah ocurrrido un error..."})
    }
}
exports.Autor=async(req,res,next)=>{
    try{
        const autorlista=await Autor.find();
        res.status(200).json(autorlista);
    }
   catch(e){
           res.status(400).json({
           status:400,
           mensaje:"Ah ocurrrido un error..."})
   }  
}
exports.AutorId=async(req,res,next)=>{
    try{
        const autor=await Autor.findById(req.params.id);
        res.status(200).json(autor);
    }
    catch(e){
        res.status(400).json({mensaje:"No hay autor"});
    }
}
exports.actualizar=async(req,res,next)=>{
    try{
        const autor=await Autor.findByIdAndUpdate(req.params.id,req.body);
        if(!autor){
            return res.status(400).json({mensaje:"Ah ocurrido un error"});
        }
        else{
            return res.status(200).json(autor);
        }        
    }
    catch(e){
        res.status(400).json({mensaje:"No hay autor"});
    }
}
exports.eliminar=async(req,res,next)=>{
    try{
        const autor=await Autor.findByIdAndDelete(req.params.id);
        if(!autor){
            return res.status(400).json({mensaje:"Ah ocurrido un error"});
        }
        else{
            return res.status(400).json(autor);
        }
    }
    catch{
        res.status(400).json({mensaje:"No hay autor"});
    }
}