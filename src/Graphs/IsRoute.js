isRoute = function(start, destination) {
    let q = [];
    start.visited = true;
    q.push(start);

    while (q.length > 0) {
        let oNode = q.shift();
        oNode.visited = true;
        for (let i = 0; i < oNode.adjacents.length; i++) {
            let adjacent = oNode.adjacents[i];
            if (!adjacent.visited) {
                if (adjacent.value === destination.value) {
                    return true;
                }
                adjacent.visited = true;
                q.push(adjacent);
            }
        }
    }

    return false;
};

module.exports = isRoute;