function getData() {
    axios.get("https://api.vschool.io/DavidwhiteVS/todo")
        .then(response => {
            listData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
}
function listData(data){
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("div");
        li.textContent = data[i].title + " " + data[i].description;
        document.getElementById("todolist").appendChild(li);
        const img = document.createElement('img')
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "100px")
        img.setAttribute("height", "100px")
        li.appendChild(img)
        const completed = document.createElement('input')
        completed.setAttribute("type", "checkbox")

        completed.style.height = '30px'
        completed.style.width = '30px'
        completed.setAttribute("name", "completed")
        completed.setAttribute("id", "completed")
        /* Label */
        const completeLabel = document.createElement('label')
        completeLabel.setAttribute('for', 'completed')
        completeLabel.textContent = 'Mark Complete '
        completeLabel.style = 'font-size: 25px;'
        li.appendChild(completed)
        li.appendChild(completeLabel)

        const deleteButton = document.createElement('button')
        deleteButton.setAttribute("id", "delete")
        deleteButton.textContent = "Delete"
        deleteButton.style.height = '30px'
        deleteButton.style.width = 'px'
        deleteButton.style.marginLeft = '10px'
        deleteButton.style.marginRight = '10px'
        deleteButton.style.backgroundColor = 'blue'
        deleteButton.style.color = 'white'
        deleteButton.style.border = 'none'
        deleteButton.style.fontSize = '25px'
        deleteButton.style.cursor = 'pointer'
        li.appendChild(deleteButton)
        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();
            axios.delete(`https://api.vschool.io/DavidwhiteVS/todo/${data[i]._id}`)
                .then(response => {
                    console.log(response)
                    getData()
                })
                .catch(error => {
                    console.log(error)
                })
                location.reload(true);
        })
    }
}   
function clearList() {
    const el = document.getElementById('todolist')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
getData();
let todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let todoTitle = document.getElementById('todoTitle').value;
    let todoDescription = document.getElementById('todoDescription').value;
    let todoImgUrl = document.getElementById('newImage').value;
    let todo = {
        title: todoTitle,
        description: todoDescription,
        imgUrl: todoImgUrl
    }
    axios.post('https://api.vschool.io/DavidwhiteVS/todo', todo)
        .then(response => {
            console.log(response);
            location.reload();
        })
        .catch(error => {
            console.log(error);
        })
})
