import Stack from '../data-structures/stack/Stack';

describe('Constructor', ()=>{
    it('With no parameters',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBe(null);
    });

    it('With data parameter',() => {
        const stack:Stack<number> = new Stack<number>(1);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('With array parameter',() => {
        const array:number[] = [1,2];
        const stack:Stack<number> = new Stack<number>(array);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(2);
    });
});

describe('Push', () => {
    it('one element',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.push(1)).toBe(true);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it('four elements',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.size()).toBe(4);
        expect(stack.peek()).toBe(4);
    });
});

describe('Peek', () => {
    it('an element',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.peek()).toBe(null);
        stack.push(1);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    });

});

describe('Pop', () => {
    it('elements form stack',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.size()).toBe(0);
    });

    it('to empty stack',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.pop()).toBe(null);
    });
});

describe('Size', ()=>{
    it('Validate size',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
        stack.push(2);
        stack.push(3);
        expect(stack.size()).toBe(3);
        stack.pop();
        expect(stack.size()).toBe(2);
    });
});

describe('Clear', ()=>{
    it('Clear',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.clear();
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBe(null);
    });

    it('with empty',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.clear();
        expect(stack.peek()).toBe(null);
    });
});

describe('isEmpty', ()=>{
    it('is Empty',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });
});

describe('toArray', ()=>{
    it('to array',() => {
        const stack:Stack<number> = new Stack<number>();
        expect(stack.toArray()).toEqual([]);
        stack.push(1)
        expect(stack.toArray()).toEqual([1]);
        stack.push(2);
        stack.push(3);
        expect(stack.toArray()).toEqual([1,2,3]);
        expect(new Stack<number>(stack.toArray()).toArray()).toEqual([1,2,3]);
    });
});

describe('find', ()=>{
    it('Find',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.find((item)=>{
            return item === 2;
        })).toBe(2);
        

        expect(stack.find((item)=>{
            return item === 5;
        })).toBe(null);
    });
});

describe('Map', ()=>{
    it('number +1',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
  
        const mappedStackNumber:Stack<number> = stack.map((item)=>{
            return item + 1;
        });
        expect(mappedStackNumber.peek()).toBe(3);
    
    });

    it('number to object',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
  
        const mappedStackToObject:Stack<{item:number}> = stack.map((item)=>{
            return {item:item};
        });
        expect(mappedStackToObject.peek()).toEqual({item:2});
    });

    it('empty',() => {
        const stack:Stack<number> = new Stack<number>();
        const mappedStack:Stack<{item:number}> = stack.map((item)=>{
            return {item:item};
        });
        expect(mappedStack.size()).toBe(0);
        expect(mappedStack.peek()).toBe(null);
    });
});

describe('Reducer', ()=>{
    it('sum',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(10);
        const sum:number = stack.reduce((accumulator, item)=>{
            return accumulator + item;
        });
        expect(sum).toBe(13);
    });

    it('sum with initial value',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(10);
        const sum:number = stack.reduce((accumulator, item)=>{
            return accumulator + item;
        },7);
        expect(sum).toBe(20);
    });

    it('string',() => {
        const stack:Stack<string> = new Stack<string>();
        stack.push('world');
        stack.push('hello ');

        const sum:number = stack.reduce((accumulator, item)=>{
            return accumulator + item;
        });
        expect(sum).toBe('hello world');
    });

    it('string with initial value',() => {
        const stack:Stack<string> = new Stack<string>();
        stack.push('world');
        stack.push('hello ');
        

        const sum:number = stack.reduce((accumulator, item)=>{
            return accumulator + item;
        },'!');
        expect(sum).toBe('!hello world');
    });
});

describe('Filter', ()=>{

    it('numbers > 10',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(5);
        stack.push(10);
        stack.push(15);
        stack.push(20);
        const filteredStack:Stack<number> = stack.filter((data)=>{
            return data <= 10;
        });
        expect(filteredStack.size()).toBe(3);
        expect(filteredStack.peek()).toBe(10);
        expect(filteredStack.toArray()).toEqual([1,5,10]);
    });

    it('pairs numbers',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        const filteredStack:Stack<number> = stack.filter((data)=>{
            return data % 2 === 0;
        });
        expect(filteredStack.peek()).toBe(4);
        expect(filteredStack.toArray()).toEqual([2,4]);
    });  
});

describe('Some', ()=>{
    const stack:Stack<number> = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    it('> than 3',() => {  
        expect(stack.some((data)=>{
            return data > 3;
        })).toBe(true);
    });

    it('> than 5',() => {  
        expect(stack.some((data)=>{
            return data > 5;
        })).toBe(false);
    });
});

describe('Every', ()=>{
    const stack:Stack<number> = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    it('> than 0',() => {  
        expect(stack.every((data)=>{
            return data > 0;
        })).toBe(true);
    });

    it('< than 6',() => {  
        expect(stack.every((data)=>{
            return data < 6;
        })).toBe(false);
    });
});

describe('Clone', ()=>{
    it('clone',() => {
        const stack:Stack<number> = new Stack<number>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
  
        const clone:Stack<number> = stack.clone();
        expect(clone.size()).toBe(3);
        expect(clone.peek()).toBe(3);
    
    });

    it('empty',() => {
        const stack:Stack<number> = new Stack<number>();
        const clone:Stack<number> = stack.clone();
        expect(clone.size()).toBe(0);
        expect(clone.peek()).toBe(null);
    
    });
});