
const Usuarios = require('../models/authModel')
const bcrypt = require('bcryptjs')

const {generarJwt}=require("../helpers/jwt")

const createUser = async(req,res) =>{
    try{

        const {nombre,email,pass}=req.body
        const user=new User (req.body)
        const usuario=await Usuarios.findOne({email})

            if(usuario){
                return res.status(400).json({
                    ok:false,
                    msg:"el usuario ya existe"
                })
            }

            let salt=bcrypt.genSaltSync(10);
          usuario.pass=bcrypt.hashSync(pass,salt);

        await user.save()

        const token=await generarJwt(usuario.id,usuario.nombre)

        return res.status(201).json({
            ok:true,
            uid:user.id,
            nombre:user.name,
            email:user.email,
            token
        })
    }catch (error){
        return res.status(500).json({
            ok:false,
            msg:"el usuario no pudo ser registrado"
        })
    }
}

const loginUser = async (req,res)=>{
    try{
        const {email,pass}=req.body
        const usuario=await User.findOne({email})
        const passwordOk = bcrypt.compareSync(pass, usuario.pass)
        
        if(usuario && passwordOk){
            return res.status(200).json({
                ok:true,
                msg:"usuario y contraseña correctas",
            }) 
        }
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg:"la contraseña no es valida"
        })
    }


    }


const renewToken = async (req,res)=>{

    const {uid,nombre}=req
    const token=await generarJwt(uid,nombre)

return res.status(200).json({
    ok:true,
    msg:"renew jwt",
    user:{
        uid,
        nombre
    },
    token
})


}

module.exports={
    createUser,
    loginUser,
    renewToken
}