import Queue from '../data-structures/queue/Queue';

describe('Constructor', ()=>{
    it('With no parameters',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.size()).toBe(0);
        expect(queue.peek()).toBe(null);
    });

    it('With data parameter',() => {
        const queue:Queue<number> = new Queue<number>(1);
        expect(queue.size()).toBe(1);
        expect(queue.peek()).toBe(1);
    });

    it('With array parameter',() => {
        const array:number[] = [1,2];
        const queue:Queue<number> = new Queue<number>(array);
        expect(queue.size()).toBe(2);
        expect(queue.peek()).toBe(2);
    });
});

describe('Enqueue', () => {
    it('one element',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.enqueue(1)).toBe(true);
        expect(queue.size()).toBe(1);
        expect(queue.peek()).toBe(1);
    });

    it('four elements',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.size()).toBe(4);
        expect(queue.peek()).toBe(4);
    });
});

describe('Peek', () => {
    it('an element',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.peek()).toBe(null);
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        expect(queue.peek()).toBe(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(2);
    });

});

describe('Dequeue', () => {
    it('elements form queue',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(2);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(0);
    });

    it('to empty queue',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.dequeue()).toBe(null);
    });
});

describe('Size', ()=>{
    it('Validate size',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.size()).toBe(0);
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size()).toBe(3);
        queue.dequeue();
        expect(queue.size()).toBe(2);
    });
});

describe('Clear', ()=>{
    it('Clear',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.clear();
        expect(queue.size()).toBe(0);
        expect(queue.peek()).toBe(null);
    });

    it('with empty',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.clear();
        expect(queue.peek()).toBe(null);
    });
});

describe('isEmpty', ()=>{
    it('is Empty',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });
});

describe('toArray', ()=>{
    it('to array',() => {
        const queue:Queue<number> = new Queue<number>();
        expect(queue.toArray()).toEqual([]);
        queue.enqueue(1)
        expect(queue.toArray()).toEqual([1]);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.toArray()).toEqual([1,2,3]);
        expect(new Queue<number>(queue.toArray()).toArray()).toEqual([1,2,3]);
    });
});

describe('find', ()=>{
    it('Find',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.find((item)=>{
            return item === 2;
        })).toBe(2);
        

        expect(queue.find((item)=>{
            return item === 5;
        })).toBe(null);
    });
});

describe('Map', ()=>{
    it('number +1',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
  
        const mappedQueueNumber:Queue<number> = queue.map((item)=>{
            return item + 1;
        });
        expect(mappedQueueNumber.peek()).toBe(3);
    
    });

    it('number to object',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
  
        const mappedQueueToObject:Queue<{item:number}> = queue.map((item)=>{
            return {item:item};
        });
        expect(mappedQueueToObject.peek()).toEqual({item:2});
    });

    it('empty',() => {
        const queue:Queue<number> = new Queue<number>();
        const mappedQueue:Queue<{item:number}> = queue.map((item)=>{
            return {item:item};
        });
        expect(mappedQueue.size()).toBe(0);
        expect(mappedQueue.peek()).toBe(null);
    });
});

describe('Reducer', ()=>{
    it('sum',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(10);
        const sum:number = queue.reduce((accumulator, item)=>{
            return accumulator + item;
        });
        expect(sum).toBe(13);
    });

    it('sum with initial value',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(10);
        const sum:number = queue.reduce((accumulator, item)=>{
            return accumulator + item;
        },7);
        expect(sum).toBe(20);
    });

    it('string',() => {
        const queue:Queue<string> = new Queue<string>();
        queue.enqueue('world');
        queue.enqueue('hello ');

        const sum:number = queue.reduce((accumulator, item)=>{
            return accumulator + item;
        });
        expect(sum).toBe('hello world');
    });

    it('string with initial value',() => {
        const queue:Queue<string> = new Queue<string>();
        queue.enqueue('world');
        queue.enqueue('hello ');
        

        const sum:number = queue.reduce((accumulator, item)=>{
            return accumulator + item;
        },'!');
        expect(sum).toBe('!hello world');
    });
});

describe('Filter', ()=>{

    it('numbers > 10',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(5);
        queue.enqueue(10);
        queue.enqueue(15);
        queue.enqueue(20);
        const filteredQueue:Queue<number> = queue.filter((data)=>{
            return data <= 10;
        });
        expect(filteredQueue.size()).toBe(3);
        expect(filteredQueue.peek()).toBe(10);
        expect(filteredQueue.toArray()).toEqual([1,5,10]);
    });

    it('pairs numbers',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        const filteredQueue:Queue<number> = queue.filter((data)=>{
            return data % 2 === 0;
        });
        expect(filteredQueue.peek()).toBe(4);
        expect(filteredQueue.toArray()).toEqual([2,4]);
    });  
});

describe('Some', ()=>{
    const queue:Queue<number> = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    it('> than 3',() => {  
        expect(queue.some((data)=>{
            return data > 3;
        })).toBe(true);
    });

    it('> than 5',() => {  
        expect(queue.some((data)=>{
            return data > 5;
        })).toBe(false);
    });
});

describe('Every', ()=>{
    const queue:Queue<number> = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    it('> than 0',() => {  
        expect(queue.every((data)=>{
            return data > 0;
        })).toBe(true);
    });

    it('< than 6',() => {  
        expect(queue.every((data)=>{
            return data < 6;
        })).toBe(false);
    });
});

describe('Clone', ()=>{
    it('clone',() => {
        const queue:Queue<number> = new Queue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
  
        const clone:Queue<number> = queue.clone();
        expect(clone.size()).toBe(3);
        expect(clone.peek()).toBe(3);
    
    });

    it('empty',() => {
        const queue:Queue<number> = new Queue<number>();
        const clone:Queue<number> = queue.clone();
        expect(clone.size()).toBe(0);
        expect(clone.peek()).toBe(null);
    
    });
});