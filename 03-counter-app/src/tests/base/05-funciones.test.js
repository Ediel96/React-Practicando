import '@testing-library/jest-dom';

import { getUser }   from "../base/05-funciones.js"

describe('Pruebas en 02-temple-string',() => {

    test('getaSaludo debe de retornar hola fernando', ()=>{
        
        const userTest = {
            uid: 'G242H',
            username: 'El_pan234324'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

});