const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Ao sair da escola, Davi vê um parque cheio de lixo e pensa no impacto disso para a natureza. O que ele decide?",
    alternativas: [
        {
            texto: "Cuidar do meio ambiente é responsabilidade de todos.",
            afirmacao: "Cuidar do meio ambiente é responsabilidade de todos e pequenas atitudes ajudam a preservar a natureza."
        },
        {
            texto: "Pequenas atitudes não fazem, diferença para o meio ambiente.",
            afirmacao: "A preservação do meio ambiente depende apenas do governo, por isso as ações individuais não fazem diferença."
        }   
    ]
},
{
    enunciado: "Depois de aprender sobre a preservação da natureza, a professora pede que Davi proponha uma ação para reduzir o lixo na escola. Qual atitude Davi toma?",
    alternativas: [
        {
            texto: "Organiza uma campanha de reciclagem com a turma.",
            afirmacao: "Pequenas ações coletivas ajudam a preservar o meio ambiente."
        },
        {
            texto: "Decide não participar da campanha porque acredita que não fará diferença.",
            afirmacao: "A participação das pessosas não é essencial para reduzir os impactos ambientais."
        }     
    ]
},
{
    enunciado: "Depois de Davi participou de um projeto sobre preservação da natureza a turma iniciou um discussão sobre como proteger o meio ambiente. O que Davi faz?",
    alternativas: [
        {
            texto: "Defende a reciclagem, a economia de água e o plantio de árvores.",
            afirmacao: "As atitudes sustentáveis contribuem para preservação do ambiente."
        },
        {
            texto: "Afirma que pequenas ações não fazem diferença e que a responsabilidade é apenas do governo.",
            afirmacao: "A participação da sociedade não é de importância para proteger o meio ambiente."
        }    
    ]
},
{
    enunciado: "Ao final da discussão, Davi precisou criar um cartaz no computador para conscientizar as pessoas sobre a preservação do meio ambiente. E agora?",
    alternativas: [
        {
            texto: "Criar um cartaz com imagens e mensagens sobre reciclagem e preservação da natureza.",
            afirmacao: "A conscientização ambiental incentiva atitudes sustentáveis e ajuda a preservar o meio ambiente."
        },
        {
            texto:"Criar um cartaz dizendo que as ações das pessoas não influenciam na preservação da natureza.",
            afirmacao:"As ações individuais e coletivas não são importantes para proteger a natureza."
        }      
    ]
},
{
    enunciado: "Depois de apresentar o cartaz, a professora propôs uma ação para reduzir o desperdicio na escola. O que Davi faz?",
    alternativas: [
        {
            texto:"Organiza uma campanha para economizar água e separar o lixo reciclável.",
            afirmacao: "Economizar recursos naturais e reciclar contribuem para a preservação da natureza."
        },
        {
            texto: "Continua desperdiçando água e jogando lixo em qualquer lugar.",
            afirmacao: "O desperdício de recursos e o descarte incorreto de resíduos não prejudica o meio ambiente."
        }   
    ]
 },
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
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "  ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();