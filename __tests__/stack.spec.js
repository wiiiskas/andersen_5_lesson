const Stack = require('../tasks/stack');
const _ = require('lodash');

describe('Stack should work correctly', () => {
    it('Should create correctly', () => {
        expect(new Stack(4)).not.toThrowAnyError;
        expect(new Stack()).not.toThrowAnyError;
    })
    it('Should push to stack correctly', () => {
        const stack = new Stack(7);
        expect(()=>stack.push('string')).not.toThrow(TypeError);
        expect(()=>stack.push(1)).not.toThrow(TypeError);
        expect(()=>stack.push(()=>console.log('test'))).not.toThrow(TypeError);
        expect(()=>stack.push({a:1})).not.toThrow(TypeError);
        expect(()=>stack.push(undefined)).not.toThrow(TypeError);
        expect(()=>stack.push(true)).not.toThrow(TypeError);
        expect(()=>stack.push(null)).not.toThrow(TypeError);
    })
    it('Should return push error if full stack', () => {
        const stack = new Stack(3);
        expect(()=>stack.push(1)).not.toThrow(TypeError);
        expect(()=>stack.push(2)).not.toThrow(TypeError);
        expect(()=>stack.push(3)).not.toThrow(TypeError);
        expect(()=>stack.push(4)).toThrow(Error);
    })
    it('pop should return error if empty stack', () => {
        const stack = new Stack(3);
        expect(()=>stack.pop()).toThrow(Error);
    })
    it('pop should return last item ', () => {
        const stack = new Stack(3);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
    })
    it('peek should return last item', () => {
        const stack = new Stack(3);
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    })
    it('peek should return null, if stack is empty', () => {
        const stack = new Stack(3);
        expect(stack.peek()).toEqual(null);
    })
    it('isEmpty should return try if stack is empty or false if it\'s not empty', ()=>{
        const stack = new Stack(3);
        expect(stack.isEmpty()).toEqual(true);
        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
    })
    it('toArray should return array from stack', () => {
        const array = [1, 2, {q:2}];
        const stack = new Stack(3);
        stack.push(1);
        stack.push(2);
        stack.push({q:2});
        expect(_.isEqual(stack.toArray().sort(), array.sort())).toEqual(true);
    })
    it('static fromIterable must return iterable essence', () => {
        const array = [1,3,4,5,6, [3,4,5], {a:1}];
        const stack = Stack.fromIterable(array);
        expect(_.isEqual(stack.sort(), array.sort())).toEqual(true);
    })
    it('static fromIterable must return error if not iterable essence', () => {
        const obj = { 'France': 'Paris', 'England': 'London' };
        expect(() => Stack.fromIterable(obj)).toThrow(Error);
    })
})