const MyArray = require('../tasks/myFilter');
const _ = require('lodash');
const array = new MyArray(1,2,3,4,5);
const callback = (item => item > 3);

describe("MyFilter should work correctly", () => {
    it("Should work correctly as filter", ()=>{
        const arrayWithMyFilter = array.myFilter(callback);
        const arrayWithoutMyFilter = array.filter(callback);
        console.log(arrayWithMyFilter, arrayWithoutMyFilter);
        expect(_.isEqual(arrayWithMyFilter.sort(), arrayWithoutMyFilter.sort())).toEqual(true);
    })
    it("Should work with context", ()=>{
        const context = [2,3,4,5];
        const arrayWithPolyfill = array.myFilter(callback, context);
        const arrayWithoutPolyfill = array.filter(callback, context);
        expect(_.isEqual(arrayWithPolyfill.sort(), arrayWithoutPolyfill.sort())).toEqual(true);
    })
})