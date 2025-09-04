Pule para reproduzir o esboço
Arquivo
Editar
Esboço
Ajuda
Português
Olá, isabelly.aragao!



Auto-atualizar

jogo de corrida - MODELO copy copy

Public
p5.js 1.10.0

Arquivos do esboço


i
nde
x
.html

s
ketc
h
.js


s
tyl
e
.css

sketch.js
Salvo: 7 minutos atrás
1
function setup() {
2
  createCanvas(400, 400);
3
}
4
​
5
let xJogador1 = 0;
6
let xJogador2 = 0;
7
​
8
function draw() {
9
  if (focused == true) {
10
    background("#D2EBB5");
11
  } else {
12
    background("rgb(238,178,178)");
13
  }
14
  textSize(40);
15
  text("😎", xJogador1, 100);
16
  text("❤️", xJogador2, 300);
17
  rect(350, 0, 10, 400);
18
​
19
  if (xJogador1 > 350) {
20
    text("Jogador 1 venceu!", 50, 200);
21
    noLoop();
22
  }
23
  if (xJogador2 > 350) {
24
    text("Jogador 2 venceu!", 50, 200);
25
    noLoop();
26
  }
27
}
Não há mensagens do Lint
Linha atuallinha 16

Terminal
Limpar

​
Pré-visualização

Complete your gift to make an impact
Donate