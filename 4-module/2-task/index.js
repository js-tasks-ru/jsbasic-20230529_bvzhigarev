function makeDiagonalRed(table) {
  for(let i = 0; i <= 4; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
}