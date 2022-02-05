
let header = document .getElementById('header');
header.innerText = 'JavaScript Made This!! ';
header.style.textAlign = 'center';
header.style.fontSize = '50px';




let spanName = document.createElement('span');
header.appendChild(spanName);
spanName.classList.add('name');
spanName.innerText = '\r\n Jared Leonguerrero ';
spanName.style.fontSize = '20px';
spanName.style.textAlign = 'center';


let spanName2 = document.createElement('span');
header.appendChild(spanName2); 
spanName2.innerText = ' wrote the Javascript ';
spanName2.style.fontSize = '20px';
spanName2.style.textAlign = 'center';
let messages = document.getElementById('messages');
document.getElementById('sendButton').addEventListener('click', function(e){
    e.preventDefault();
    let mess = document.getElementById('mess').value;
    let newDiv = document.createElement('div');
    messages.appendChild(newDiv);
    newDiv.classList.add('message');
    newDiv.innerText = mess;
    document.getElementById('mess').value = '';

});