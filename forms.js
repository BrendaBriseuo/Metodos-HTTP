
'use strict'
var http=require('http').createServer(webServer),
form= require('').readFileSync('form.html')

querystring = require ('querystring'),
util = require('util'),
dataString = ''

function webServer(req, res)

{
 if(req.method == 'GET')
 {
     res.writeHead(200, {'Content-Type' : 'text/html'})
     res.end(form)
 }

 if(req.method == 'POST')
 {
     req
     .on('data', function (data){
         dataString += data
     })
     .on('end', function(){
         var templateString ='los datos que enviaste por POST son: ${dataString}'
         console.log(templateString)
         res.end(templateString)
     })
 }

}
