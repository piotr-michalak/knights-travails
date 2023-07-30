import Node from "./node.js";

class gameBoard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const node = new Node([i, j]);
                board.push(node);
            }
        }

        return board;
    }

    createKnight(startPos) {
        const knight = this.getBoardElement(startPos);
        knight.visited = true;

        return knight;
    }

    getBoardElement(position) {
        for (let boardElement of this.board) {
            if (boardElement.position[0] === position[0] && boardElement.position[1] === position[1]) {
                return boardElement;
            }
        }
    }
}

export default gameBoard;