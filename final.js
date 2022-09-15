


function conversao()  {



    var primeiroBimestre = document.getElementById("primeiroBimestre").value;
    var segundoBimestre= document.getElementById("segundoBimestre").value;
    var terceiroBimestre = document.getElementById("terceiroBimestre").value;
    var quartoBimestre= document.getElementById("quartoBimestre").value;


    primeiroBimestre  = parseFloat(primeiroBimestre );
    segundoBimestre = parseFloat(segundoBimestre );
    terceiroBimestre= parseFloat(terceiroBimestre);
    quartoBimestre= parseFloat(quartoBimestre);

    result = (primeiroBimestre  + segundoBimestre + terceiroBimestre + quartoBimestre) /4;
    document.getElementById("result").innerHTML = "Sua média é: " + result.toFixed(1);

    //*verificações*//


    if (result >= 6){
   result.innerText = 'Parabéns, sua média foi: ' + result;
   aprovado.innerText = 'Aprovado ✔';
   aprovado.style.color = 'green';
 } else if (result < 6){
   result.innerText = 'Não foi dessa vez, sua média foi: ' + result;
   aprovado.innerText = 'Reprovado ❌ ';
   aprovado.style.color = 'red';
}





}
