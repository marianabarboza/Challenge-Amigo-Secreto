//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosJogo = []; //Lista para armazenar os amigos
const Limite_de_amigos = 5; //adicionado o limite de amigos no jogo

function adicionarAmigo() {
    let inputElemento = document.querySelector ("#amigo"); //inclui o nome na tela
    let listaElemento = document.querySelector ("#listaAmigos"); //inclui o nome na lista na tela
    let novoAmigo = inputElemento.value.trim(); //remove espaçoes extras no início e no fim do nome

    //verificar se o campo está vazio
    if (novoAmigo === "") {
        alert ("Insira um nome válido");
        return;
    }

    //verificar se o nome do amigo já consta na lista
    if (listaDeAmigosJogo.some(amigo => amigo.toLowerCase() === novoAmigo.toLowerCase())) {
        alert ("Este amigo já está na lista!");
        inputElemento.value = "";
        return;
    }
    
    //verifica se atingiu o número máximo de amigos
    if (listaDeAmigosJogo.length >= Limite_de_amigos) {
        alert ("Você atingiu o número máximo de jogadores.");
        inputElemento.value = "";
        return;
    }

    //adicionar o amigo e limpar campo em tela
    listaDeAmigosJogo.push(novoAmigo);
    inputElemento.value="";

    //aparece a lista na tela
    atualizarLista (listaElemento);
}

//atualiza a lista para ser exibida
function atualizarLista (listaElemento){
    listaElemento.innerHTML = "";
for (let i = 0; i < listaDeAmigosJogo.length; i++) { //percorre a lsita de amigos
    let item = document.createElement("li"); //adicionar um amigo na lista
    item.textContent = listaDeAmigosJogo[i]; //para saber a posição do amigo na lista
    listaElemento.appendChild (item);} //adiciona um novo amigo
}

// Verificar se há amigos na lista
function sortearAmigo() {
    if (listaDeAmigosJogo.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

// Gerar um índice aleatório para o sorteio
let indiceAleatorio = Math.floor(Math.random() * listaDeAmigosJogo.length);

// Utilizar o nome do amigo sorteado
let amigoSorteado = listaDeAmigosJogo[indiceAleatorio];

// Exibir o nome sorteado na tela
document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
