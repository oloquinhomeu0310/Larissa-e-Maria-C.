const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Onde o personagem principal começa sua jornada?",
        alternativas: [
            {
                texto: "Em uma pequena vila.",
                afirmacao: "A jornada do personagem começa em uma vila isolada, onde a vida é tranquila, mas as oportunidades de aventura são raras."
            },
            {
                texto: "Em uma grande cidade.",
                afirmacao: "O personagem começa sua jornada em uma metrópole cheia de vida e movimento, despertando seu desejo de explorar mais."
            }
        ]
    },
    {
        enunciado: "Quem o personagem encontra no início de sua jornada?",
        alternativas: [
            {
                texto: "Um velho sábio que o orienta.",
                afirmacao: "O personagem cruza com um velho sábio que oferece conselhos cruciais para o sucesso da jornada."
            },
            {
                texto: "Um jovem aventureiro que se torna seu companheiro.",
                afirmacao: "O personagem conhece um jovem aventureiro, formando uma parceria baseada em amizade e desafios compartilhados."
            }
        ]
    },
    {
        enunciado: "Qual é o primeiro desafio que o personagem enfrenta?",
        alternativas: [
            {
                texto: "Escalar uma montanha íngreme.",
                afirmacao: "O personagem precisa escalar uma montanha intransponível, testando sua resistência física e determinação."
            },
            {
                texto: "Atravessar um rio perigoso.",
                afirmacao: "A travessia de um rio turbulento exige que o personagem enfrente seus medos para continuar a jornada."
            }
        ]
    },
    {
        enunciado: "Como o personagem supera o desafio?",
        alternativas: [
            {
                texto: "Com a ajuda de uma ferramenta mágica.",
                afirmacao: "O personagem supera o desafio com a ajuda de um objeto mágico, simbolizando sorte ou ajuda divina."
            },
            {
                texto: "Usando sua inteligência e coragem.",
                afirmacao: "O personagem usa sua inteligência e coragem para superar o desafio, mostrando que suas habilidades são suficientes."
            }
        ]
    },
    {
        enunciado: "O que o personagem descobre no final da jornada?",
        alternativas: [
            {
                texto: "Um tesouro escondido.",
                afirmacao: "No fim da jornada, o personagem descobre um tesouro escondido, representando o crescimento e as lições aprendidas."
            },
            {
                texto: "Um segredo sobre seu passado.",
                afirmacao: "O personagem descobre um segredo profundo sobre seu passado, mudando sua percepção de si mesmo e de sua jornada."
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
    caixaPerguntas.textContent = "A Jornada do Destino: Entre Segredos e Tesouros.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
