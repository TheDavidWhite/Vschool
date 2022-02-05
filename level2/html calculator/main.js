const math = document["myForm"]

function mathAdd(){

    
    let addForm = document.getElementById("add")
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    let addResult = Number(num1)+Number(num2)
    let h1 = document.getElementById('resultNumber');
    h1.textContent = addResult 
    
}
function mathSub(){

    
    let addForm = document.getElementById("subtract")
    let num3 = document.getElementById('number3').value
    let num4 = document.getElementById('number4').value
    let subResult = Number(num3)-Number(num4)
    let h1 = document.getElementById('resultNumber2');
    h1.textContent = subResult 
    
}
function mathMult(){

    
    let multForm = document.getElementById("multply")
    let num5 = document.getElementById('number5').value
    let num6 = document.getElementById('number6').value
    let multResult = Number(num5)*Number(num6)
    let h1 = document.getElementById('resultNumber3');
    h1.textContent = multResult 
    h1.style.color = 'green'
    
}
math.addEventListener('submit', function(event){
    event.preventDefault()
        
    mathAdd();
    mathSub();
    mathMult();
       
        
})