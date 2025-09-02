const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola real, você se depara com uma antiga lenda contada por seus pais sobre um artefato mágico perdido. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, a princesa ficou com receio de que a lenda fosse real e que sua busca por esse artefato pudesse trazer perigos desconhecidos ao seu reino."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ela ficou empolgada, sonhando em encontrar o artefato e usá-lo para proteger o reino e trazer prosperidade a todos."
            }
        ]
    },
    {
        enunciado: "Com a descoberta da lenda, o sábio do reino decide lhe dar uma missão: encontrar o artefato perdido. No final de uma reunião, ele pede que você escreva uma carta sobre o que você espera da jornada. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Escreve a carta pedindo conselhos aos anciãos do reino e buscando saber mais sobre as histórias que cercam o artefato.",
                afirmacao: "A princesa escreveu uma carta com perguntas e pediu ajuda aos sábios, desejando aprender mais sobre o que esperar dessa jornada misteriosa."
            },
            {
                texto: "Escreve a carta contando sobre o seu desejo de se aventurar e como está determinada a cumprir a missão com coragem.",
                afirmacao: "Ela sentiu que o reino precisava de uma líder forte e determinada, então escreveu uma carta cheia de confiança e ambição para mostrar sua disposição para a aventura."
            }
        ]
    },
    {
        enunciado: "Após escrever a carta, você parte para a jornada com sua comitiva. Durante o caminho, você encontra uma vila onde as pessoas estão sofrendo com uma ameaça misteriosa. Como você se posiciona?",
        alternativas: [
            {
                texto: "Decide ajudar os aldeões, acreditando que sua missão pode ser completada enquanto resolve o problema da vila.",
                afirmacao: "A princesa acreditava que sua missão tinha mais a ver com ajudar o próximo, e ela decidiu que proteger o povo era tão importante quanto encontrar o artefato."
            },
            {
                texto: "Pede para os aldeões aguardarem, pois acredita que sua missão maior é encontrar o artefato e que ajudar agora pode atrasar a jornada",
                afirmacao: "Ela estava focada em sua missão e sentia que se ajudasse os aldeões, poderia acabar perdendo tempo precioso para o futuro de seu reino."
            }
        ]
    },
    {
        enunciado: "No final de um longo dia de viagem, você precisa desenhar um mapa para guiar seu grupo pela floresta densa. E agora?",
        alternativas: [
            {
                texto: "Desenha um mapa com base no que aprendeu com os antigos exploradores do reino.",
                afirmacao: "A princesa usou seus conhecimentos e os relatos de antigos exploradores para desenhar um mapa preciso que ajudaria a todos a atravessarem a floresta."
            },
            {
                texto: "Decide usar um feitiço antigo para invocar uma criatura mística que possa ajudá-la a desenhar um mapa mágico que guie sua comitiva.",
                afirmacao: "Ela usou seus poderes de magia para invocar um espírito guardião da floresta, que desenhou para ela um mapa encantado que tornaria o caminho mais seguro."
            }
        ]
    },
    {
        enunciado: "Durante sua jornada, você encontra um grupo de bandidos que tentam roubar sua comitiva. O que você faz?",
        alternativas: [
            {
                texto: "Decide negociar com os bandidos, oferecendo riquezas do reino em troca de uma passagem segura.",
                afirmacao: "A princesa tentou apaziguar a situação, oferecendo uma parte dos tesouros do reino, acreditando que a paz seria a melhor solução."
            },
            {
                texto: "Enfrenta os bandidos com coragem, confiando em suas habilidades de combate e na força de sua comitiva para derrotá-los.",
                afirmacao: "Ela decidiu que a honra de sua missão não poderia ser manchada por bandidos e enfrentou-os com bravura, liderando sua comitiva para a vitória."
            }
        ]
    },
    {
        enunciado: "Ao final da jornada, você encontra o artefato mágico em um antigo templo guardado por criaturas misteriosas. O artefato é poderoso, mas pode ser perigoso se mal usado. O que você faz?",
        alternativas: [
            {
                texto: "Toma o artefato para si, confiante de que pode usá-lo para proteger seu reino e seu povo.",
                afirmacao: "A princesa sentiu que o artefato era a chave para salvar seu reino, e com coragem, o tomou em suas mãos."
            },
            {
                texto: "Decide deixar o artefato onde está, acreditando que seu poder é muito grande e que o reino pode ser melhor protegido com sabedoria e não com força.",
                afirmacao: "Ela percebeu que o verdadeiro poder não estava no artefato, mas na sabedoria de governar e decidiu deixar o artefato onde estava, acreditando que a maior força estava em seu próprio coração."
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