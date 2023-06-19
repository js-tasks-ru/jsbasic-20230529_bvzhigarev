function toggleText() {
  let element = document.getElementById( "text" );
  document.querySelector( ".toggle-text-button" ).addEventListener( "click", () => {
    element.hidden = !element.hidden;
  });
}