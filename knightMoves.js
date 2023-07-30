import gameBoard from "./gameBoard.js";

class knightMoves {
    constructor(startPos, endPos) {
        this.gameBoard = new gameBoard();
        this.startNode = this.gameBoard.createKnight(startPos);
        this.endPos = endPos;
        this.directions = [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1]
        ];
    }

    findShortestPath() {
        const startNode = this.startNode;
        const endNode = this.gameBoard.getBoardElement(this.endPos);
        this.addPossibleMovements();

        let queue = [startNode];
        
        while (queue.length > 0) {
            let activeNode = queue.shift();

            for (let neighbourNode of activeNode.neighbours) {
                if (neighbourNode.visited === false) {
                    neighbourNode.visited = true;
                    queue.push(neighbourNode);

                    neighbourNode.previousNode = activeNode;
                    if (neighbourNode === endNode) {
                        break;
                    }
                }
            }
        }
        const path = this.returnPathArray(endNode);
        path.push(startNode);

        return path.reverse();
    }

    returnPathArray(endNode) {
        const path = [];
        let activeNode = endNode;

        while (activeNode.previousNode !== null) {
            path.push(activeNode);
            activeNode = activeNode.previousNode;
        }

        return path;
    }

    addPossibleMovements() {
        for (let gameBoardNode of this.gameBoard.board) {
            for (let direction of this.directions) {
                const row = gameBoardNode.position[0] + direction[0];
                const column = gameBoardNode.position[1] + direction[1];

                if (row >= 0 && row <= 7 && column >= 0 && column <= 7) {
                    const nextNode = this.gameBoard.getBoardElement([row, column]);
                    
                    if (gameBoardNode.neighbours.includes(nextNode) === false) {
                        gameBoardNode.neighbours.push(nextNode);
                    }
                }
            }
        }
    }
}

const moves = new knightMoves([3, 3], [0, 0]);
console.log(moves.findShortestPath());