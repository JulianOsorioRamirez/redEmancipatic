
// Hacemos dos test para comprobar el formato que admitimos en el registro con expresiones regulares
 
const user = {
   
    name: "Gustavo",
    unName: "Carretero",
    telf:"123123123",
    pass:"Gus1234"
   
};
const objExpReg = () => user;

describe('Matchers Strings', () => {
    const exp = objExpReg();
   
    test('Comprobamos nombre', () => {
        expect(exp.name).toMatch(/^([A-Za-z]{1,15})$/);
    })
    test('Comprobamos apellido', () => {
        expect(exp.unName).toMatch(
            /^([A-Za-z]{1,15})$/);
    });
    test('Comprobamos telefono', () => {
        expect(exp.telf).toMatch(
            /^\d{9}$/);
    });
    test('Comprobamos password', () => {
        expect(exp.pass).toMatch(
            /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/);
    });
 

});





    // it('works with async/await', async () => {
    //     expect.assertions(1);
    //     const data = await user.getUserName(4);
    //     expect(data).toEqual('Mark');
    // //   });
    // test('Registrar',() => {
    //     expect( funciones.registrar("50892007e","lal@lala.com",["aa@aa.com","ee@ee.com","lal@lala.com"])).toBeTruthy();
    //  });//Eesto simula el login con la base de datos que tiene muchos correos almacenados. 
    //  test('Login', () => {
    //      expect(funciones.todoUsuario("aa@aa.com",[{"email": "aa@aa.com"}])).toBe(0);
    //  });