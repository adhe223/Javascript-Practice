let isRoute = require('../src/Graphs/IsRoute');
let Node = require('../src/Helpers/Node');

describe("Graphs test suite", function() {
    describe("IsRoute", function() {
        it("should determine there is a route", function() {
            let a = new Node("A");
            let b = new Node("B");
            let c = new Node("C");
            let d = new Node("D");
            let e = new Node("E");
            a.adjacents.push(b);
            a.adjacents.push(c);
            c.adjacents.push(d);
            d.adjacents.push(e);

            expect(isRoute(a, e)).toEqual(true);
        });

        it("should determine there is not a route", function() {
            let a = new Node("A");
            let b = new Node("B");
            let c = new Node("C");
            let d = new Node("D");
            let e = new Node("E");
            a.adjacents.push(b);
            a.adjacents.push(c);
            c.adjacents.push(d);

            expect(isRoute(a, e)).toEqual(false);
        });
    });
});