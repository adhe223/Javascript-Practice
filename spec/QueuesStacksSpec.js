let MinStack = require('../src/QueuesStacks/MinStack');
let Node = require('../src/Helpers/Node');
let SetOfStacks = require('../src/QueuesStacks/SetOfStacks');

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
});