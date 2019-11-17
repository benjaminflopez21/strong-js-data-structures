export default interface Iterable<T> {
    /**
     * executes a provided function once for each array element
     * @param action funtion to be executed on each element
     */
    forEach(action:(data:T, index?:number) => void):void;

    /**
     * returns the value of the first element in the provided array that satisfies the provided testing function.
     * @param filterFn tester function.
     */
    find(filterFn:(data:T) => boolean):any;

    /**
     * creates a new Data Structure with the results of calling a provided function on every element in the calling data structure.
     * @param mapper function that map the values.
     */
    map(mapper:(data:T) => any):any;

    /**
     * executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
     * @param reducer function to perform the reducer operation
     * @param accumulator acumulated value of all performed reducers
     */
    reduce(reducer:(accumulator:any, data:T) => any, accumulator?:any):any;


    /**
     * creates a new data structure with all elements that pass the test implemented by the provided function.
     * @param filterFn tester function.
     */
    filter(filterFn:(data:T) => boolean):any;

    /**
     * tests whether at least one element in the array passes the test implemented by the provided function.
     * @param evaluator tester function.
     */
    some(evaluator:(data:T) => boolean):boolean;

    /**
     * tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
     * @param evaluator tester function.
     */
    every(evaluator:(data:T) => boolean):boolean;
}