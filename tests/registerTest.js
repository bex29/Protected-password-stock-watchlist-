const { assert } = require("chai");

assert = chai.assert;

describe('Testing function', function () {

    it('Test 1: Check if passowrd is less than 8 characters', () => {
        let pass='';
       for (var i=1;i<=8;i++){
        pass += characters.charAt(Math.floor(Math.random() * charactersLength));
    }assert.equal(checkPassword(pass),false)
    });

    // it('Test 2: generateNum(5) returns >= 1', () => {
    //     for (var i = 1; i <= 1000; i++) {
    //         assert(generateNum(5)>=1);
    //     }
    // });

    // it('Test 3: generateNum(5) returns <= 5', () => {
    //     for (var i = 1; i <= 1000; i++) {
    //         assert(generateNum(5)<=5);
    //     }
        
    // });
    // it('Test 4: generateNum(10) and returned values are in [1,10]', () => {
    //     for (var i = 1; i <= 1000; i++) {
    //         assert(generateNum(10)>=1 && generateNum(10)<=10);
    //     }
        
    // });
});