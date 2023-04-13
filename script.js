const contactos = [];

//Se crea una funcion para agregar un contacto

function AgregarContacto() {
  let nombre = document.getElementById("nombreA").value;
  let direccion = document.getElementById("direccionA").value;
  let telefono = document.getElementById("telefonoA").value;
  let email = document.getElementById("emailA").value;

  contactos.push({
    nombre,
    direccion,
    telefono,
    email,
  });

  //quitamos los datos ingresados para que se puedan agregar mas  datos
  document.getElementById("nombreA").value = "";
  document.getElementById("direccionA").value = "";
  document.getElementById("telefonoA").value = "";
  document.getElementById("emailA").value = "";

  //Se agrega a la lista de elementos
  var listaContacto = document.getElementById("contactos");

  const newItemList = document.createElement("li");
  let texto = document.createTextNode(
    nombre + "'" + direccion + "'" + telefono + "'" + email
  );
  newItemList.appendChild(texto);
  listaContacto.appendChild(newItemList);
  window.alert("Se creo el contacto correctamente");
}

function EliminaContacto() {
  let nombre = document.getElementById("nombreE").value;
  let direccion = document.getElementById("direccionE").value;
  let telefono = document.getElementById("telefonoE").value;
  let email = document.getElementById("emailE").value;
  console.log(contactos);
  let positionToErase = -1;

  for (let i = 0; i < contactos.length; i++) {
    const data = contactos[i];
    if (
      data.nombre === nombre &&
      data.direccion === direccion &&
      data.telefono === telefono &&
      data.email === email
    ) {
      positionToErase = i;
      break;
    }
  }
  if (positionToErase !== -1) {
    contactos.slice(positionToErase, 1);
    let lista = document.getElementById("contactos");
    let element = lista.children[positionToErase];
    element.remove();
    window.alert("Se elimino con exito");
  } else window.alert("El registro no existia");

  document.getElementById("nombreE").value = "";
  document.getElementById("direccionE").value = "";
  document.getElementById("telefonoE").value = "";
  document.getElementById("emailE").value = "";
}

function MostrarContactos() {
  //Se mostraran los contactos en forma de tabla
  let lista = document.getElementById("contactos");

  //se crea la tabla
  let tabla = document.createElement("table");
  let cabecera = tabla.createTHead();
  let filaCabecera1 = cabecera.insertRow();
  let columnaCabecera = filaCabecera1.insertCell();

  columnaCabecera.innerHTML = "<b>Elementos de la lista</b>";

  let filaCabecera = cabecera.insertRow();
  let encabezadoNombre = document.createElement("th");
  let encabezadoDireccion = document.createElement("th");
  let encabezadoTelefono = document.createElement("th");
  let encabezadoEmail = document.createElement("th");

  encabezadoNombre.textContent = "NOMBRE";
  encabezadoDireccion.textContent = "DIRECCION";
  encabezadoTelefono.textContent = "TELEFONO";
  encabezadoEmail.textContent = "EMAIL";
  filaCabecera.appendChild(encabezadoNombre);
  filaCabecera.appendChild(encabezadoDireccion);
  filaCabecera.appendChild(encabezadoTelefono);
  filaCabecera.appendChild(encabezadoEmail);
  cabecera.appendChild(filaCabecera);
  tabla.insertBefore(cabecera, tabla.firstChild);

  let cuerpoTabla = tabla.createTBody();

  for (let i = 0; i < lista.children.length; i++) {
    let filaTabla = cuerpoTabla.insertRow();
    const cadenas = lista.children[i].textContent;
    const word = cadenas.split("'");
    console.log(word.length);

    for (let j = 0; j < word.length; j++) {
      columnaTabla = filaTabla.insertCell();
      columnaTabla.innerHTML = word[j];
    }
  }
  document.body.appendChild(tabla);
}

function EliminarLista() {
  let lista = document.getElementById("contactos");
  while (contactos.length > 0) {
    contactos.shift();
    let element = lista.children[0];
    element.remove();
  }
  window.alert("Se elimino con exito la lista");
}

function MostrarAgregar() {
  document.getElementById("agregar").style.display = "block";
  document.getElementById("eliminar").style.display = "none";
}

function MostrarEliminar() {
  document.getElementById("eliminar").style.display = "block";
  document.getElementById("agregar").style.display = "none";
}

function MostrarLink() {
  document.getElementById("codigo").style.display = "block";
}
