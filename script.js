
const buttons$$ = document.querySelectorAll('button');
let parcial_screen$$ = document.querySelector('.parcial-result');
let result_screen$$ = document.querySelector('.result');
numbrer_operators = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

divide
menos
mas


const operar = (e) => {
    

    boton_pulsado = e.target
    
    if (numbrer_operators.includes(boton_pulsado.id))
    {
        console.log("He pulsado: ", boton_pulsado.id)
        result_screen$$.innerText = result_screen$$.innerText + boton_pulsado.id
    }

    if (boton_pulsado.id == "reset") {
        console.log("He pulsado reset")
        parcial_screen$$.innerText = "";
        result_screen$$.innerText = "0";
    }

    if (boton_pulsado.id == "reset-act-num") {
        result_screen$$.innerText = "0";
    }
    
    // En funcion del id del boton pulsado realizo una operación u otra.     
    
    

    


}

// Añade la funcion operar a cada boton al hacer click en el 
for (let button of buttons$$){    
    button.addEventListener('click', operar)
}







