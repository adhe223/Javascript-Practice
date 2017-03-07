let LinkedListNode = require('../src/Helpers/LinkedListNode');
let removeDuplicates = require('../src/LinkedLists/RemoveDuplicates');

describe("Remove duplicates", function() {
    it("should remove duplicate values from a linked list", function() {
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