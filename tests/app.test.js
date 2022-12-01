const { saludo, nombreCompleto } = require("../app");

describe('Saludo', () => {
    test('La funcion saludo debe existir', () => {
        expect(typeof(saludo)).toBe('function');
    })
})

describe('Funcion Nombre Completo', () => {
    test('La funcion nombreCompleto debe existir', () => {
        expect(typeof(nombreCompleto)).toBe('function');
    })
    test('La funcion nombreCompleto debe existir', () => {
        expect(nombreCompleto()).toBe('Luis Rodriguez');
    })
})