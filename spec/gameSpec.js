describe("Jogo da Velha", function() {
  beforeEach(function() {
    resetBoard();
  });

  it("deve iniciar com o tabuleiro vazio", function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        expect(board[i][j]).toBe('');
      }
    }
  });

  it("deve permitir que um jogador faça uma jogada", function() {
    makeMove({ innerHTML: '' }, 0, 0);
    expect(board[0][0]).toBe('X');
  });

  it("deve alternar jogadores", function() {
    makeMove({ innerHTML: '' }, 0, 0);
    expect(currentPlayer).toBe('O');
    makeMove({ innerHTML: '' }, 0, 1);
    expect(currentPlayer).toBe('X');
  });

  it("deve detectar um vencedor", function() {
    board[0] = ['X', 'X', ''];
    makeMove({ innerHTML: '' }, 0, 2);
    expect(checkWinner()).toBe(true);
  });

  it("deve detectar se o tabuleiro está cheio", function() {
    board[0] = ['X', 'O', 'X'];
    board[1] = ['X', 'O', 'O'];
    board[2] = ['O', 'X', 'X'];
    expect(isBoardFull()).toBe(true);
  });
});
