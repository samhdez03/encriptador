let contenedorPsyduck = document.getElementById("contenedorPsyduck");
let contenedorTexto = document.getElementById("contenedorTexto");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let botonCopiar = document.getElementById("copiar");

function encriptar(texto){
    let textoEncriptado = texto
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
    return textoEncriptado;
}
function desencriptar(texto){
    let textoEncriptado = texto
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll( 'ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
    return textoEncriptado;
}

botonEncriptar.addEventListener("click", function() {
    let textoIngresado = document.getElementById("texto").value;
    contenedorPsyduck.innerHTML = '';
    contenedorTexto.className = "contenedorTextoMostrar";
    let textoMostrar = document.getElementById("textoMostrar");
    textoMostrar.innerHTML = `
    <p id="textoCopiar">${encriptar(textoIngresado)}</p>  `;

})
botonDesencriptar.addEventListener("click", function() {
    let textoIngresado = document.getElementById("texto").value;
    contenedorPsyduck.innerHTML = '';
    contenedorTexto.className = "contenedorTextoMostrar";
    let textoMostrar = document.getElementById("textoMostrar");
    textoMostrar.innerHTML = `
    <p id="textoCopiar">${desencriptar(textoIngresado)}</p>  `;
})


document.getElementById("copiar").addEventListener("click", async event => {
    let textoCopiar = document.getElementById("textoCopiar").innerHTML;
    try {
      let text = await navigator.clipboard.writeText(textoCopiar);
      alert('Texto copiado al portapapeles')
    } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
    }
  });
