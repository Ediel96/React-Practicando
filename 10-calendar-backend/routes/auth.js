/*
    Rutas de Usuario /A
    host + /api/auth
*/
// const app = express();
const { Router } = require('express');
const { check } = require('express-validator')
const router = Router();

const { crearUsurio , loginUsuario, revalidarToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
    '/new',
    [//middleware
        check('name', 'El Nombe es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contrasena es obligatorio y se 5 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    crearUsurio);

router.post('/',
    [
        check('email', 'El Correo es obligatorio').isEmail(),
        check('password', 'La contrasena es obligatorio y se 5 caracteres').isLength({min: 6}),
        validarCampos
    ]
    , loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;