
const buttons$$ = document.querySelectorAll('button');


numbrer_operators = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
operatos = ["divide", "multiplica", "restar", "sumar"]
operatos_signs = ["/", "*", "-", "+"]

const operar = (e) => {
    
    let resultado$$ = document.querySelector('#resultado');
    let parcial$$ = document.querySelector('#parcial');
    let resultado = 0


    boton_pulsado = e.target
    valor = e.target.innerText
     

    console.log(boton_pulsado.id)
    console.log('valor = ', valor)
    console.log('parcial$$.innerText = ', parcial$$.innerText )

// Botones numericos, los agrega a pantalla.
    if (numbrer_operators.includes(boton_pulsado.id))
    {
        
        // Si está a cero, limpio la pantalla antes de escribir. 
        if (resultado$$.innerText == "0") {
            resultado$$.innerText = ""
        }
        
        // Comprueba si el resultado parcial, contiene algun operador: +, -, x, /. 
        // Devuelve True si lo contiene. 
        var contieneOperador = operatos_signs.some(caracter => parcial$$.innerText.includes(caracter));

        // Si la ultima tecla pulsasa es un operaor, se limpia resultado para agregar el nuevo numero.
        if (contieneOperador) {
            resultado$$.innerText = ""
        }

        resultado$$.innerText = resultado$$.innerText + boton_pulsado.id
    }
// RESET
    if (boton_pulsado.id == "reset") {       
        
        resultado$$.innerText = "0";
        parcial$$.innerHTML = ""
    }
// Cambio de signo. 
    if (boton_pulsado.id == "sign") {
        resultado$$.innerText = parseInt(resultado$$.innerText) * -1
    }
// Operadores: +, -, x, /.     
    if (operatos.includes(boton_pulsado.id)) {


        var contieneOperador = operatos_signs.some(caracter => parcial$$.innerText.includes(caracter));

        if (contieneOperador) {
           
            resultado = eval(parcial$$.innerText + resultado$$.innerHTML)         
            parcial$$.innerHTML = resultado + boton_pulsado.innerHTML
            resultado$$.innerHTML = resultado;

        } else {
            parcial$$.innerHTML  = parcial$$.innerHTML = resultado$$.innerHTML + boton_pulsado.innerHTML
            
        } 
        }

        console.log("El resultado es: ", resultado)
// Tecla igual
    if (boton_pulsado.id == "igual") {  
        
        parcial$$.innerHTML = parcial$$.innerHTML + resultado$$.innerHTML
        resultado = eval(parcial$$.innerHTML)
        resultado$$.innerHTML = resultado


    }

        
}




// Añade la funcion operar a cada boton al hacer click en el 
for (let button of buttons$$){    
    button.addEventListener('click', operar)
}







