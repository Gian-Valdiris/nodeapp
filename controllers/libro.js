
exports.getlibro=(req,res,next)=>{
    res.json({mensaje:"Se devolvio el libro por id con get"})
}
exports.getlibros=(req,res,next)=>{
    let lista=[]
    req.on("data",data=>{
        lista.push(data);
    })
    req.on("end",()=>{
        let listaa=[]
        listaa=Buffer.concat(lista).toString();
        console.log(listaa);
    })
    res.json({
        mensaje:"Se  devolvieron toso los libros parte 2 "})
}
exports.poslibro=(req,res,next)=>{
    res.json({mensaje:"Se devolvieron los libros con post  "})
}
exports.deletelibro=(req,res,next)=>{
    res.json({mensaje:"Se elimino el libro de aid"})
}
exports.putlibro=(req,res,next)=>{
    res.json({mensaje:"Se  actualizo el libro"})
}
exports.poslibroid=(req,res,next)=>{
    res.json({mensaje:"Se devolvieron  todos los libros con post parte 2 "});
}

