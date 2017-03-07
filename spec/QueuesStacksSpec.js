let MinStack = require('../src/QueuesStacks/MinStack');
let Node = require('../src/Helpers/Node');

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
});