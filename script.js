const button$$ = document.querySelectorAll('.btn-operator')
const buttonNumber$$ = document.querySelectorAll('button')

console.log(button$$)

const operar = (e) => {
    console.log(e)
}

const operarNumber = (e) => {
    console.log(e)
}

for (let button of button$$) {
    button.addEventListener("click", operar)
    
}

for (let button of buttonNumber$$) {
    button.addEventListener("click", operarNumber)
    
}

