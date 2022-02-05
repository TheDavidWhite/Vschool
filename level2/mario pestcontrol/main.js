function getTotal() {
    let incValueTypeG = 5;
    let incValueTypeB = 7;
    let incValueTypeC = 11;

    return (document.getElementById("goomamount").value * incValueTypeG) +
        (document.getElementById("bombamount").value * incValueTypeB) +
        (document.getElementById("cheepsamount").value * incValueTypeC);
}
document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    let result = document.getElementById("total").value = "Your cost is "+ getTotal() + " coins"
})
getTotal();