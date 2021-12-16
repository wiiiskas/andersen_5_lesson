class Stack {
    static _ERRORS = {
        lengthError: { type: 'lengthError', message: 'Длина стека должна быть числом' },
        isFullStack: { type: 'isFullStack', message: 'Стек переполнен' },
        isEmptyStack: { type: 'isEmptyStack', message: 'Стек пустой' },
        isNotIterable: { type: 'isNotIterable', message: 'Стек не итерируемый' },
    }
    constructor(length) {
        this._stack = [];
        this._length = length || 10;
        this.stackErrorsValidation(Stack._ERRORS.lengthError.type);
    }
    push(elem) {
        this.stackErrorsValidation(Stack._ERRORS.isFullStack.type);
        this._stack.push(elem);
    }
    pop(){
        this.stackErrorsValidation(Stack._ERRORS.isEmptyStack.type);
        return this._stack.pop();
    }
    peek(){
        return this._stack[this._stack.length-1] || null;
    }
    isEmpty(){
        return !this._stack.length;
    }
    toArray(){
        return this._stack;
    }
    static fromIterable(iterable){
        if (!(Symbol.iterator in iterable)) throw new Error(Stack._ERRORS.isNotIterable.message);
        const stack = new Stack(iterable.length);
        for(let item of iterable){
            stack.push(item);
        }
        return stack.toArray();
    }
    stackErrorsValidation(type) {
       let error = false;
       switch (type) {
           case Stack._ERRORS.lengthError.type:
               if (!Number.isInteger(this._length)) error = true;
               break;
           case Stack._ERRORS.isEmptyStack.type:
                if(!this._stack.length) error = true;
                break;
           case Stack._ERRORS.isFullStack.type:
               if (this._stack.length > this._length-1) error = true
               break;
           default:
               error = true;
               break;
       }
           if(error) throw (new Error(Stack._ERRORS[type].message) || new Error("Unknown error"));
       }
}

module.exports = Stack;