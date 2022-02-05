// for(var i = 0 ; i <= 9 ; i++ ){
//     console.log(i)
// }
for(var k = 9 ; k > -1 ; k--){
    console.log(k)
}
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var j = 0 ; j < fruit.length; j++ ){
    console.log(fruit[j])
}
let arr = [];
for (var h = 1; h <= 9; h++) {
    arr.push(h);
    console.log(arr);
}
for(var f = 0 ; f <= 100 ; f++){
    if(f % 2 == 0){
        console.log(f)
    }
}
for(var g = 0 ; g < fruit.length ; g++){
    if(g % 2 == 0){
        console.log(fruit[g])
    }
}
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
for(var y = 0 ; y < peopleArray.length; y++){
      console.log(peopleArray[y].name);
}
let names = [];
let occupations = [];
for (let d = 0; d < peopleArray.length; d++) {
    names.push(peopleArray[d].name);
    occupations.push(peopleArray[d]);
}
let everyOtherName = [];
let everyOtherOccupation = [];
for (let p = 0; p < peopleArray.length ; p++ ) {
    if (p % 2 == 0) {
        everyOtherName.push(peopleArray[p].name)
        console.log(everyOtherName);
    }
}
let arrNumbers = [];
for (let b = 2; b <= 2; b++) {
    let array2 = [];
    for (let t = 1; t <= 2; t++) {
        array2.push(t)
    }
    arrNumbers.push(array2)
    console.log(arrNumbers)
}