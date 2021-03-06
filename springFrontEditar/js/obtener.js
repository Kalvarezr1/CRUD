//agregar código
fetch("api/cohorte/all")
  .then((respose) => respose.json())
  .then((datos) => {
    //console.log(datos);
    datos.forEach((el) => {
      if (el === null) {
        el = "";
      } else {
        const elementos = document.getElementById("tabla");

        const element = document.createElement("tr");

        element.innerHTML = `
            <td>${el.id}</td>
            <td>${el.ciudad}</td>
            <td>${el.numeroCohorte}</td>
            <td><button id="${el.id}" class="btn btn-danger"
            name="eliminar">Eliminar</button>
            `;

        elementos.appendChild(element);
      }
    });
  });

document.getElementById("tabla").addEventListener("click", function (e) {
  borrar(e.target);
});
function borrar(elemento) {
  const fila = elemento.parentElement.parentElement;

  console.log(fila);

  if (elemento.name === "eliminar") {
    document.getElementById("tabla").deleteRow(fila.rowIndex);
    fetch("api/cohorte/delete/" + elemento.id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    //console.log(elemento.id);
  }
}
