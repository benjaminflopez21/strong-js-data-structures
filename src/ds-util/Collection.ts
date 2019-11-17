export default interface Collection<T>{
    /**
     * Cuantity of element in the collection
     */
    size():number;

    /**
     * Evaluate if the collection is empty
     */
    isEmpty():boolean;

    /**
     * clear the collection.
     */
    clear():void;

    /**
     * return an array with the elements of the collection.
     */
    toArray():Array<T>;
}