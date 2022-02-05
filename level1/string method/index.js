var yes = "helloworld"
var hell = yes.toUpperCase()
var world = hell.toLowerCase()
console.log(hell + world)
function findMidIndex(numberPlace, numberPlaceRecip) {
    let mid = (numberPlace.length) / 2;
    let mid2 = (numberPlaceRecip.length) / 2;
    console.log('hello: ' + Math.ceil(mid));
    console.log('hello world: ' + Math.ceil(mid2));
}
findMidIndex('hell', 'hell World');
var he = yes.slice(0, 2)
console.log(he)
var hell2 = yes.slice(0, 5)
console.log(hell2)
var hellworld = "hello world";
var hell = hellworld.length;
var part_a = '';
var part_b = '';
for(var i=0 ; i<Math.floor(hell/2) ; i++)
{
    part_a+=hellworld[i];
}
for(var i=Math.floor(hell/2) ; i<hell ; i++)
{
    part_b+=hellworld[i];
} 
var new_part_a = part_a.toUpperCase();
var changed_string = new_part_a + part_b;
console.log(changed_string);
