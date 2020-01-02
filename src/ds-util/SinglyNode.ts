export default interface SinglyNode<T> {
    /**
     * Sets the next node
     * @param node node to be set
     */
    setNext(node:SinglyNode<T>):void;

    /**
     * Get next node
     */
    getNext():SinglyNode<T>;


    /**
     * Get data
     */
    getData():T;
}