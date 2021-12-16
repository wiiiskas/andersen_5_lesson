Array.prototype.myFilter = function myFilter (callback, thisArg) {
    const MESSAGES = {
        nullError: 'Array can\'t be undefined or null',
        callbackError: 'First argument must be callback',
    }
    if(this == null) throw new Error(MESSAGES.nullError);
    if(typeof callback !== 'function') throw new Error(MESSAGES.callbackError);
    const context = thisArg | this;
    let objFromArray = Object(this);
    let resultArray = [];
    for(let i = 0; i < objFromArray.length; i++){
        i in objFromArray && !!callback.call(context, this[i], i, this) && resultArray.push(this[i]);
    }
    return resultArray;
}

module.exports = Array;

