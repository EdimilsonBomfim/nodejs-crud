//config inicial
const express = require('express')
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
app.listen(3000)
