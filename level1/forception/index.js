var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var nameAlphabet = [];

function forception() {

    for (var i = 0; i < people.length; i++) {
        nameAlphabet.push(people[i] + ":")
        for (var j = 0; j < alphabet.length; j++) {
            nameAlphabet.push(alphabet[j].toUpperCase())
        }
        console.log(nameAlphabet);
    }
    return nameAlphabet;
}
forception()