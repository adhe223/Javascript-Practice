function Node(val) {
    this.value = val;
    this.adjacents = [];
    this.visited = false;
}

module.exports = Node;