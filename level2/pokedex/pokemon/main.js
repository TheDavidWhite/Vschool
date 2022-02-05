const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const sourceData = xhr.responseText
        const apiData = JSON.parse(sourceData)
        displayNames(apiData.objects[0].pokemon)
    }
}

function displayNames(arr) {
    arr.sort((a,b) => { return parseInt(a.resource_uri.replace(/[^0-9.]/g, '')) - parseInt(b.resource_uri.replace(/[^0-9.]/g, '')) })
    console.table(arr)
    arr.forEach(element => {
        const div = document.createElement('div')
        div.textContent = element.name;
        document.body.appendChild(div).style.cssText = `
            display: inline-block;
            align-items: center;
            background-color: red;
            left: 45%;
            border: solid black 2px;
            width: 200px;
            height: 200px;
        `
    })
}