assert = chai.assert;

describe('Testing function', function () {

    it('Test 1: Check if passowrd is less than 8 characters', () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let pass = '';
        const charactersLength = characters.length;
        for (var j = 1; j < 1000; j++) {
            assert.equal(checkPassword(Math.random().toString(36).slice(2, 10)), true);
        }
    });

    it("Test 2: Check if it's a valid email", () => {
        var Chance = require('chance');
        // Instantiate Chance so it can be used
        var chance = new Chance();
        for (var m = 1; m < 1000; m++) {
            assert.equal(isValidEmail(chance.email()), true);
        }
    });

});