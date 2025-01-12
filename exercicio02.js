//  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// 
meu_numero = 13;
function verifica_fibonacci(numero) {
    ultimo_numero = 1;
    penutimo_numero = 1;
    
    while (ultimo_numero <= numero) {
        penutimo = penutimo_numero;
        ultimo=ultimo_numero
        ultimo_numero = ultimo_numero + penutimo_numero
        penutimo_numero = ultimo
        
    }
    return penutimo_numero == numero
    
}
resultado = verifica_fibonacci(meu_numero);
mensagem = resultado == true ? 'Fibonacci' : 'Não é Fibonacci'
console.log(mensagem)
