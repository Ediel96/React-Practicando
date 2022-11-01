/*
    Rutas de Usuario /A
    host + /api/auth
*/
// const app = express();
const { Router } = require('express');
const router = Router();

const { crearUsurio , loginUsuario, revalidarToken} = require('../controllers/auth')

router.post('/new', crearUsurio);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;