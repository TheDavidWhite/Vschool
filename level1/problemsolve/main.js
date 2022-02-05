let arr = [3, 5, 2, 8, 1];
temp = 0;

arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);
const random =["#3", "$$$", "C%4!", "hey!"]
const exclaMation = random.filter((items) => items.endsWith('!'))
console.log(exclaMation)
let x = []
let y = []
x = 20
y = 3
if(x % y === 0){
    console.log("correct")
}
else{
    console.log("wrong")
}

