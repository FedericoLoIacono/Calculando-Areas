var contador=0;

var CalculoRadio = function () {
    event.preventDefault();
    var radio = document.getElementById("Radio").value;
    if (radio == "") {
        alert('Debe ingresar un numero');
    } else if (radio <= 0) {
        alert('Ingrese un numero positivo');
    }else if(radio>100){
        alert('El valor debe ser menor a 100. Vuelva a ingrersar.');
    }else {
        var resultadoRad = Math.PI * (radio * 2);
        alert(resultadoRad);  
        contador++;
        document.getElementById('contando').innerHTML=`Contador: ${contador}`;
    }
}

var CalculoCuadrado = function () {
    event.preventDefault();
    var Base = document.getElementById("BaseCuadrado").value;
    var Altura = document.getElementById("AlturaCuadrado").value;
    if (Base == "" || Altura =="") {
        alert('Debe ingresar un numero');
    }else if(Base <= 0 || Altura <=0 ){
        alert('Deben ser numeros positivos');
    }else if(Base > 100 || Altura > 100){
        alert('El valor debe ser menor a 100. Vuelva a ingrersar.');
    }else{
        var resultadoCuadrado = Base*Altura;
        alert(resultadoCuadrado);
        contador++;
        document.getElementById('contando').innerHTML=`Contador: ${contador}`;
    }
    
}

var CalculoTriangulo = function () {
    event.preventDefault();
    var BaseT = document.getElementById("AlturaTriangulo").value;
    var AlturaT = document.getElementById("BaseTriangulo").value;
    if (BaseT == "" || AlturaT =="") {
        alert('Debe ingresar un numero');
    }else if(BaseT <= 0 || AlturaT <=0 ){
        alert('Deben ser numeros positivos');
    }if(BaseT > 100 || AlturaT > 100){
        alert('El valor debe ser menor a 100. Vuelva a ingrersar.');
    }else{
        var ResultadoT = BaseT*AlturaT/2;
        alert(ResultadoT);
        contador++;
        document.getElementById('contando').innerHTML=`Contador: ${contador}`;
    }
}


   
