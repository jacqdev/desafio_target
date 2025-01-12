// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


// ordenar por ordem crescente
// pegar média
// separar os finais de semana

const fs = require('fs');
let meus_registros = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));
let finai_semanas = [

    4,5,7,11,12,18,19,25,26
]
    




meus_registros.sort((a, b) => a.valor - b.valor);


registros_validos = meus_registros.filter(reg => !finai_semanas.includes(reg.dia)
    

)


console.log('menor dia de faturamento dia '+registros_validos[0].dia +' com valor de '+registros_validos[0].valor)
console.log('menor dia de faturamento dia '+registros_validos[registros_validos.length-1].dia +' com valor de '+registros_validos[registros_validos.length-1].valor)

media_faturamento = registros_validos.reduce((soma, item) => soma + item.valor, 0) / registros_validos.length


console.log('media faturamento ' + media_faturamento)
registros_validos.map(reg => {
    if (reg.valor >= media_faturamento) {
        console.log('dia de faturamento acima da media '+reg.dia+' com o valor de '+reg.valor)
    }
})
