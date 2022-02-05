var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var orangeIndex = fruit.indexOf('orange')
console.log(orangeIndex)
vegetables.push(orangeIndex)
console.log(vegetables)
console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(vegetables);
var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
var produce = food.join("")
console.log(produce)