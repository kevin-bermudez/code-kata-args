const exampleScript = require('./example-script');

describe('args analyzer suite tests',() => {
  test('invalid argument',() => {
    expect(exampleScript('-n -t')).toBe('Alguno de los argumentos pasados no está definido en el esquema: -t')
  })

  test('multiple invalid arguments',() => {
    expect(exampleScript('-n -t -i')).toBe('Alguno de los argumentos pasados no está definido en el esquema: -t, -i')
  })

  test('invalid value for a string',() => {
    expect(exampleScript('-n -s true -b')).toBe('El valor pasado no es un string');
  })

  test('invalid value for a integer',() => {
    expect(exampleScript('-n holi -s -b')).toBe('El valor pasado no es un número entero');
  })

  test('invalid value for a boolean',() => {
    expect(exampleScript('-n -s -b hey')).toBe('El valor pasado no es un boolean');
  })

  test('negative number',() => {
    expect(exampleScript('-n -2 -s -b')).toBe('El valor de los argumentos pasados es: -n=-2 -s= -b=true')
  })

  test('the order of the arguments does not alter the result',() => {
    expect(exampleScript('-s holi -n 2 -b true')).toBe('El valor de los argumentos pasados es: -s=holi -n=2 -b=true')
  })

  test('default values ​​are assigned correctly',() => {
    expect(exampleScript('-s -n -b')).toBe('El valor de los argumentos pasados es: -s= -n=0 -b=true')
  })
})