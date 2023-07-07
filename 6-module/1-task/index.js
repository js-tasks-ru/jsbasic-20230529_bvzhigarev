export default class UserTable {
  constructor( rows) {
    this.rows = rows;
    this.render();
  }
  render() {
    this.elem = document.createElement( "TABLE" );
    this.elem.innerHTML =
      `<thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>`;
    const tableData = this.rows.map( row => {
      return (
        `<tr>
           <td>${row.name}</td>
           <td>${row.age}</td>
           <td>${row.salary}</td>
           <td>${row.city}</td>
           <td><button>X</button></td>
        </tr>`
      );
    } ).join( '' );
    this.elem.querySelector( "TBODY" ).innerHTML = tableData;
    this.elem.addEventListener( "click", event => {
      if( event.target.nodeName === "BUTTON" ) {
        event.target.closest("TR").remove();
      }
    } );
  }
}