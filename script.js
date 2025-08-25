const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado:"Qual jogo popular é conhecido por sua mecânica de construção e sobrevivência em um mundo de blocos?"
        alternativas: [
            "Minecraft",
            "Super Mario Bros"
        ]
    },
    {
        enunciado:"Em qual jogo o protagonista Kratos busca vingança contra os deuses do Olimpo?"
        alternativas: [
            "Tetris",
            "God of War"
        ]
    },
    {
        enunciado: "Qual é o nome da princesa que Mario e Luigi frequentemente resgatam nos jogos da Nintendo?",
        alternativas: [
            "Princesa Fiona",
            "Princesa Peach"

        ]
    },
    {
        enunciado: "Qual desses jogos é um clássico jogo de labirinto onde você come pontos e frutas enquanto foge de fantasmas?",
        alternativa: [
            "Street Fighter",
            "Pac-Man"
        ]
    },
    {
        enunciado: "Em qual franquia de jogos de mundo aberto você pode roubar carros, cometer assaltos e completar missões em uma cidade fictícia?",
        alternativa: [
            "The Sims",
            "Grand Theft Auto"
        ]
    }
];
let atual = 0:
let PerguntaAtual;
 funcion mostraPergunta(){
    PerguntaAtual = PerguntaAtual
    caixaPergunta.textContent = enunciado;
 }

  () mostraPergunta;

