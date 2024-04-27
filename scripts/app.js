
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const audio = document.querySelector("#audio")

const workItButton = document.querySelector("#work_it")
const makeItButton = document.querySelector("#make_it")
const doItButton = document.querySelector("#do_it")
const makesUsButton = document.querySelector("#makes_us")
const harderButton = document.querySelector("#harder")
const betterButton = document.querySelector("#better")
const fasterButton = document.querySelector("#faster")
const strongerButton = document.querySelector("#stronger")
const moreThanButton = document.querySelector("#more_than")
const hourButton = document.querySelector("#hour")
const ourButton = document.querySelector("#our")
const neverButton = document.querySelector("#never")
const everButton = document.querySelector("#ever")
const afterButton = document.querySelector("#after")
const workIsButton = document.querySelector("#work_is")
const overButton = document.querySelector("#over")

const allButtons = [
    workItButton, makeItButton, doItButton, makesUsButton, harderButton, betterButton, fasterButton,
    strongerButton, moreThanButton, hourButton, ourButton, neverButton, everButton, afterButton,
    workIsButton, overButton
]



/*-------------------------------- Functions --------------------------------*/

const play = (event) => {
    if (event.target.id !== "") {
    audio.src = "./sounds/" + event.target.id + ".wav"
    audio.play()
    }
}


/*----------------------------- Event Listeners -----------------------------*/

for (const button of allButtons) {   
    addEventListener("click", play)
}




/*                                                                            */