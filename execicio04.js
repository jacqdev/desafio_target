// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let dados = [
    {
        estado: 'SP',
        valor: 67836.43,
        percentual: 0,
    },
    {
        estado: 'RJ',
        valor: 36678.66,
        percentual:0,
    }, {
        estado: 'MG',
        valor: 29229.288,
        percentual:0,
    }, 
    {
        estado: 'ES',
        valor: 27165.48,
        percentual:0,
        
    },
    {
          estado: 'outros',
          valor: 19849.53,
           percentual:0,
        

    }
    

    
]

total = dados.reduce((soma, reg) => soma += reg.valor, 0)
console.log(total)
   
console.log(dados)
dados.map(item => {
    item.percentual = (item.valor / total) * 100
    console.log('pecentual do estado '+item.estado+' tema posentagem de '+item.percentual.toFixed(2)+'%')
    
})
