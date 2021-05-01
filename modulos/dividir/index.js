
function dividir ( a , b ) {      
        // se ingresan dos valores para calcular dentro de la funcion dividir

    if ((a > 0 ) && ( b > 0)) 
        // se compara que los valores de a y b sean mayor a cero
    {   

        let resultado = a / b ;   
        // se guarda la division dentro de una variable llamada resultado

        return console.log("la division es : " + resultado );  
        // se imprime por consola un mensaje mas el valor de la variable resultado

    } 
    
    else {

        return console.log("Ingrese un valor mayor a cero porfavor unu" ); 
        // si no se cumple la anterior condicion se ejecuta esta la cual retorna un mensaje para el usuario
    }
}

module.exports = dividir;
        // exportacion del moduo dividir