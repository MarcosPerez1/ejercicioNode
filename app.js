const express = require("express");

//configurar servidor


const app = express()
const port = process.env.PORT || 3000;


// establece la carpeta static

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public")

//restablever template engine

app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");


//rutas
app.use("/", require("./routers/routerFront"))


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
