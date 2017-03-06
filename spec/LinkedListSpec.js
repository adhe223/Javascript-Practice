let LinkedListNode = require('../src/Helpers/LinkedListNode');
let removeDuplicates = require('../src/LinkedLists/RemoveDuplicates');

describe("Remove duplicates", function() {
    it("should remove duplicate values from a linked list", function() {
        let oHead = new LinkedListNode(1);
        oHead.next = new LinkedListNode(2);
        oHead.next.next = new LinkedListNode(2);
        oHead.next.next.next = new LinkedListNode(3);

        let oResult = removeDuplicates(oHead);
        expect(oResult.value).toEqual(1);
        expect(oResult.next.value).toEqual(2);
        expect(oResult.next.next.value).toEqual(3);
    });
});