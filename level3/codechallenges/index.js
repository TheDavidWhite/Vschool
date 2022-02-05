function titleCase(str) {
    
    return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.substr(1)).join(' ')
}
console.log(titleCase('I’m a little tea pot'));