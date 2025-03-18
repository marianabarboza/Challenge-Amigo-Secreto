# **Jogo do Amigo Secreto**

O objetivo do projeto é desenvolver habilidades em lógica de programação, criando um sistema simples para sortear o jogo do amigo secreto.

## Como funciona

1. Insira os nomes dos participantes.
2. O sistema verifica se o nome é válido e se já está na lista.
3. Se tudo estiver correto, o nome é adicionado à lista de amigos.
4. Quando a lista estiver completa, o sorteio pode ser realizado.

## Tecnologias utilizadas

- JavaScript
- HTML
- CSS

## Código Principal

Aqui está um trecho do código JavaScript responsável por adicionar amigos à lista:

```javascript
let listaAmigos = []; // Lista para armazenar os amigos
const limiteDeAmigos = 5; // Limite de amigos no jogo

function adicionarAmigo() {
    let inputElemento = document.querySelector("#amigo"); // Seleciona o campo de entrada
    let novoAmigo = inputElemento.value.trim(); // Remove espaços extras no início e no fim do nome

    // Verificar se o campo está vazio
    if (novoAmigo === "") {
        alert("Insira um nome válido");
        return;
    }

    // Verificar se o nome do amigo já está na lista
    if (listaAmigos.some(amigo => amigo.toLowerCase() === novoAmigo.toLowerCase())) {
        alert("Este amigo já está na lista!");
        inputElemento.value = "";
        return;
    }

    // Verifica se atingiu o número máximo de amigos
    if (listaAmigos.length >= limiteDeAmigos) {
        alert("Você atingiu o número máximo de jogadores.");
        inputElemento.value = "";
        return;
    }

    // Adicionar o amigo e limpar campo em tela
    listaAmigos.push(novoAmigo);
    inputElemento.value = "";
}
```

## Dicas Finais:
- Se quiser adicionar mais detalhes, como **instruções para executar o projeto** ou **como contribuir**,você pode incluir essas seções no futuro.
- Mantenha o README.md atualizado conforme o projeto evolui.
