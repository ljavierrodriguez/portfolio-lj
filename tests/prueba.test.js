const { nombreCompleto } = require("../app");

describe('Funcion Nombre Completo', () => {
    test('La funcion nombreCompleto debe existir', () => {
        expect(typeof(nombreCompleto)).toBe('function');
    })
    test('La funcion nombreCompleto debe existir', () => {
        expect(nombreCompleto()).toBe('Luis Rodriguez');
    })
})