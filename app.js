const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'));

app.listen(8000, ()=>{
    console.log('servidor corriendo');
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
 app.get('/registro', (req,  res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
 })