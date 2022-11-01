const  {response} = require('express')

const  crearUsurio  = (req, res = response) => {

    const {name, email, password} = req.body;

    if(name.length < 5) {
        res.status(400).json({
            ok: false,
            msg:'El nombre debe ser de 5 letras'
        })
    };

    res.json({
        ok:true,
        msg:'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {

    const {name, email, password} = req.body;

    res.json({
        ok:true,
        msg:'login',
        name,
        email,
        password
    });
}

const revalidarToken = (req, res= response) => {

    const {} = 

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