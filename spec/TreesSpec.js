let BTNode = require('../src/Helpers/BTNode');
let InOrder = require('../src/Trees/InOrder');

describe("Trees test suite", function() {
   describe("InOrder traversal", function() {
       it("should print in the correct order", function() {
           let head = new BTNode("5");
           head.left = new BTNode("3");
           head.left.left = new BTNode("1");
           head.left.right = new BTNode("4");
           head.right = new BTNode("7");
           head.right.left = new BTNode("6");

           let traverser = new InOrder(head);
           traverser.runTraversal();
           expect(traverser.output).toEqual("134567");
       });
   });
});