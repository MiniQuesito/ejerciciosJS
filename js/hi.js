
hola ="hola, profe espitia";

console.log(hola);



function calcularEdad(edad,año){
   
    var fecha = new Date();

    edad = window.prompt("Ingrese su edad actual");
    año = fecha.getFullYear();
    
  
     let resultado=(año - edad);

    alert(resultado); 

}

function sumar(num1,num2){
    
    num1 = parseInt(window.prompt("Ingrese un numero"));
    num2 = parseInt(window.prompt("Ingrese un numero"));

    let resultado = 0;

    resultado = (num1 + num2);

    alert(resultado);
} 



function dividir(num1,num2){

    num1 = parseInt(window.prompt("Ingrese un numero"));
    num2 = parseInt(window.prompt("Ingrese un numero"));

    let resultado = 0;
    resultado = (num1 / num2);

    alert(resultado);
}

function multiplicar(num1,num2){

    num1 = parseInt(window.prompt("Ingrese un numero"));
    num2 = parseInt(window.prompt("Ingrese un numero"));

    let resultado = 0;
    resultado = (num1 * num2);

    alert(resultado);
}

function almacen(){
 
    for( var i = 0; i <10; i++){
        var objetos = Array(10)
        var1 = window.prompt();

        objetos[i] = var1;  
    

        document.write(objetos[i]+"<br>");
    }
}

function cambio(){

    document.getElementById("cambio").style.backgroundColor="blue";

}


function diaactual(){
 
    // crea un nuevo objeto `Date`
    var today = new Date();
    
    // obtener la fecha y la hora
    var now = today.toLocaleString();
    alert(now);
}

function promedio(){

    function promedio(num1, num2, num3, num4, num5){

        num1 = parseInt(window.prompt("Por favor, digite el número 1"));
        num2 = parseInt(window.prompt("Por favor, digite el número 2"));
        num3 = parseInt(window.prompt("Por favor, digite el número 3"));
        num4 = parseInt(window.prompt("Por favor, digite el número 4"));
        num5 = parseInt(window.prompt("Por favor, digite el número 5"));
    
        let result = parseInt(num1 + num2 + num3 + num4 + num5)/5;
    
        alert("El promedio es: " + result);

}
}

function html(){
 
    var texto = document.createElement("img");

    texto.src='imagen/t1.jfif';

    document.querySelector("body").appendChild(texto);

}
