const express=require('express');
const app=express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));



const server=app.listen(3000, () => {
  console.log('Servidor web iniciado');
});

