const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você acorda em sua casa, você se depara com uma nova descoberta em sua rotina: uma porta secreta que leva a um mundo alternativo e colorido. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, o rato rosa ficou um pouco assustado com a ideia de sair de seu mundo seguro e entrar em algo desconhecido. Ele temia o que poderia encontrar lá fora."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ele ficou encantado! A ideia de explorar um mundo tão colorido e misterioso o deixou cheio de curiosidade e empolgação."
            }
        ]
    },
    {
        enunciado: "Com a descoberta dessa porta mágica, o rato rosa decidiu que deveria explorar mais esse novo mundo. Mas, antes de sair, ele encontra um mapa mágico que mostra a localização de vários locais incríveis. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Decide seguir o mapa e explorar os lugares mais remotos, como a Montanha Arco-Íris e a Floresta das Luzes.",
                afirmacao: "O rato rosa adorava aventuras e ficou animado com a possibilidade de explorar os locais mais incríveis que o mapa mostrava."
            },
            {
                texto: "Decide fazer uma lista de locais e visitar primeiro os lugares mais próximos, para ter certeza de que o mundo é seguro.",
                afirmacao: "O rato rosa era prudente e preferiu começar sua jornada de maneira mais cautelosa, testando o ambiente e conhecendo aos poucos os mistérios desse novo mundo."
            }
        ]
    },
    {
        enunciado: "Durante sua jornada, o rato rosa encontra um grupo de criaturas mágicas que pedem ajuda para resolver um problema. Como você se posiciona?",
        alternativas: [
            {
                texto: "Decide ajudar as criaturas, acreditando que sua magia pode ser a chave para salvar o mundo colorido.",
                afirmacao: "Ele sentiu que a sua magia especial poderia ser útil e decidiu usar seus poderes para ajudar as criaturas e restaurar a harmonia do lugar."
            },
            {
                texto: "Agradece pela oferta, mas prefere continuar sua jornada sozinho, para aprender mais sobre o mundo e suas próprias habilidades.",
                afirmacao: "O rato rosa sentiu que essa era sua jornada pessoal e queria explorar mais sobre si mesmo antes de se envolver com outros problemas."
            }
        ]
    },
    {
        enunciado: "Após resolver uma série de enigmas e desafios no caminho, o rato rosa encontra um campo mágico cheio de flores que dançam ao som do vento. Ele precisa escolher uma flor para levar. E agora?",
        alternativas: [
            {
                texto: "Escolhe a flor mais brilhante, acreditando que ela terá algum poder especial e o ajudará em sua jornada.",
                afirmacao: "O rato rosa escolheu a flor mais iluminada, esperando que ela tivesse algum poder mágico que o ajudaria a conquistar seus objetivos."
            },
            {
                texto: "Escolhe a flor que mais lhe encanta, sem se preocupar com o poder, mas com a beleza e a paz que ela traz.",
                afirmacao: "Ele sentiu que a verdadeira magia estava em aproveitar a beleza do momento e escolheu a flor que mais lhe trazia alegria e serenidade."
            }
        ]
    },
    {
        enunciado: "Em um ponto de sua jornada, o rato rosa encontra uma bifurcação. Uma estrada leva ao Castelo das Sombras e a outra para a Vila dos Céus. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Escolhe o caminho até o Castelo das Sombras, sentindo que lá encontrará um grande desafio que testará seus limites.",
                afirmacao: "O rato rosa era corajoso e decidiu que enfrentar o desconhecido e os desafios do Castelo das Sombras o faria crescer ainda mais como ser mágico."
            },
            {
                texto: "Escolhe o caminho até a Vila dos Céus, acreditando que a tranquilidade e a sabedoria lá encontradas o ajudarão a entender melhor seu papel nesse mundo mágico.",
                afirmacao: "O rato rosa sentiu que precisava de mais paz e sabedoria antes de enfrentar grandes desafios, então escolheu ir para a Vila dos Céus."
            }
        ]
    },
    {
        enunciado: "Após uma longa jornada, o rato rosa encontra um cristal mágico que pode mudar o destino de qualquer ser vivo, mas ele precisa decidir como usá-lo. O que ele faz?",
        alternativas: [
            {
                texto: "Usa o cristal para curar o mundo colorido, acreditando que ele pode trazer paz e harmonia a todas as criaturas.",
                afirmacao: "O rato rosa usou o cristal com sabedoria, curando a terra e trazendo equilíbrio, pois acreditava que a verdadeira magia estava em restaurar o bem para todos."
            },
            {
                texto: "Decide guardar o cristal, acreditando que seu poder é muito grande e que, no momento certo, será usado para algo ainda mais importante.",
                afirmacao: "Ele percebeu que o poder do cristal deveria ser usado com muito cuidado e decidiu esperar o momento certo para utilizá-lo, guardando-o como uma arma secreta para o futuro."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();