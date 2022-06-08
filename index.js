document.querySelectorAll(".number-box").forEach(function (element) {
    element.addEventListener('click',function(){
        console.log('clicked')
    })
    
})
let resultbtn = document.getElementById("resultt")
function multiply(event) {
    event.preventDefault()
    // total, will hold the result of the multiplication
    let total = 1

    document.querySelectorAll(".number-box").forEach(element => {
        console.log(element.value)
        total *= element.value
        console.log(total)
    })
    document.querySelector("#my-div").classList.remove("hidden")
    if (total % 5 === 0) {
        document.querySelector("#ch-div-b-5").checked = true
    } else {
        document.querySelector("#ch-div-b-5").checked = false
    }
    if (total % 2 === 0) {
        document.querySelector("#ch-even").checked = true
    } else {
        document.querySelector("#ch-even").checked = false
    }
    // resultbtn.innerText = total 
}

document.querySelector("#mform").addEventListener('submit', multiply)

function resetDiv() {
    document.querySelector("#my-div").classList.add("hidden")

}

function addMore() {
    let new_input = document.createElement('input')
    new_input.className = "number-box"
    new_input.required = true
    new_input.type = "number"
    document.querySelector("#box-container").appendChild(new_input)
}











