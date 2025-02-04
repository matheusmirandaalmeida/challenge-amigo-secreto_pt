Amigo Secreto
Este projeto é um simples sorteador de amigo secreto desenvolvido com HTML, CSS e JavaScript.

📜 Funcionalidades do JavaScript

O arquivo app.js contém a lógica principal do sorteador de amigo secreto. As principais funções implementadas são:

📝 adicionarAmigo()

Obtém o nome digitado no campo de entrada.
Remove espaços extras e verifica se o nome não está vazio.
Adiciona o nome à lista de amigos.
Atualiza a lista exibida na tela.

🔄 atualizarListaAmigos()

Limpa a lista de amigos na tela.
Percorre o array amigos e adiciona os nomes à lista exibida.

🎲 sortearAmigo()

Verifica se há pelo menos um nome na lista.
Sorteia um amigo aleatoriamente.
Exibe o nome sorteado na tela.

🔃 resetar()

Limpa a lista de amigos e o nome sorteado.
Remove todos os elementos exibidos na tela.
Deixa o cursor focado no campo de entrada para facilitar a reinicialização.

🔘 Botão "Reiniciar"

O botão "Reiniciar" executa a função resetar(), limpando a lista de amigos e removendo o nome sorteado da tela.
Após resetar, o campo de entrada volta a ser o foco, permitindo uma nova inserção de nomes rapidamente.