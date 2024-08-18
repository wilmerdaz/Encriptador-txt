function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi,"wwss")
        .replace(/u/gi,"iass")
        .replace(/o/gi,"dfss")
        .replace(/a/gi,"sty");

    if(texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar"
        swal("Ooops!", "debes ingresar un texto", "warning");
    }
}
 
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
   
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/wwss/gi,"i")
        .replace(/iass/gi,"u")
        .replace(/dfss/gi,"o")
        .replace(/sty/gi,"a");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muñeco.src = "./img/desencriptado.jpg";  
        } else {
            muñeco.src = "./img/encriptado.jpg";
            tituloMensaje.textContent = "ningun mensaje fue encontrado";
            parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar"
            swal("Ooops!", "debes ingresar un texto", "warning");    
        }

}