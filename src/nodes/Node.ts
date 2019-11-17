import SinglyNode from '../ds-util/SinglyNode';

class Node<T> implements SinglyNode<T>{
    private data:T;
    private next:SinglyNode<T> | null;
    constructor(data: T){
        this.data = data;
        this.next = null;
    }

    /**
     * Set the next node
     * @param node node to be set
     */
    public setNext(node:SinglyNode<T>){
        this.next = node;
    }

    /**
     * Get next node
     */
    public getNext(){
        return this.next;
    }


    /**
     * Get data
     */
    public getData(){
        return this.data;
    }
}

export default Node;