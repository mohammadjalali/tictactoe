export function TicTacToe() {
    this.board = [...Array(3)].map(e => Array(3).fill(''))
    this.current_player = Piece.o
    this.status = Status_.PLAY
}

TicTacToe.prototype.insert_piece = function(row, column) {
    if (this.board[row][column] !== ''){
        throw new ReferenceError("This area was played, play another area")
    }

    if(this.check_status() === Status_.WIN){
        this.status = Status_.WIN
        return `${this.current_player} won`
    }

    if(this.check_status() === Status_.DRAW){
        this.status = Status_.DRAW
        return `You draw!`
    }
    
    this.board[row][column] = this.change_turn()
}

TicTacToe.prototype.change_turn = function() {
    return this.current_player === Piece.o ? Piece.x : Piece.o
}

TicTacToe.prototype.check_status = function() {
    // Check for a win
    for (let i = 0; i < 3; i++) {
        // Check rows
        if (this.board[i][0] === this.current_player &&
            this.board[i][1] === this.current_player &&
            this.board[i][2] === this.current_player) {
            return Status_.WIN;
        }
        // Check columns
        if (this.board[0][i] === this.current_player &&
            this.board[1][i] === this.current_player &&
            this.board[2][i] === this.current_player) {
            return Status_.WIN;
        }
    }
    // Check diagonals
    if (this.board[0][0] === this.current_player &&
        this.board[1][1] === this.current_player &&
        this.board[2][2] === this.current_player) {
        return Status_.WIN;
    }
    if (this.board[0][2] === this.current_player &&
        this.board[1][1] === this.current_player &&
        this.board[2][0] === this.current_player) {
        return Status_.WIN;
    }
    // Check for a draw
    let emptyCells = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (this.board[i][j] === "") {
                emptyCells++;
            }
        }
    }
    if (emptyCells === 0) {
        return Status_.DRAW;
    }
    return Status_.PLAY;
};

export const Piece = {
    x: "X",
    o: "O"
}

export const Status_ = {
    WIN: "WIN",
    DRAW: "DRAW",
    PLAY: "PLAY"
}