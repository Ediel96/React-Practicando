const  {response, json} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const  crearUsurio  = async(req, res = response) => {

    const {name, email, password} = req.body;

    try {

    let usuario = await Usuario.findOne({email});

    if(usuario){
        return res.status(400).json({
            ok:false,
            msg:'El usuario ya existe con el correo'
        });
    };
        
    usuario = new Usuario(req.body);

    //Encriptar contrasena
    const salt = bcrypt.genSaltSync();

    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    //Generar JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
        ok:true,
        msg:'registro',
        uid: usuario.id,
        name: usuario.name,
        token
    });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'por Favor hable con adminidatrador'
        })
    }

}

const loginUsuario = async(req, res = response) => {

    const { email, password} = req.body;

    try {

        let usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario y la contrasena no son correctos'
            });
        };

        //Confirmar la contrasenas
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            })
        }

        // Generar el tocken
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok:true,
            msg:'login',
            uid:usuario.id,
            name : usuario.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'por Favor hable con adminidatrador'
        })
    }
}

const revalidarToken = (req, res= response) => {


    res.json({
        ok:true,
        msg:'renew'
    });
}

module.exports = {
    crearUsurio,
    loginUsuario,
    revalidarToken
}