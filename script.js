var todoItems = [];
var list = document.getElementById("todoItems");
var index = 0;
function getData(event){
    let todoItem = {}
    todoItem.id = document.getElementById("formGroupNumberInput").value;
    todoItem.task = document.getElementById("formGroupExampleInput").value;
    todoItem.description = document.getElementById("exampleFormControlTextarea1").value;
    todoItems.push(todoItem);
    addToList(todoItem, index++)

}



// function changeText2() {
//     var firstname = document.getElementById('firstname').value;
//     document.getElementById('boldStuff2').innerHTML = firstname;
//     var entry = document.createElement('li');
//     entry.appendChild(document.createTextNode(firstname));
//     list.appendChild(entry);
// }
function addToList(todoItem, index){
    let entry = document.createElement('div');

    entry.className += "list-group-item list-group-item-action flex-column align-items-start";
    innerDiv = document.createElement('div');
    innerDiv.className += "d-flex w-100 justify-content-between";

    heading = document.createElement('h5');
    heading.className +="mb-1";
    heading.innerHTML = todoItem.task;
    innerDiv.appendChild(heading);

    p = document.createElement('p');
    p.className +="mb-1";
    p.innerHTML = todoItem.description;
    
    b = document.createElement('button');
    b.className += "btn btn-danger";
    b.id = index;
    

    close = document.createElement('span');
    close.innerHTML = "&times;";
    b.appendChild(close);

    small = document.createElement('small');
    small.appendChild(b);

    innerDiv.appendChild(small);

    entry.appendChild(innerDiv);
    entry.appendChild(p);
    list.appendChild(entry);    
}

function deleteItem(event){
    let idx = event.srcElement.id;
    todoItems.splice(idx, 1);
    let node = document.getElementById("todoItems");
    node.innerHTML = "";
    for(let i = 0; i < todoItems.length; i++){
        addToList(todoItems[i], i);
    }
    
}
document.querySelector("#button").addEventListener("click", getData);
document.querySelector("#todoItems").addEventListener("click", deleteItem);