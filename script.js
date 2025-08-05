const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Enquanto você voltava para casa se deparou com um rato rosa e resolveu segui-lo. Depois de caminhar por 5 minutos atrás do rato você o seguiu para dentro de uma floresta. Entre as árvores você avistou um alçapão na beira de uma árvore, grande o suficiente para que pudesse se encolher e passar. Diante disso sua reação foi:",
        alternativas: [
            {
            texto: "Isso é assustador! Um rato rosa e um alçapão mágico?! Que horror!",
            afirmacao:"afirmação"
            },

            {
            texto: "Isso é incrível! Não sabia que existiam ratos tão legais!!!",
            afirmacao:"afirmação"
            }
        ]
    },

    {
        enunciado: "Quando vira para pegar a trilha e voltar para a casa você acaba tropeçando e cai no pequeno alçapão. Sua queda parece não ter fim e você decide olhar ao redor. A sua volta o mundo parece invertido, você vê um crocodilo laranja andando no que parece ser uma parde, um canguru-cobra roxo rastejando em uma superfície e muitas outras coisas bizarras, quando você menos espera está no chão, pelo menos é o que você acha, está macio demais e resolve conferir, você nota então que o chão parece ser feito de mochis. Sua reação é:",
        alternativas: [
            {
            texto: "Mochi???!!! Onde eu estou?",
            afirmacao:"afirmação"
            },

            {
            texto: "Que legal! Mochi por todo canto! Que lugar incrível é esse?",
            afirmacao:"afirmação"
            }

        ]
    },

    {
        enunciado: 'Em todo caso sua melhor opção é explorar o lugar e procurar uma maneira de voltar para casa. Você começa a andar, o chão de mochi é estranhamente firme, e após um tempo começa a avistar o que parece ser uma floresta ao longe. Após 5 minutos você chega na entrada da floresta e vê, novamente, o rato rosa. — Olá, vi você lá em cima. Por acaso me seguiu? — Você olha ao redor assustado, procurando de onde veio esse som, ainda em choque olha para baixo e vê o rato te olhando, esperando sua resposta. E sua resposta será:'
    }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();