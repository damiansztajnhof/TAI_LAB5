var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.re + obj.re, this.im + obj.im);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.re - obj.re, this.im - obj.im);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    };
    Complex.prototype.toString = function () {
        console.log(this.re + ' + ' + this.im);
    };
    return Complex;
}());
var com = new Complex(2, 7);
var com2 = new Complex(3, 5);
console.log(com.add(com2));
console.log(com.sub(com2));
console.log(com.module());
com2.toString();
