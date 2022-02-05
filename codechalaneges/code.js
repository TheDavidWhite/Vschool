
const anagrams = (str1, str2) => {
    if(str1.length != str2.length){
        return false
    }
    const sort1 = str1.split("").sort()
    const sort2 = str2.split("").sort()
    return sort1.join("") === sort2.join("")
}

console.log(anagrams("ocre", "cores"))
console.log(anagrams("chetos", "chesto"))