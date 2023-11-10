const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const chat = require('./chat');


app.get('/', async function(req,res,next) {
  var pregunta = req.query.pregunta;
  var sesion = req.query.sesion;
  
  var respuesta = await chat.chatear(pregunta, sesion); 

    console.log("respuesta" + respuesta);
    res.send(respuesta);
 });
   
app.listen(8080, () => {
  console.log('Aplicacion Chat en puerto 8080!');
});
