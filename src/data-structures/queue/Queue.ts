import Clonable from '../../ds-util/Clonable';
import Collection from '../../ds-util/Collection';
import Iterable from '../../ds-util/Iterable';
import SinglyNode from '../../ds-util/SinglyNode';
import Node from '../../nodes/Node';

class Queue<T> implements Collection<T>, Iterable<T>, Clonable<Queue<T>>{

    private first:SinglyNode<T>;
    private last:SinglyNode<T>;
    private length:number;

    constructor(data?:T|T[]){
        this.first = null;
        this.last = null;
        this.length = 0;
        if(data && data instanceof Array){
            for(const d of data){
                this.enqueue(d);
            }
        }
        else if(data){
            this.enqueue(data as T);
        }
    }

    public peek():T{
        if(this.isEmpty()){
            return null;
        }
        return this.first.getData();
    }

    public enqueue(data:T):boolean {
        const node:SinglyNode<T> = new Node<T>(data);
        if(this.isEmpty()){
            this.last = node;
            this.first = node;
        }
        else{
            this.last.setNext(node);
            this.last = node;
        }
        this.length++;
        return true;
    }

    public dequeue():T{
        if(this.isEmpty()){
            return null;
        }
        const data = this.first.getData();
        this.first = this.first.getNext();
        if(this.first == null){
            this.last = null;
        }
        this.length--;
        return data;
    }

    // Collection
    public isEmpty(): boolean {
        return this.first === null;
    }
    public clear(): void {
        this.first = null;
        this.last = null;
        this.length = 0;

    }
    public toArray(): T[] {
        const array:T[] = [];
        let currentNode = this.first;
        while(currentNode !== null){
            array.push(currentNode.getData());
            currentNode = currentNode.getNext();
        }
        return array;
    }

    public size():number{
        return this.length;
    }

    // Interable
    public forEach(action: (data:T, index?: number) => void): void {
        let currentNode = this.first;
        let currentIndex = 0;
        while(currentNode !== null){
            action(currentNode.getData(), currentIndex);
            currentIndex++;
            currentNode = currentNode.getNext();
        }
    }

    public find(filterFn: (data:T) => boolean) {
        let currentNode = this.first;
        while(currentNode !== null){
            if(filterFn(currentNode.getData())){
                return currentNode.getData();
            }
            currentNode = currentNode.getNext();
        }
        return null;
    }

    public map(mapper: (data:T, index:number) => any ): Queue<any> {
        const array:T[] = this.toArray();
        const mappedArray:any[] = new Array(array.length);
        for(let i:number = 0; i<array.length; i++){
            const mappedData = mapper(array[i], i);
            mappedArray.push(mappedData);
        }
        return new Queue<any>(mappedArray);
    }

    public reduce(reducer: (accumulator: any, data:T) => any, accumulator?: any):any {
        let currentNode = this.first;
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

    public filter(filterFn: (data:T) => boolean): Queue<T> {
        const array:T[] = this.toArray();
        const filteredQueue:Queue<T> = new Queue<T>();
        for(const d of array){
            if(filterFn(d)){
                filteredQueue.enqueue(d);
            }    
        }
        return filteredQueue;
    }

    public some(evaluator: (data:T) => boolean): boolean {
        if(this.find(evaluator) === null){
            return false;
        }
        return true;
    }

    public every(evaluator: (data:T) => boolean): boolean {
        let currentNode = this.first;
        while(currentNode !== null){
            if(!evaluator(currentNode.getData())){
                return false;
            }
            currentNode = currentNode.getNext();
        }
        return true;
    }

    // Clonable
    public clone(): Queue<T> {
        return this.filter(data => true);
    }
}

export default Queue;