const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const dotenv = require('dotenv')
const route = require('./routes')
const mongoose = require('mongoose')
const Book = require('./src/models/Book')
const User = require('./src/models/User')
const UserCards = require('./src/models/UserCards')
const Payment = require('./src/models/Payment')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(route)


// Configuração do CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});


// Configuração do MongoDB e Servidor
mongoose.connect(`mongodb://localhost:27017/KNEbooks`)
.then(()=>{
  console.log("Conexão com o banco realizada com sucesso!")
  app.listen('8080', () => {console.log('Server rodando...')})
}).catch((err)=> {
  console.log("Não foi possível fazer a conexão com o banco.", err)
})
