const setCount = document.getElementById('clicker');
setCount.textContent = localStorage.clicker || 0

let counter = localStorage.clicker || 0


function clickCount() {
    document.getElementById('clicker').addEventListener('click', function () {
        counter++
        setCount.textContent = counter;
        localStorage.setItem('clicker', counter);
    })

}
clickCount();


var myForm = 10;
var downloadTimer = setInterval(function () {
    if (myForm <= 0) {
        clearInterval(downloadTimer);
        let endRace = document.getElementById("timer").innerHTML = "Times Up";
        alert(`${endRace}, Race completed with ${counter} clicks`);
        localStorage.removeItem('clicker');
        counter = 0;
        setCount.textContent = 0;
    } else {
        document.getElementById("timer").innerHTML = myForm + " seconds remaining";
    }
    myForm -= 1;
}, 1000);
const reset = document.getElementById("reset")

reset.addEventListener('click', function(event){
    event.preventDefault()
    localStorage.removeItem('clicker');
})

