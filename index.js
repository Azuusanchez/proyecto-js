
const contenedorId = document.querySelector("#contenedor");
console.log (contenedorId);

const parrafoBienvenido = document.querySelector ("#bienvenido");
console.log (parrafoBienvenido);

console.log (pokemon.pokemon);

const tarjetasHtml = pokemon.pokemon.reduce ((acc, elemento)=> {
    return acc + `
    <div class= "tarjeta">
    <div class= "img-container">
    <img src= ${elemento.img} alt = ${elemento.name}>
    </div>
    <p> ${elemento.name}
    </p>
    </div>
    `

}, "")
console.log (tarjetasHtml);

const tarjetas = document.querySelector(".tarjetas-poke")

tarjetas.innerHTML = tarjetasHtml

parrafoBienvenido.innerHTML= "Bienvenidos a mis imagenes de Pokemon !"