let LinkedListNode = require('../src/Helpers/LinkedListNode');
let removeDuplicates = require('../src/LinkedLists/RemoveDuplicates');
let getKthToLastNode = require('../src/LinkedLists/kthToLast');

describe("Linked list test suite", function() {
    describe("Remove duplicates", function () {
        it("should remove duplicate values from a linked list", function () {
            let oHead = new LinkedListNode(1);
            oHead.next = new LinkedListNode(2);
            oHead.next.next = new LinkedListNode(2);
            oHead.next.next.next = new LinkedListNode(3);

            removeDuplicates(oHead);
            expect(oHead.value).toEqual(1);
            expect(oHead.next.value).toEqual(2);
            expect(oHead.next.next.value).toEqual(3);
        });
    });

    describe("Get kth to last node", function() {
        it("should return 4 for 1-2-3-4-5 with k=2", function() {
            let oHead = new LinkedListNode(1);
            oHead.next = new LinkedListNode(2);
            oHead.next.next = new LinkedListNode(3);
            oHead.next.next.next = new LinkedListNode(4);
            oHead.next.next.next.next = new LinkedListNode(5);

            expect(getKthToLastNode(oHead, 2).value).toEqual(oHead.next.next.next.value);
        });
    });
});