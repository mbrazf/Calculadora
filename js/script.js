// Aqui selecionamos os elementos
let currentInput = document.querySelector('.currentInput')
let answerScreen = document.querySelector('.answerScreen')
let buttons = document.querySelectorAll('button')
let eraseBtn = document.querySelector('#erase')
let clearBtn = document.querySelector('#clear')
let evaluate = document.querySelector('#evaluate')
let realTimeScreenValue = [ ]


//Aqui adicionamos um evento no botão de limpar 
clearBtn.addEventListener("click", () => {
    realTimeScreenValue = [' ']
    answerScreen.innerHTML = 0
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen'
    answerScreen. style.color = "rgba(150, 150, 150, 0.07)"
})

// Aqui percorremos todos os botões com o forEach e em cada botão iremos adicionar um evento de clique
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        // Aqui verificamos se o botão com o id erase foi clicado se não adicionamos ele no visor
        if(!btn.id.match("erase")){
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join(" ")

            if(btn.classList.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(" "))
            }
        }

        // e aqui verificamos se o botão com id erase foi clicado se sim removemos/apagamos o número do visor
        if(btn.id.match('erase')){
            realTimeScreenValue.pop()
            currentInput.innerHTML = realTimeScreenValue.join('')
            answerScreen.innerHTML = eval(realTimeScreenValue.join(" "))
        }

        // verificamos se o botão com o id evaluate foi clicado 
        if(btn.id.match('evaluate')){
            currentInput.className = 'answerScreen'
            answerScreen.className = 'currentInput'
            answerScreen.style.color = 'white'
        }

        // e aqui verificamos para evitar um erro undefine na tela
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0
        }
    })
});