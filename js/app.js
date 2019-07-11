var board = [
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}],
  [{value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 1}, {value: 1}, {value: 1}],
  [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}],
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [,, {value: 1}, {value: 1}, {value: 1},,],
]

var generateCell = function(cell) {
  // initial html for button
  var html = '<button class="'
  // if cell has value=1 add class "peg"
  if(cell && cell.value) html += 'peg'
  // if cell has value=0 add class "hole"
  else if(cell && cell.value === 0) html += 'hole'
  // otherwise add class hidden
  else html += 'hidden'
  // close html button tag
  html += '"></button>'
  return html
}

var generateRow = function(row) {
  var html = '<div class="row">'
  for (var j = 0; j < row.length; j++) {
    html += generateCell(row[j])
  }
  html += '</div>'
  return html
}

var generateBoard = function() {
  var html = '<div class="row">'
  for (var i = 0; i < board.length; i++) {
    html += generateRow(board[i])
  }
  html += '</div>'
  console.log(html)
  return html
}

var init = function() {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
}

window.onload = init
