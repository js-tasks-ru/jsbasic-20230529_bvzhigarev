function highlight( table ) {
  const genders = {
    m : "male",
    f : "female"
  }
  for( let i = 1; i < table.rows.length; i++ ) {
    let row = table.rows[i];
    console.log( row.cells[3].getAttribute( "data-available" ), i ); 
    if( parseInt( row.cells[1].textContent ) < 18 ) {
      row.style.textDecoration = "line-through";
    }
    if( row.cells[3].getAttribute( "data-available" ) === 'true') {
      row.classList.add( "available" ); 
    } else {
      row.classList.add( "unavailable" );
    }
    row.classList.add( genders[row.cells[2].textContent] );
    if( row.cells[3].getAttribute( "data-available" ) == undefined ) {
      row.setAttribute( "hidden", true );
    }
    console.log( "available", row.classList.contains( "available" ), "unavailable", row.classList.contains( "available" ) );
  }
}