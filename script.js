function clique(num)
{
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
 var resultado = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //diminui um caractere
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado) //eval retorna o valor do resultado
    }else{
        document.getElementById('resultado').innerHTML = ""
    }
}