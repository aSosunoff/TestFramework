const index = require('./index');
 
describe('0-module-1-task', () => {
  it('1+1=2', () => {
      expect(index.sum(1, 1)).toEqual(2);
  });

  it('undefined, undefined', () => {
    expect(index.sum).toThrowError(TypeError, 'Не число');
  });

  i ('Infinity, Infinity', () => {
    expect(index.sum(Infinity, Infinity)).toEqual(Infinity);
  });

  it('" ", " "', () => {
    const check = () => {
      index.sum(" ", " ");
    };

    expect(check).toThrowError(TypeError, 'Не число');
  });

  it('{}, {}', () => {
    const check = () => {
      index.sum({}, {});
    };
    
    expect(check).toThrowError(TypeError, 'Не число');
  });

  it('[], []', () => {
    const check = () => {
      index.sum([], []);
    };
    
    expect(check).toThrowError(TypeError, 'Не число');
  });
});
  
describe('0-module-1-task-isNumber', () => {
  it('', () => {
    let arrayParameter = [
      null, 
      undefined,
      '',
      /\s/,
      [],
      {},
      () => {},
    ];

    for (let element of arrayParameter) {
      expect(index.isNumber(element)).toBeFalse();
    }
  });
});
  