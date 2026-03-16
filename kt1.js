var Visa = /** @class */ (function () {
    function Visa() {
        this._country = this.getRandomCountry();
        this._isValid = this.getIsValid();
        this._year = this.getRandomYear();
    }
    Visa.prototype.getRandomCountry = function () {
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
            return "Арстоцка";
        }
        else if (randomNumber === 2) {
            return "Колечия";
        }
        else {
            return "Орбистан";
        }
    };
    Visa.prototype.getIsValid = function () {
        var randomNumber = Math.floor(Math.random() * 2) + 1;
        return randomNumber === 2 ? false : true;
    };
    Visa.prototype.getRandomYear = function () {
        return Math.floor(Math.random() * (2050 - 2000 + 1)) + 2000;
    };
    Visa.prototype.showInfo = function () {
        console.log("\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F - ".concat(this._country, "\n\u0412\u0430\u043B\u0438\u0434\u043D\u0430\u044F? - ").concat(this._isValid, "\n\u0413\u043E\u0434 \u0432\u044B\u0434\u0430\u0447\u0438 - ").concat(this._year));
    };
    return Visa;
}());
var BorderGuard = /** @class */ (function () {
    function BorderGuard() {
    }
    BorderGuard.prototype.checkVisa = function (visa) {
        if (visa._country === "Колечия") {
            return "Враждебная страна!";
        }
        if (visa._isValid === false) {
            return "Подделка!";
        }
        if (visa._year > 2026 || visa._year < 2022) {
            return "Некорректный год выпуска!";
        }
        return "Въезд разрешен!";
    };
    return BorderGuard;
}());
function main() {
    var visa1 = new Visa();
    var visa2 = new Visa();
    var visa3 = new Visa();
    var guard = new BorderGuard();
    visa1.showInfo();
    console.log(guard.checkVisa(visa1));
    visa2.showInfo();
    console.log(guard.checkVisa(visa2));
    visa3.showInfo();
    console.log(guard.checkVisa(visa3));
}
main();
