let MinStack = require('../src/QueuesStacks/MinStack');
let Node = require('../src/Helpers/Node');
let SetOfStacks = require('../src/QueuesStacks/SetOfStacks');
let MyQueue = require('../src/QueuesStacks/MyQueue');
let sortStack = require('../src/QueuesStacks/StackSort');

describe("Queues and Stack test suite", function() {
    describe("MinStack", function() {
        it("should keep the min properly", function() {
            let stack = new MinStack();
            expect(stack.getMin()).toBeNull();
            stack.push(new Node(10));
            expect(stack.getMin()).toEqual(10);
            stack.push(new Node(2));
            expect(stack.getMin()).toEqual(2);
            stack.push(new Node(6));
            expect(stack.getMin()).toEqual(2);
            stack.pop();
            stack.pop();
            expect(stack.getMin()).toEqual(10);
            stack.pop();
            expect(stack.getMin()).toBeNull();
        });
    });

    describe("Set of Stacks", function() {
        it("Should behave like we expect", function() {
            let oStacks = new SetOfStacks(3);
            oStacks.push(1);
            oStacks.push(2);
            oStacks.push(3);
            oStacks.push(4);
            expect(oStacks.pop()).toEqual(4);
            expect(oStacks.pop()).toEqual(3);
            expect(oStacks.pop()).toEqual(2);
            expect(oStacks.pop()).toEqual(1);
            expect(oStacks.pop()).toBeNull();
        });
    });

    describe("MyQueue", function() {
        it("should work as expected", function() {
            let q = new MyQueue();
            q.enq(1);
            q.enq(2);
            q.enq(3);

            expect(q.deq()).toEqual(1);
            q.enq(4);
            expect(q.deq()).toEqual(2);
            expect(q.deq()).toEqual(3);
            expect(q.deq()).toEqual(4);
        });
    });

    describe("Sort Stack with Stack", function() {
        fit("should sort in descending order", function() {
            let aStack = [1, 6, 2, 4];
            expect(sortStack(aStack)).toEqual([1,2,4,6]);
        });
    });
});