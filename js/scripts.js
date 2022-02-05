// Function called whenever user tab on any box.
// Função chamada quando o jogar clicar em alguma grade.
function playGame() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9
  b1 = document.getElementById('b1').value
  b2 = document.getElementById('b2').value
  b3 = document.getElementById('b3').value
  b4 = document.getElementById('b4').value
  b5 = document.getElementById('b5').value
  b6 = document.getElementById('b6').value
  b7 = document.getElementById('b7').value
  b8 = document.getElementById('b8').value
  b9 = document.getElementById('b9').value
}

turn = 1
function jogar(botaoApertado) {
  let var a = botaoApertado
  if (turn == 1) {
    document.getElementById(botaoApertado).value = 'X'
    document.getElementById(botaoApertado).disable = true
    turn = 0
  } else {
    document.getElementById(botaoApertado).value = '0'
    document.getElementById(botaoApertado).disable = true
    turn = 1
  }
}
