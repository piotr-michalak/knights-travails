class Node {
    constructor(startPos) {
        this.position = startPos;
        this.neighbours = [];
        this.visited = false;
        this.previousNode = null;
    }
}

export default Node;