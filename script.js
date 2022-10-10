var jogadores = [];

function adicionarJogador() {
  var jogador = document.getElementById("nomeDoJogador").value;
  jogadores.push({
    nome: jogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  jogadoresNaTela(jogadores);
  document.getElementById("nomeDoJogador").value = ""; 
}

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function jogadoresNaTela(jogadores) {
  var tabela = "";
  for (var i = 0; i < jogadores.length; i++) {
    tabela += "<tr><td>" + jogadores[i].nome + "</td>";
    tabela += "<td>" + jogadores[i].vitorias + "</td>";
    tabela += "<td>" + jogadores[i].empates + "</td>";
    tabela += "<td>" + jogadores[i].derrotas + "</td>";
    tabela += "<td>" + jogadores[i].pontos + "</td>";
    tabela += "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    tabela += "<td><button class='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    tabela += "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    tabela += "<td><button class='lixeira' onclick='lixeira("+ i +")' title='Remover jogador'>X</button></td>"
    tabela += "</tr>";       
  }  
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = tabela;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  jogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  jogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogadoresNaTela(jogadores);
}

function lixeira(i) {
  jogadores.splice(i,1);
  jogadoresNaTela(jogadores);
}

function zerarTabela(i) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  jogadoresNaTela(jogadores);
}

//terminado em 16/09/2022