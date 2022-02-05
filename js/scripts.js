// Function called whenever user tab on any box.
// Função chamada quando o jogar clicar em alguma grade.
function playGame() {
  let botao1, botao2, botao3, b4, b5, b6, b7, b8, b9
  botao1 = document.getElementById('botao1').value
  botao2 = document.getElementById('botao2').value
  botao3 = document.getElementById('b3').value
  b4 = document.getElementById('b4').value
  b5 = document.getElementById('b5').value
  b6 = document.getElementById('b6').value
  b7 = document.getElementById('b7').value
  b8 = document.getElementById('b8').value
  b9 = document.getElementById('b9').value
}

// Turno = 1 / Turno do jogador X
// Turno = 0 / Turno do jogador O
turn = 1

// Função que estou tentando implementar que vai verificar qual input
function jogar(botaoApertado) {
  let botaoApertadoNovo = botaoApertado

  if (turn == 1) {
    document.getElementById(botaoApertadoNovo).value = 'X'
    document.getElementById(botaoApertadoNovo).disable = true
    console.log(`Coloquei X e desabilitei o botão ${botaoApertadoNovo}`)
    console.log(document.getElementById(botaoApertadoNovo).disable)
    turn = 0
  } else {
    document.getElementById(botaoApertadoNovo).value = '0'
    document.getElementById(botaoApertadoNovo).disable = true
    console.log(`Coloquei O e desabilitei o botão ${botaoApertadoNovo}`)
    console.log(document.getElementById(botaoApertadoNovo).disable)
    turn = 1
  }
}

// Função que restarta o jogo
// Function to restart game
function restartGame() {
  console.log(`teste`)
  //playGame()
  location.reload()
  document.getElementById('botao1').value = ''
}
