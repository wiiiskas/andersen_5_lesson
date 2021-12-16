class Calculator {
    #messages = {
        typeError: 'Должно быть целое число',
    }
    constructor(x, y) {
        this.x = this.withIntegerValidation(x);
        this.y = this.withIntegerValidation(y);
    }
    setX = (value) => { this.x = this.withIntegerValidation(value) }
    setY = (value) =>{ this.y = this.withIntegerValidation(value) }
    logSum = () => this.x + this.y;
    logMul = () => this.x * this.y;
    logSub = () => this.x - this.y;
    logDiv = ()=> this.x / this.y;

    withIntegerValidation(number) {
        if(!Number.isInteger(number)) throw new TypeError(this.#messages.typeError);
        return number;
    }
}

module.exports = Calculator;