let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#button-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer;



//Contador de jogadas
let player1 = 0
let player2 = 0

//Adicionando evento de click para os box

for(let i = 0; i < boxes.length; i++){
    
    //Quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){
        let el = checkElement(player1, player2)
        if(player1 == player2){
            //x
            el = x
        }else{
            //o
            el = o
        }
        
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)
    
            //Computar jogada
    
            if(player1 == player2){
                player1++
            
               if(secondPlayer == "ai-player"){
                   //funcão executar jogada
                   computerPlay()
                   player2++
               }              
          
            }else{
                player2++
            }
            //Checar condição de vitória
            checkWinCondition()
        }
  
    })
}

//Eventos para saber se é 2 players ou IA

for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 500)
    })
}

//Ver quem vai jogar
function checkElement(player1, player2){

    if(player1 == player2){
        //x
        el = x
    }else{
        //o
        el = o
    }
    return el
}


//Ve quem ganhou

function checkWinCondition(){
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")

    //Vitórias na horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    //Vitórias na Vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
    }
    //Vitórias na diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x
           declareWinner('x')
           console.log('X Venceu');
        }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
        
            
        
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x
            declareWinner('x')
            console.log('X Venceu');
        }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o
            declareWinner('o')
            console.log('O Venceu');
        }
                
    }

    //Quando der velha
    let counter = 0

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }
    if(counter == 9){
        declareWinner()
        console.log('Deu velha');
    }

//Limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner){
        let scoreboardx = document.querySelector("#scoreboard-1")
        let scoreboardy = document.querySelector("#scoreboard-2")
        let msg = ''

        if (winner == 'x'){
            scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1
            msg = "O jogador 1 venceu!"
        }else if(winner == 'o'){
            scoreboardy.textContent = parseInt(scoreboardy.textContent) + 1
            msg = "O jogador 2 venceu!"
        }else{
            msg = "Deu Velha!!!"
            }
    
        //Exibe mensagem
        messageText.innerHTML = msg
        messageContainer.classList.remove("hide")
        
        //Esconde Mensagem
        setTimeout(function(){
        messageContainer.classList.add("hide")

        },3000)
         //Zerando as jogadas   
 player1 = 0
 player2 = 0
 
 // remove x e o

 let boxesToRemove = document.querySelectorAll(".box div")

 for(let i = 0; i < boxesToRemove.length; i++){
     boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
        
}

   
    
}

//Executar a logica da jogada CPU

function computerPlay(){
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0
    //Só preencher se estiver vazio o filho
    for (let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5)

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
        //checagem de quantas esttão preenchidas    
        }else{
          filled++
        }
    }
    if(counter == 0 && filled < 9){
        computerPlay()
    }
}