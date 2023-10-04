
/* Este archivo usa una API para obtener los datos: name, blog y location.
 al obtener error llama a la funcion handleError y mostrar en el DOM que algo salio mal*/


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrega el punto de la clase name
const $b = document.querySelector('.blog');//se agrega el punto de la clase blog
const $l = document.querySelector('.location');

//ya que dentro de la funcion hay un await, quiere decir que es una funcion asincrona y se tiene que declarar
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  // Agregamos  "await response.json()" para esperar la respuesta del servidor y guardar la informacion en la constante "data"
  console.log(data);
  $n.textContent = data.name; //Se limpia la sintaxis
  $b.textContent = data.blog; //Se limpia la sintaxis
  $l.textContent = data.location; //Se limpia la sintaxis
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`// se agregó el "$" antes de la n, como esta definida antes.
}

displayUser('stolinski').catch(handleError);