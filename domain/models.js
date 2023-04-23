export function TicTacToe() {
    this.board = [...Array(3)].map(e => Array(3).fill(''))
    this.current_player = piece.o
    this.status = status_.PLAY
}

TicTacToe.prototype.insert_piece = function(row, column) {
    if (this.board[row][column] !== ''){
        throw new ReferenceError("This area was played, play another area")
    }

    if(this.check_status() === status_.WIN){
        this.status = status_.WIN
        return `${this.current_player} won`
    }

    if(this.check_status() === status_.DRAW){
        this.status = status_.DRAW
        return `You draw!`
    }
    
    this.board[row][column] = this.change_turn()
}

TicTacToe.prototype.change_turn = function() {
    return this.current_player === piece.o ? piece.x : piece.o
}

TicTacToe.prototype.check_status = function() {
    // Check for a win
    for (let i = 0; i < 3; i++) {
        // Check rows
        if (this.board[i][0] === this.current_player &&
            this.board[i][1] === this.current_player &&
            this.board[i][2] === this.current_player) {
            return status_.WIN;
        }
        // Check columns
        if (this.board[0][i] === this.current_player &&
            this.board[1][i] === this.current_player &&
            this.board[2][i] === this.current_player) {
            return status_.WIN;
        }
    }
    // Check diagonals
    if (this.board[0][0] === this.current_player &&
        this.board[1][1] === this.current_player &&
        this.board[2][2] === this.current_player) {
        return status_.WIN;
    }
    if (this.board[0][2] === this.current_player &&
        this.board[1][1] === this.current_player &&
        this.board[2][0] === this.current_player) {
        return status_.WIN;
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
        return status_.DRAW;
    }
    return status_.PLAY;
};

export const piece = {
    x: "X",
    o: "O"
}

export const status_ = {
    WIN: "WIN",
    DRAW: "DRAW",
    PLAY: "PLAY"
}