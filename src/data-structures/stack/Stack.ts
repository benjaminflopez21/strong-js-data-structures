import Clonable from '../../ds-util/Clonable';
import Collection from '../../ds-util/Collection';
import Iterable from '../../ds-util/Iterable';
import SinglyNode from '../../ds-util/SinglyNode';
import Node from '../../nodes/Node';

class Stack<T> implements Collection<T>, Iterable<T>, Clonable<Stack<T>>{

    private top:SinglyNode<T>;
    private length:number;

    constructor(data?:T|T[]){
        this.top = null;
        this.length = 0;
        if(data && data instanceof Array){
            for(const d of data){
                this.push(d);
            }
        }
        else if(data){
            this.push(data as T);
        }
    }

    public peek():T{
        if(this.isEmpty()){
            return null;
        }
        return this.top.getData();
    }

    public push(data:T):boolean {
        const node:SinglyNode<T> = new Node<T>(data);
        if(this.top !== null){
            node.setNext(this.top);
        }
        this.top = node;
        this.length++;
        return true;
    }

    public pop():T{
        if(this.isEmpty()){
            return null;
        }
        const data:T = this.top.getData();
        this.top = this.top.getNext();
        this.length--;
        return data;
    }

    // Collection
    public isEmpty(): boolean {
        return this.top === null;
    }


    public clear(): void {
        this.top = null;
        this.length = 0;
    }

    public toArray(): T[] {
        const array:T[] = [];
        let currentNode = this.top;
        while(currentNode !== null){
            array.push(currentNode.getData());
            currentNode = currentNode.getNext();
        }
        return array.reverse();
    }

    public size():number{
        return this.length;
    }


    // Interable
    public forEach(action: (data: T, index?: number) => void): void {
        let currentNode = this.top;
        let currentIndex = 0;
        while(currentNode !== null){
            action(currentNode.getData(), currentIndex);
            currentIndex++;
            currentNode = currentNode.getNext();
        }
    }

    public find(filterFn: (data: T) => boolean) {
        let currentNode = this.top;
        while(currentNode !== null){
            if(filterFn(currentNode.getData())){
                return currentNode.getData();
            }
            currentNode = currentNode.getNext();
        }
        return null;
    }

    public map(mapper: (data: T, index:number) => any ): Stack<any> {
        const array:T[] = this.toArray();
        const mappedArray:any[] = new Array(array.length);
        for(let i:number = 0; i<array.length; i++){
            const mappedData = mapper(array[i], i);
            mappedArray.push(mappedData);
        }
        return new Stack<any>(mappedArray);
    }

    public reduce(reducer: (accumulator: any, data: T) => any, accumulator?:any):any {
        let currentNode = this.top;
        let accumuler:any = accumulator;
        while(currentNode !== null){
            if(accumuler !== null && accumuler !== undefined){
                accumuler = reducer(accumuler, currentNode.getData());
            }
            else{
                accumuler = currentNode.getData();
            }
            
            currentNode = currentNode.getNext();
        }
        return accumuler;
    }

    public filter(filterFn: (data:T) => boolean): Stack<T> {
        const array:T[] = this.toArray();
        const filteredArray:T[] = [];
        for(const d of array){
            if(filterFn(d)){
                filteredArray.push(d);
            }    
        }
        return new Stack<T>(filteredArray);
    }

    public some(evaluator: (data:T) => boolean): boolean {
        if(this.find(evaluator) === null){
            return false;
        }
        return true;
    }

    public every(evaluator: (data:T) => boolean): boolean {
        let currentNode = this.top;
        while(currentNode !== null){
            if(!evaluator(currentNode.getData())){
                return false;
            }
            currentNode = currentNode.getNext();
        }
        return true;
    }

    // Clonable
    public clone(): Stack<T> {
        return this.filter(data => true);
    }

}

export default Stack;