// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "the Great Zombini" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')

const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')

const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
 gb = gb + 1 
 document.getElementById('qty-gb').textContent = gb

       
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
    
     gb = gb - 1 
     document.getElementById('qty-gb').textContent = gb
    
    })

ccPlusBtn.addEventListener('click', function() {
   
    console.log('Chocolate Chip + button was clicked!')
     cc = cc + 1 
     document.getElementById('qty-cc').textContent = cc
    
    })

ccMinusBtn.addEventListener('click', function() {
   
    console.log('Chocolate Chip - button was clicked!')
     cc = cc - 1 
     document.getElementById('qty-cc').textContent = cc
    
    })

sugarPlusBtn.addEventListener('click', function() {
   
    console.log('Sugar Sprinkle + button was clicked!')
     sugar = sugar + 1 
     document.getElementById('qty-sugar').textContent = sugar
    
    })

sugarMinusBtn.addEventListener('click', function() {
   
    console.log('Sugar - button was clicked!')
     sugar = sugar - 1 
     document.getElementById('qty-sugar').textContent = sugar
    
    })