const path = require("path");

//Proceso cuando se llame a la ruta 
exports.getAltaConsola=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaConsola=(req,res)=>{
    console.log(req.body);
    res.json({estado:"exitoso"})
}

exports.getConsultaConsola=(req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}
exports.getJuegoConsola=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}
exports.getModeloConsola=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}