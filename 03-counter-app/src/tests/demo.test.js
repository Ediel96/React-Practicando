import '@testing-library/jest-dom';

const { getSaludo } = require("../base/02-template-string");

describe('Pruebas en 02-temple-string',() => {

    test('getaSaludo debe de retornar hola fernando', ()=>{
        const nombre = "Fernando";

        const saludo =  getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre)
    })

    test('Get saludo con el nombre de hamilton', () =>{
        const nombre = "Hamilton";

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre)
        console.log('Hamilton mi puto nombre');
    })
})