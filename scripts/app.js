
/*-------------------------------- Constants --------------------------------*/

// const randomIndex = Math.floor(Math.random() * allButtons.length)

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

const randomButton = document.querySelector("#randomizer")
// console.log("./sounds/" + allButtons[randomIndex].id + ".wav")

/*-------------------------------- Functions --------------------------------*/

const play = (event) => {
    if (event.target.id !== "") {
    audio.src = "./sounds/" + event.target.id + ".wav"
    audio.play()
    }
}

const playRandom = () => {
    let randomIndex = Math.floor(Math.random() * allButtons.length)
    // console.log(allButtons[randomIndex].id)
    audio.src = "./sounds/" + allButtons[randomIndex].id + ".wav"
    audio.play()
}
/* playRandom() randomises the ID on website launch, but then repeats the same sound eg. the page
randomly assigns sound "never" to randomButton, but then every time randomButton is clicked the sound is
always "never". It should be random for every click.

Fixed: randomIndex was outside the function, which caused it to never be re-assigned. It now
re-assigns each time the function is called. */

/*----------------------------- Event Listeners -----------------------------*/

for (const button of allButtons) {   
    button.addEventListener("click", play)
}

randomButton.addEventListener("click", playRandom)


/*                                                                            */