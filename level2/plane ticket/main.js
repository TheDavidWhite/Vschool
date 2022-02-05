const form = document['myForm']

form.addEventListener('submit', function(event){
    event.preventDefault() 
    alert(myForm.first.value + ' ' + myForm.last.value + " Age: " + myForm.age.value + ' '+ myForm.gender.value + "  Destination: " + myForm.desination.value + " food selection: " + myForm.foodOptions.value)
})