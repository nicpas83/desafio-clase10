const express = require('express')
const app = express()
const puerto = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { engine } = require('express-handlebars');
const path = require('path')

//configuracion de handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, '/views/layouts/index.hbs'),
    layoutsDir: path.join(__dirname, '/views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials')
}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views/layouts'));


//establecer el espacio público del servidor
app.use(express.static('public'));

//Rutas
const rutas = require('./routes/index')
app.use('/', rutas);

const productos = require('./routes/productos')
app.use('/productos', productos)


app.listen(puerto, (error) => {
    if(error){
        console.log(`Se produjo un error en el servidor`)
        console.error(error)
    }else{
        console.log(`Servidor iniciado en el puerto ${puerto}`)
    }
})