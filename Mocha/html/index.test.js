describe('pow', function() {
    describe('Возводить в 3 степень', function() {
        before(() => console.log("<--- Тестирование началось – перед тестами"));
        after(() => console.log("<--- Тестирование закончилось – после всех тестов"));

        beforeEach(() => console.log("Перед тестом – начинаем выполнять тест"));
        afterEach(() => console.log("После теста – заканчиваем выполнение теста"));


        function makeTest(x){
            let expected = x * x * x;
    
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
    
        for (let i = 0; i <= 5; i++) {
            makeTest(i);
        }
    });

    describe('Проверка не хороших значений', function(){
        it("для отрицательных n возвращает NaN", function() {
            assert.isNaN(pow(2, -1));
        });
    
        it("для дробных n возвращает NaN", function() {
            assert.isNaN(pow(2, 1.5));
        });

        it("Без параметров", function() {
            assert.isNaN(pow());
        });

        it("Параметр null", function() {
            assert.isNaN(pow(null));
        });
    });
});