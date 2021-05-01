
function multiplicar ( a , b ) {
            //Se guardan dos valores dntro de la funcion multiplicar

    let resultado = a * b;
            //Los dos valores se calculan y se guarda el resultado dentro de la variable resultado
    
    if ( (a = 0) || (b = 0) ) 
            //Se verifica que alguno de los dos valores es igual a cero
    {

        return console.log("la multiplicacion es: 0");
            //Si la condicion se cumple se retorna por consola un mensaje
    } 
    
    else 
            //si no se cumple la anterior condicion se ejecuta este codigo
    {

        return console.log("la multiplicacion es: "+ resultado);
            //Retorna por consola un mensaje mas el contenido de la variable resultado
    }
}

module.exports = multiplicar;
        //Exportacion del modulo