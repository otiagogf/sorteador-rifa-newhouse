function sorteio() {
    var resultado = document.getElementById("resultado")
    var min = document.getElementById("minimo").value
    var max = document.getElementById("maximo").value
    if (min && max) {
        if (min > max) {
            let n3 = min
            let n4 = max
            max = n3
            min = n4
        }
        min = Math.ceil(min)
        max = Math.ceil(max) + 1
        resultFinal = Math.floor(Math.random() * (max - min)) + min
        resultado.innerHTML = "O número escolhido foi:  " + resultFinal;
    }
}

function limpar() {
    document.getElementById("minimo").value='';
    document.getElementById("maximo").value='';
    document.getElementById("resultado").innerHTML='';
}