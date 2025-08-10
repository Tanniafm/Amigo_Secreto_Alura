let amigo = document.getElementById('amigo');
let listaDeAmigos = [];
let panelListaAmigos = document.getElementById('listaAmigos');//mostrar lista de amigos en etiqueta ul


function agregarAmigo(){
    let nombreAmigo = amigo.value;
    if(nombreAmigo === ''){
        alert("El campo nombre está vacío, porfavor ingresa un nombre");
        return;
    }else if(!isNaN(nombreAmigo)){
        alert("Debes ingresar un nombre válido (sólo letras)");
        return;
    }else if (listaDeAmigos.includes(nombreAmigo)) { 
        alert("Este nombre ya ha sido ingresado");
        return;
    } else{
        listaDeAmigos.push(nombreAmigo);
        panelListaAmigos.innerHTML = panelListaAmigos.innerHTML + `<li>${nombreAmigo}</li>`;
        limpiarCampoNombre();
        return;
    }   
};

function sortearAmigo(){
    if(listaDeAmigos.length=== 0){
        alert("La lista está vacía, debes ingresar amigos para sortear");
        return;
    }else if(listaDeAmigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para sortear");
        return;
    }else {
        let posicionAleatoria = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[posicionAleatoria];
        alert(`El amigo secreto sorteado es ${amigoSorteado}`);
        limpiarLista();
        return;
    };
    }
function limpiarLista(){
    listaDeAmigos = []; 
    panelListaAmigos.innerHTML = '';
}

function limpiarCampoNombre(){ 
    document.getElementById('amigo').value='';
}    


