```

function calculaNota(ex, p1, p2) {
    let exercicio = ex * 1;
    let prova1 = p1 * 2;
    let prova2 = p2 * 3;
    let resultado = 0;
    resultado = (exercicio + prova2 + prova1)/6;
    let conceito = '';
    if (resultado >= 9){
        conceito = "A";
    }else if (resultado < 9 && resultado >= 7.5){
        conceito = "B";
    }else if (resultado < 7.5 && resultado >= 6){
        conceito = "C";
    }else{
        conceito = "D";
    }
    return conceito;
}


```