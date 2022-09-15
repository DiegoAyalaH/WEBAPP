//impbrtar las bibliotecas

const express = require('express');
const path = require('path');
const app=express();
const consolaRoutes = require('./routes/consola');
//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));
app.use(consolaRoutes);


//definición de nuestra aplicación web
app.get('/bigote',(request,response)=>{
    console.log('Hola Mundo');
    response.send('<h1>Hola mundo<h1>')
});
app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'views','index.html'));

}
);
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
})

app.get('/prueba1',(req,res)=>{
    console.log(req.query)
    res.send("Datos enviados por query"+req.query.name)
});


app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params)
    res.send("Datos enviados por params"+req.params.name)
})

app.post('/prueba3',(req,res)=>
{
console.log(req.body);
res.send("Datos recibidos")

})

//lanzar la aplicación
app.listen(8080 ,()=>{
console.log("Servidor en línea")

});

