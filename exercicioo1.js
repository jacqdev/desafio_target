// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?


soma = 0;
indece = 13;
 
for (k = 0; k < indece; k++){
    soma += k;
}

console.log('resultado da soma ' + soma);
