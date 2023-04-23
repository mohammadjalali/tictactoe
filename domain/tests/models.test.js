import { TicTacToe, piece, status_ } from "../models";

test("test board is made correctly", () => {
    // Arrange
    const board = [['', '', ''],
             ['', '', ''], 
             ['', '', '']];
    // Act
    const tic_tac_toe = new TicTacToe();

    // Assert
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            expect(tic_tac_toe.board[i][j]).toBe(board[i][j]);
        }
    }
});


test("test pieces insert in the right place", () => {
    // Arrange
    const row = 1
    const column = 1

    // Act
    const tic_tac_toe = new TicTacToe()
    tic_tac_toe.insert_piece(row, column)

    // Assert
    expect(tic_tac_toe.board[row][column]).toBe(piece.x)

})

test("test raise error over a play want to play a played area", () => {
    // Arrange
    const row = 0
    const column = 0
    const tic_tac_toe = new TicTacToe()
    tic_tac_toe.insert_piece(row, column)

    // Act
    const invalid_insertion = () => tic_tac_toe.insert_piece(row, column)

    // Assert
    expect(invalid_insertion).toThrow(ReferenceError)
})

test("test game is win when there is same three pieces", () => {
    // Arrange, Act
    const tic_tac_toe = new TicTacToe()
    tic_tac_toe.board = [[piece.o, piece.o, piece.o],
                        ['', '', ''],
                        ['', '', '']]
    
    // Assert
    expect(tic_tac_toe.check_status()).toBe(status_.WIN)
})

test("test game is draw when no three piece match", () => {
    // Arrange, Act
    const tic_tac_toe = new TicTacToe()
    tic_tac_toe.board = [[piece.x, piece.o, piece.x],
                        [piece.o, piece.x, piece.o], 
                        [piece.o, piece.x, piece.o]]
    
    // Assert
    expect(tic_tac_toe.check_status()).toBe(status_.DRAW)
})

test("test game is palying when an area is empty", () => {
    // Arrange, Act
    const tic_tac_toe = new TicTacToe()
    tic_tac_toe.board = [[piece.x, piece.o, piece.x],
                        [piece.o, piece.x, piece.o], 
                        [piece.o, piece.x, ""]]
    
    // Assert
    expect(tic_tac_toe.check_status()).toBe(status_.PLAY)
})