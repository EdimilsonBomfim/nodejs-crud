//config inicial
const express = require('express')
const mongoose = require('mongoose') //importat mongoose
const app = express()

//formade ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use( express.json())

//Rota inicial / Endpoint
app.get('/', (req, res) =>{

    // mostrar requisicao

    res.json({ message: 'oi Express teste !' })

} )

// entregar uma porta
const DB_USER = 'edimilson'
const DB_PASSWORD= encodeURIComponent('ordVybCaA7oBw7eW')
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.4fvwlaw.mongodb.net/bancotesteapi?retryWrites=true&w=majority´`

    )   
    . then(() =>{
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })  
    .catch((err) => console.log(err)) 

