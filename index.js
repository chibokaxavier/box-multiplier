
let resultbtn = document.getElementById("resultt")

let message = ''

// let result = 0

function multiply() {

    

    // get val of num 1
    let num1 = Number(document.getElementById("num-1").value)

    // get val of num 2
    let num2 = Number(document.getElementById("num-2").value)

   
    // multiply
    let result = num1 * num2
     console.log(result)

     if (result%5 === 0) {

        message = 'Is it Divisible by 5 ? Yes\n'
    
        
    } else {
        message = " is your answer divisible by 5? no \n"
    } 

    if (result%2 === 0) {

        message1 = 'Is it an Even number ? Yes\n'
    
        
    } else {
        message1 = " is it an even number? no\n"
    } 

resultbtn.innerText = result  + "\n" + message + message1
    
}

function resetDiv(){

resultbtn.textContent = ""
    
}

















