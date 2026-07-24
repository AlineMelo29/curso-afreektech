function calculadora(operacao, valor1, valor2){
    if (operacao === 'soma'){
    return valor1 + valor2
    }
    if ( operacao === 'subtracao'){
        return valor1 - valor2 
    }
    if (operacao === 'multiplicação'){
        return valor1*valor2 
    }
    if (operacao === 'divisao'){
        return valor1/valor2 
    }
    return "Erro: operação invalida!"
}

calculadora ('divisao', 15, 3)