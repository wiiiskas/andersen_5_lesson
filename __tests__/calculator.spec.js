const Calculator = require("../tasks/calculator");
const calc1 = new Calculator(1,2);
const calc2 = new Calculator(3,5);
const calc3 = new Calculator(12,3);

describe("Calculator should be work correctly", ()=>{
    it('Should be add numbers correctly', () => {
        expect(calc1.logSum()).toEqual(3);
        expect(calc2.logSum()).toEqual(8);
        expect(calc3.logSum()).toEqual(15);
    })
    it('Should divide correctly', () => {
        expect(calc1.logDiv()).toEqual(0.5);
        expect(calc2.logDiv()).toEqual(0.6);
        expect(calc3.logDiv()).toEqual(4);
    })
    it('Should multiply correctly', () => {
        expect(calc1.logMul()).toEqual(2);
        expect(calc2.logMul()).toEqual(15);
        expect(calc3.logMul()).toEqual(36);
    })
    it('Should subtract correctly', () => {
        expect(calc1.logSub()).toEqual(-1);
        expect(calc2.logSub()).toEqual(-2);
        expect(calc3.logSub()).toEqual(9);
    })
    it('Should change x, y correctly', () => {
        calc1.setY(4);
        expect(calc1.logSum()).toEqual(5);
        calc1.setX(5);
        expect(calc1.logSum()).toEqual(9);
        calc1.setX(1);
        calc1.setY(1);
        expect(calc1.logSum()).toEqual(2);
    })
    it('Should throw error if not Integer', () => {
        expect(()=>calc1.setX('4')).toThrow(TypeError);
        expect(()=>calc1.setX(NaN)).toThrow(TypeError);
        expect(()=>calc1.setX(Infinity)).toThrow(TypeError);
        expect(()=>calc1.setX(null)).toThrow(TypeError);
        expect(()=>calc1.setX(undefined)).toThrow(TypeError);
        expect(()=>calc1.setX(444n)).toThrow(TypeError);
        expect(()=>calc1.setY('4')).toThrow(TypeError);
        expect(()=>calc1.setY(NaN)).toThrow(TypeError);
        expect(()=>calc1.setY(Infinity)).toThrow(TypeError);
        expect(()=>calc1.setY(null)).toThrow(TypeError);
        expect(()=>calc1.setY(undefined)).toThrow(TypeError);
        expect(()=>calc1.setY(444n)).toThrow(TypeError);
    })
})