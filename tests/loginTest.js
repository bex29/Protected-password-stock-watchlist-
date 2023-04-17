
assert = chai.assert;
// let testUsers = [];

// var request = new XMLHttpRequest();
// request.open("GET", "http://localhost:2000/getUserData");
// request.onload = function () {
//   var resp = JSON.parse(request.response);
//   testUsers = resp;
// };
// request.send();
describe('Testing function', function () {

    it('Test 1: check if random user created by random module is able to login in (should pass the test if no random user is able to login)', () => {
        pass=Math.random().toString(36).slice(2, 10);
        email=makeEmail();
        checkUserEmailPassword(email,pass);
    });
});
function makeEmail() {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
}