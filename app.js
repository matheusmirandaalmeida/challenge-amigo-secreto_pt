//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    console.log(nomeAmigo);

    if(nomeAmigo === ''){
        alert('Por favor preencher campo nome.');
        return;
    }

    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    input.value = '';
    input.focus();
}

function atualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicionar pelo menos um nome antes de sortear.');
        return
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

function resetar(){
    amigos = [];

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    document.getElementById('amigo').focus();
}