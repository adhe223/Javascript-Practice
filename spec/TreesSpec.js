let BTNode = require('../src/Helpers/BTNode');
let DoublyLinkedNode = require('../src/Helpers/DoublyLinkedNode');
let InOrder = require('../src/Trees/InOrder');
let MinimalTreeCreator = require('../src/Trees/MinimalTreeCreator');
let DepthLinkedLists = require('../src/Trees/DepthLinkedLists');
let BalancedChecker = require('../src/Trees/BalancedChecker');
let IsBST = require('../src/Trees/IsBST');
let getNextNode = require('../src/Trees/NextNode');
let getFirstAncestor = require('../src/Trees/FirstCommonAncestor');
let getAllArrays = require('../src/Trees/AllPossibleArrays');
let isSubStree = require('../src/Trees/IsSubtree');
let CustomBST = require('../src/Trees/CustomBST');
let getLeastCommonAncestor = require('../src/Trees/LeastCommonAncestor');

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

    describe("Minimal tree creator", function() {
        it("should return a correct tree", function() {
            let arr = [1,2,3,4,5,6];
            let creator = new MinimalTreeCreator(arr);
            let result = creator.create();
            expect(result.value).toEqual(3);
            expect(result.left.value).toEqual(1);
            expect(result.left.right.value).toEqual(2);
            expect(result.right.value).toEqual(5);
            expect(result.right.left.value).toEqual(4);
            expect(result.right.right.value).toEqual(6);
        });
    });

    describe("Depth linked lists", function() {
        it("should create a linked list for each depth of a tree", function() {
            let tester = new DepthLinkedLists();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.left.left = new BTNode("1");
            head.left.right = new BTNode("4");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            let linkedLists = tester.getDepthLists(head);
            expect(linkedLists[0].value).toEqual("5");
            expect(linkedLists[1].value).toEqual("3");
            expect(linkedLists[1].next.value).toEqual("7");
            expect(linkedLists[2].value).toEqual("1");
            expect(linkedLists[2].next.value).toEqual("4");
            expect(linkedLists[2].next.next.value).toEqual("6");
        });
    });

    describe("Balanced tree checker", function() {
        let tester = new BalancedChecker();

        it("should return true for a balanced tree", function() {
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.left.left = new BTNode("1");
            head.left.right = new BTNode("4");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            let isBalanced = tester.isBalanced(head);
            expect(isBalanced).toEqual(true);
        });

        it("should return false for an ubalanced tree", function() {
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.right = new BTNode("7");
            head.right.right.right = new BTNode("7");
            head.right.left = new BTNode("6");
            head.right.left.left = new BTNode("4");

            let isBalanced = tester.isBalanced(head);
            expect(isBalanced).toEqual(false);
        });
    });

    describe("BST checker", function() {
        it("should return true fro a valid BST", function() {
            let tester = new IsBST();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            expect(tester.checkTree(head)).toEqual(true);
        });

        it("should return false for an invalid BST", function() {
            let tester = new IsBST();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.left = new BTNode("4");

            expect(tester.checkTree(head)).toEqual(false);
        });
    });

    describe("getNextNode", function() {
        it("should return the next in order node", function() {
            let head = new DoublyLinkedNode("5", null);
            head.left = new DoublyLinkedNode("3", head);
            head.right = new DoublyLinkedNode("6", head);
            head.right.right = new DoublyLinkedNode("8", head.right);
            head.left.left = new DoublyLinkedNode("1", head.left);
            head.left.right = new DoublyLinkedNode("4", head.left);

            expect(getNextNode(head.left).value).toEqual(head.left.right.value);
            expect(getNextNode(head).value).toEqual(head.left.left.value);
            expect(getNextNode(head.right).value).toEqual(head.right.right.value);
            expect(getNextNode(head.left).value).toEqual(head.left.right.value);
            expect(getNextNode(head.right.right)).toBeNull();
        });
    });

    describe("getFirstAncestor", function() {
        it("should return the first common ancestor of two given nodes on separate sides", function() {
            let head = new DoublyLinkedNode("5", null);
            head.left = new DoublyLinkedNode("3", head);
            head.right = new DoublyLinkedNode("6", head);
            head.right.right = new DoublyLinkedNode("8", head.right);
            head.left.left = new DoublyLinkedNode("1", head.left);
            head.left.left.right = new DoublyLinkedNode("9", head.left.left);
            head.left.right = new DoublyLinkedNode("4", head.left);

            expect(getFirstAncestor(head.left.left.right, head.right).value).toEqual("5");
        });

        it("should return the first common ancestor of two given nodes on the same side", function() {
            let head = new DoublyLinkedNode("5", null);
            head.left = new DoublyLinkedNode("3", head);
            head.right = new DoublyLinkedNode("6", head);
            head.right.right = new DoublyLinkedNode("8", head.right);
            head.left.left = new DoublyLinkedNode("1", head.left);
            head.left.left.right = new DoublyLinkedNode("9", head.left.left);
            head.left.right = new DoublyLinkedNode("4", head.left);

            expect(getFirstAncestor(head.left.left.right, head.left.right).value).toEqual("3");
        });
    });

    describe("get all possible arrays to build the tree", function() {
        it("should contain [2,1,3] and [2,3,1]", function() {
            let arrayContainsArray = require('../src/Helpers/ArrayContainsArray');
            let oHead = new BTNode(2);
            oHead.left = new BTNode(1);
            oHead.right = new BTNode(3);

            aPossible = getAllArrays(oHead);
            expect(arrayContainsArray([2,1,3], aPossible)).toEqual(true);
            expect(arrayContainsArray([2,3,1], aPossible)).toEqual(true);
        });
    });

    describe("Tree has subtree of given node", function() {
        it("should return true", function() {
            let oHead = new BTNode(1);
            oHead.left = new BTNode(2);
            oHead.right = new BTNode(3);
            oHead.right.left = new BTNode(4);
            oHead.right.right = new BTNode(5);

            let oHead2 = new BTNode(3);
            oHead2.left = new BTNode(4);
            oHead2.right = new BTNode(5);

            expect(isSubStree(oHead, oHead2)).toEqual(true);
        });

        it("should return false", function() {
            let oHead = new BTNode(1);
            oHead.left = new BTNode(2);
            oHead.right = new BTNode(3);
            oHead.right.left = new BTNode(4);
            oHead.right.right = new BTNode(5);

            let oHead2 = new BTNode(3);
            oHead2.left = new BTNode(4);
            oHead2.right = new BTNode(6);

            expect(isSubStree(oHead, oHead2)).toEqual(false);
        });
    });

    describe("Get random node", function() {
        it("should return a random node", function() {
            let oHead = new BTNode(1);
            oHead.left = new BTNode(2);
            oHead.right = new BTNode(3);
            oHead.right.left = new BTNode(4);
            oHead.right.right = new BTNode(5);

            //Check this one manually
            let oBST = new CustomBST(oHead);
            let oNode = oBST.getRandomNode();
        });
    });

    describe("Least common ancestor", function() {
        it("should get the ancestor node on opposite side", function() {
            let oHead = new BTNode(1);
            oHead.left = new BTNode(2);
            oHead.right = new BTNode(3);
            oHead.left.left = new BTNode(4);
            oHead.right.right = new BTNode(5);

            expect(getLeastCommonAncestor(oHead, oHead.left, oHead.right.right)).toBe(oHead);
        });

        it("should get the ancestor node on same side", function() {
            let oHead = new BTNode(1);
            oHead.left = new BTNode(2);
            oHead.right = new BTNode(3);
            oHead.left.left = new BTNode(4);
            oHead.left.right = new BTNode(5);

            expect(getLeastCommonAncestor(oHead, oHead.left.left, oHead.left.right)).toBe(oHead.left);
        });
    });
});