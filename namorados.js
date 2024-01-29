// Nesse exercicio iremos acompanhar um casal de namorados visitando um hotel.      
//Eles querem encontrar um local privado para ficarem sozinhos, crie um sistema de verificação 
//se o ambiente estivIer com 0 pessoas eles o consideram adequado se tiver alguém é considerado inadequado

const TotalDeAmbientes = parseInt(5);

const salasOcupadas = [1, 5, 6, 8];
const salasVazias = [2, 3, 4, 7, 9, 10];

for (let ambiente = 1; ambiente <= TotalDeAmbientes; ambiente++) {
    const ambienteAceitavel = salasVazias.includes(ambiente);
    const ambienteInaceitavel = salasOcupadas.includes(ambiente);

    if (salasVazias.includes(ambiente)) {
        console.log("Na sala " + ambiente +" A barra está limpa para namorar.");
    } else if (salasOcupadas.includes(ambiente)) {
        console.log("Na sala " + ambiente +" tem gente. Encontre um lugar mais privado.");
    }
}
