const filterInput = (e) => {
    // console.log(e.target.value);

    if (/^\d*\.?\d*$/.test(e.target.value)) {
        // console.log('valor valido')
        console.log(e.target.value[e.target.value.length - 1])
        previos_input = e.target.value
        console.log("valor previo: " + previos_input)
    } else {
        console.log('valor NO VALIDO')
        console.log("valor previo: " + previos_input)
        console.log(e.target.value[e.target.value.length - 1])
        if (previos_input == "") {
            e.target.value = ""
        } else {
            e.target.value = previos_input
        }
    }
}

const btnCalc$$ = document.querySelectorAll(".btn-calc")

// Pantalla 
const screen$$ = document.querySelector("#input-screen")
screen$$.addEventListener('input', filterInput)


const getButtonValue = (e) => {

    console.log(e)

}

// Botones numericos. 
const buttonNum$$ = document.querySelectorAll(".btn-calc")


for (let button of buttonNum$$) {
    button.addEventListener("click", getButtonValue)
    
}



let previos_input = ""

const resestButton$$ = document.querySelector("#reset")

// Elimina el contenido de la pantalla
const reset = () => {
    console.log('Estoy en el reset')
    console.log(screen$$.value)
    screen$$.value = ""
    
}






resestButton$$.addEventListener('click', reset)








