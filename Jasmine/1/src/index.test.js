const index = require('./index');
 
describe('index', () => {
  describe('sum', () => {
    it('1+1=2', () => {
      expect(index.sum(1, 1)).toEqual(2);
    });

    it('undefined, undefined', () => {
      expect(index.sum).toThrowError(TypeError, 'Не число');
    });

    it('Infinity, Infinity', () => {
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

  describe('factorial', () => {
    it('факториал 0 равен 1', () => {
      expect(index.factorial(0)).toEqual(1);
    });
  
    it('факториал 1 равен 1', () => {
      expect(index.factorial(1)).toEqual(1);
    });
  
    it('факториал 3 равен 6 ', () => {
      expect(index.factorial(3)).toEqual(6);
    });
  
    it('факториал 5 равен 120 ', () => {
      expect(index.factorial(5)).toEqual(120);
    });

    it('null', () => {
      const runTaskByNull = () => {
        index.factorial(null);
      };
  
      expect(runTaskByNull).toThrowError(TypeError, 'Значение может быть целым числом');
    });
  
    it('undefined', () => {
      const runTaskByUndefined = () => {
        index.factorial(undefined);
      };
  
      expect(runTaskByUndefined).toThrowError(TypeError, 'Значение может быть целым числом');
    });
  
    it('Infinity', () => {
      const runTaskByInfinity = () => {
        index.factorial(Infinity);
      };
  
      expect(runTaskByInfinity).toThrowError(TypeError, 'Значение не должно быть бесконечным');
    });
  
    it('NaN', () => {
      const runTaskByNaN = () => {
        index.factorial(NaN);
      };
  
      expect(runTaskByNaN).toThrowError(TypeError, 'Значение должно быть числом');
    });
  });
  
  describe('isNumber', () => {
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
});
  


