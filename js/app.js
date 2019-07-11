var board = [
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}],
  [{value: 1}, {value: 1}, {value: 1}, {value: 0}, {value: 1}, {value: 1}, {value: 1}],
  [{value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}, {value: 1}],
  [,, {value: 1}, {value: 1}, {value: 1},,],
  [,, {value: 1}, {value: 1}, {value: 1},,],
]

var selectedPeg = { x: undefined, y: undefined }

var generateCell = function(cell, rowN, colN) {
  // initial html for button with row and column position for id
  var html = '<button id="peg-'+rowN+'-'+colN+'" class="'
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

var generateRow = function(row, rowN) {
  var html = '<div class="row">'
  for (var j = 0; j < row.length; j++) {
    html += generateCell(row[j], rowN, j)
  }
  html += '</div>'
  return html
}

var generateBoard = function() {
  var html = '<div class="row">'
  for (var i = 0; i < board.length; i++) {
    html += generateRow(board[i], i)
  }
  html += '</div>'
  return html
}

var selectPeg = function(evt) {
  // Get selected html element from event
  var peg = evt.target
  // Parse row and column from element id
  var idParts = peg.id && peg.id.length
    ? peg.id.split('-') : []
  if(idParts.length === 3) {
    selectedPeg.x = idParts[1]
    selectedPeg.y = idParts[2]
    peg.className = 'selected'
  }
}

var addPegsEventHandlers = function(pegs) {
  for (var i = 0; i < pegs.length; i++) {
    pegs[i].onclick = selectPeg
  }
}

var init = function() {
  var boardElement = document.getElementById('board')
  boardElement.innerHTML = generateBoard()
  var pegs = boardElement.getElementsByClassName('peg')
  addPegsEventHandlers(pegs)
}

window.onload = init
