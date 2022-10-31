const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-with, Content-type, Accept, Authorization'
    )
    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }
    app.use(cors());
    next()
})

const rotaProdut = require('./rotas/produtos')
const rotaComida = require('./rotas/comidas')
const rotaBebida = require('./rotas/bebidas')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/produtos', rotaProdut)
app.use('/comidas', rotaComida)
app.use('/bebidas', rotaBebida)




app.use((req, res, next) => {
    const erro = new Error("Pagina nao encontrada")
    erro.status = 404
    next(erro)
})
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    })
})
module.exports = app;