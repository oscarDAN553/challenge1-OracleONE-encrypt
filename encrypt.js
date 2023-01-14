let valor;
let encriptado;
let desencriptado;
let btnExist = false;
const pattern = /[ai]/gi;
const campo = document.querySelector(".respuesta")
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
let botonCopiar;
function obtenerTexto() {
   valor = document.getElementById("texto").value;
}

function encriptarTexto() {
    obtenerTexto();
    //let rowtext = valor.value;
    let modificado= [];
    //let separado = rowtext.split("");
    for (let index = 0; index < valor.length; index++) {
        //console.log(rowtext[index]);

        switch (valor[index]) {
            case "a":
                modificado.push("ai");
                break;
            case "e":
                modificado.push("enter");
                break;
            case "i":
                modificado.push("imes");
                break;
            case "o":
                modificado.push("ober");
                break;
            case "u":
                modificado.push("ufat");
                break;
            default:
                modificado.push(valor[index]);
                break;
        }
    }
    encriptado = modificado.join("");
}
function mostrarTextoEncriptado() {
    encriptarTexto();
    document.getElementById("placeholder").style.display = "none";
    document.querySelector("#mensajeEncriptado").innerHTML = encriptado;
    if (!btnExist) {
        crearBoton();
    }
     botonCopiar = document.querySelector("#copiar");
     botonCopiar.onclick = copiarTextoEncriptado;
}

function crearBoton(){
    let btnCopiar =  document.createElement("input");
    btnCopiar.type = "button";
    btnCopiar.className = "boton";
    btnCopiar.value = "Copiar";
    btnCopiar.id = "copiar";
    campo.appendChild(btnCopiar);
    btnExist = true;
}
function copiarTextoEncriptado(){
    let textCopy = document.getElementById("mensajeEncriptado").value;
    console.log(textCopy);
    navigator.clipboard.writeText(textCopy).then(()=>{
        alert("copiado en el portapapeles");
    })
}

function desencriptarTexto(){
    obtenerTexto();

    desencriptado = valor.replaceAll("ufat", "u");
    desencriptado = desencriptado.replaceAll("enter", "e");
    desencriptado = desencriptado.replaceAll("imes", "i");
    desencriptado = desencriptado.replaceAll("ober", "o");
    desencriptado = desencriptado.replaceAll("ai", "a");
    console.log(desencriptado);
        //let separado = valor.split("a");
    /*
    
    const texto = valor.match(pattern); 
    console.log(texto);

    texto.forEach(element => {
        modificado = valor.replaceAll(element, "a");
        console.log(modificado);
    });
    */
}
function mostraTextoDesencriptado(params) {
    desencriptarTexto();
    document.getElementById("placeholder").style.display = "none";
    document.querySelector("#mensajeEncriptado").innerHTML = desencriptado;
}


botonEncriptar.onclick = mostrarTextoEncriptado;
botonDesencriptar.onclick = mostraTextoDesencriptado;


/*
    //no funciona: las llaves contienen las vocales a modificar y se retroalimenta
        const texto = rowtext.match(pattern); 
    console.log(texto);

    texto.forEach(element => {
        if(element == "a"){
            encryptado = rowtext.replaceAll(element, "ai");
        } 
        if(element == "e"){
            encryptado = rowtext.replaceAll(element, "enter");
        }
        if(element == "i"){
            encryptado = rowtext.replaceAll(element, "imes");
        }
        if(element == "o"){
            encryptado = rowtext.replaceAll(element, "ober");
        }
        if(element == "u"){
            encryptado = rowtext.replaceAll(element, "ufat");
        }
    });
*/