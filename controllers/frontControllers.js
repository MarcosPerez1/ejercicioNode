
const getIndex= (req, res) => {
    res.render("index", {

    })
}

const getServicios= (req, res) => {
    res.render("servicios", {
        titulo: "Servicios",
        msg: "en nuestra empresa disponemos de estos servicios"
    })
}

const getProductos= (req, res) => {
    res.render("productos", {
        titulo: "Productos",
        msg: "este es el apartados de productos de nuestra empresa"
    })
}

const getQuienes = (req, res) => {
    res.render("quienesomos", {
        titulo: "Quienes somos",
        msg: "Es es el apartado en el que explicamos quienes somos"
    })
}

const getContacto = (req, res) => {
    res.render("contacto", {
        titulo: "Contacto",
        msg: "Este es el apartado en el que te puedes poner en contacto con nosotros"
    })
}

module.exports={
    getIndex,
    getServicios,
    getProductos,
    getQuienes,
    getContacto
}