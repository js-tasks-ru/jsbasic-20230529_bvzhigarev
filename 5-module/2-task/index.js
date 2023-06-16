function toggleText() {
  let element = document.getElementById( "text" );
  document.querySelector( ".toggle-text-button" ).onclick = () => {
    if( element.getAttribute( "hidden" ) ) {
      element.removeAttribute( "hidden" );
    } else {
      element.setAttribute( "hidden", true );
    };
  };
}