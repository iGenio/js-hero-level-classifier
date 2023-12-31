// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const xp = 7532;
const name = "Eugênio";
let rank = null;

if (xp <= 1000) {
    rank = "Ferro"
} else if (xp > 1000 && xp <= 2000) {
    rank = "Bronze"
} else if (xp > 2000 && xp <= 5000) {
    rank = "Prata"
} else if (xp > 5000 && xp <= 7000) {
    rank = "Ouro"
} else if (xp > 7000 && xp <= 8000) {
    rank = "Platina"
} else if (xp > 8000 && xp <= 9000) {
    rank = "Ascendente"
} else if (xp > 9000 && xp <= 1000) {
    rank = "Imortal"
} else {
    rank = "Radiante"
}

console.log(`O Herói de nome ${name} está no nível de ${rank}`)
