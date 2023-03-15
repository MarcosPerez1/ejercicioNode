/* declaramos las variables de todos los npm de lo que vayamos
a hacer uso en nuestra app */

const express = require("express");
const cors=require ("cors")
const{conexion}=require("./helpers/dbConect")
require ("dotenv").config()

//configurar servidor


const app = express()
const port = process.env.PORT;

//cors El Intercambio de Recursos de Origen Cruzado (CORS)
//  es un mecanismo que utiliza cabeceras HTTP adicionales para
//   permitir que un user agent (en-US) obtenga permiso para acceder
//   a recursos seleccionados desde un servidor, en un origen distinto
//    (dominio) al que pertenece

app.use(cors())

// static es relativa al directorio desde donde inicia el proceso node .´
//  Si ejecuta la aplicación Express desde cualquier otro directorio,
//   es más seguro utilizar la vía de acceso absoluta del directorio
//    al que desea dar servicio: app. use('/static', express.

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public")

//estableceremos nuestra estrucutra de paginas
//  a traves de la templates engines en este caso ejs


app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

//importamos la conexion de mongoose y la declaramos

conexion()

//parse aplication para x www form urlencoded

app.use(express.urlencoded({extended:false}))

//parse application/json
app.use(express.json())

//rutas
app.use("/", require("./routers/routerFront"))
app.use('/api/v1/servicios',require('./routers/apiRouter'))


// app.use('/api/v1/usuarios', require('./routers/apiRouterUser'))
app.use('/api/v1/auth', require('./routers/apiAuth'))


//*404 error
app.use((req,res,next)=>{
  res.status(404).render("404",{
    error: "404",
    msg : "Página no encontrada"
  })
});

//listener
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`)
})

