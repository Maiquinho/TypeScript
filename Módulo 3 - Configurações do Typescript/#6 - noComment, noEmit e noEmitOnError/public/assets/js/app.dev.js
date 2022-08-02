"use strict";
var userLogin = function (userName, userAge, userPassword) {
    if (userName != '' && userAge != 0 && userPassword != '') {
        return true;
    }
    else {
        return false;
    }
};
userLogin('Michael', 21, 'dsKDJnbfue867');
