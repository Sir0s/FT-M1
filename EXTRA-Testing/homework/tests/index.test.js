const { checkSeatStatus, getRowNumber } = require('../homework');

describe ('checkSeatStatus',()=>{ 
it('checkSeatStatus debe ser una funcion', function() { expect(typeof checkSeatStatus).toBe('function'); });
it('checkSeatStatus deberia devolver un TypeError si el primer parametro no es un String', function() {
    expect(function() {checkSeatStatus(1)}).toThrow(new TypeError('First parameter is not a string'));
  });
it('checkSeatStatus deberia devolver un TypeError si el segundo parametro no es un numero', function() {
    expect(function(){checkSeatStatus('A', '1')}).toThrow(new TypeError('Second parameter is not a number'));
  });
  it('Deberia devolver true si el asiento en la fila y columna esta Booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  
  it('Deberia devolver false si el asiento en la fila y columna no esta Booked', () => { expect(checkSeatStatus('E', 3)).toBe(false); });
})


describe ('getRowNumber',()=>{ 
it('getRowNumber deberia devolver 1 cuando se le ingrese la letra A',  () => {
    expect(getRowNumber('A')).toBe(0);
  });
it('getRowNumber deberia devolver 2 cuando se le ingrese la letra C', () => { expect(getRowNumber('C')).toBe(2); });
})