const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está andando pela rua quando vê um rato rosa brilhante que começa a falar com você e convida para uma aventura em um mundo alternativo. O que você faz?",
        alternativas: [
            {
                texto: "Aceito a oferta e sigo o rato rosa pelo portal mágico que aparece.",
                afirmacao: "Você atravessa o portal e entra num mundo cheio de cores e criaturas estranhas."
            },
            {
                texto: "Fico com medo e tento fugir do rato rosa.",
                afirmacao: "Você tenta correr, mas o rato rosa é rápido e acaba te puxando para o portal de qualquer jeito."
            }
        ]
    },
    {
        enunciado: "No mundo alternativo, o rato rosa te leva até uma floresta misteriosa cheia de árvores que sussurram. O que você faz?",
        alternativas: [
            {
                texto: "Escuto atentamente os sussurros para tentar entender o que dizem.",
                afirmacao: "Os sussurros revelam segredos da floresta e indicam um caminho seguro para o seu destino."
            },
            {
                texto: "Ignoro os sussurros e sigo pelo caminho que parece mais iluminado.",
                afirmacao: "Você escolhe o caminho iluminado e acaba encontrando um lago mágico com águas cristalinas."
            }
        ]
    },
    {
        enunciado: "Ao chegar no lago mágico, o rato rosa te diz que para continuar a aventura você precisa escolher um item mágico. Qual você escolhe?",
        alternativas: [
            {
                texto: "Uma capa invisível que te torna imperceptível.",
                afirmacao: "Com a capa invisível, você consegue evitar perigos e explorar lugares secretos."
            },
            {
                texto: "Uma varinha que controla o tempo por alguns segundos.",
                afirmacao: "A varinha te permite parar o tempo por momentos críticos, dando vantagem nas situações difíceis."
            }
        ]
    },
    {
        enunciado: "Durante a aventura, você encontra uma criatura ameaçadora que bloqueia seu caminho. Como reage?",
        alternativas: [
            {
                texto: "Uso o item mágico escolhido para fugir ou lutar.",
                afirmacao: "O poder do item mágico te ajuda a superar a criatura e seguir adiante."
            },
            {
                texto: "Tento conversar com a criatura para entender suas intenções.",
                afirmacao: "A criatura se acalma e se torna uma aliada inesperada na sua jornada."
            }
        ]
    },
    {
        enunciado: "Quando acha que a aventura está no fim, tudo começa a ficar turvo e você sente uma mordida forte. Você acorda em um hospital, com médicos ao redor. O que você pensa?",
        alternativas: [
            {
                texto: "Tudo não passou de um sonho estranho causado pela mordida do rato de esgoto.",
                afirmacao: "Você percebe que o mundo alternativo era apenas uma alucinação e promete cuidar melhor da sua saúde."
            },
            {
                texto: "Será que algo daquela aventura aconteceu de verdade?",
                afirmacao: "Com dúvidas na cabeça, você decide investigar mais sobre o misterioso rato rosa e o portal mágico."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da Aventura";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
