function fiveAndGreaterOnly(arr) {
    return arr.filter(function(great){
        if(great > 5)
        return true
    })
}    
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  function evensOnly(arra) {
    return arra.filter(function(eve){
        if(eve % 2 === 0)
        return true
    })
  }

  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  function fiveCharactersOrFewerOnly(ara) {
    return ara.filter(function(fewer){
        if(fewer.length <= 5)
        return true
    })
  }
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(falt){
        if(falt.member === false)
        return true
    })
  }
 
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
  function ofAge(arrr){
    return arrr.filter(function(age){
        if(age.age >= 18)
        return true
    })
  }
  
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]