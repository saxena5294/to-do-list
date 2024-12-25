let item = document.querySelector("#item");
let toDo = document.querySelector("#to-do");


item.addEventListener("keyup", function(event)
{if (event.key == "Enter"){
    addToDo
    (this.value)
    this.value = ""
}
}
)

let addToDo = function (item){
    let listItem = document.createElement("li");
listItem.innerHTML = ` 
${item}
<i class="fa-solid fa-xmark"></i>
`;

listItem.addEventListener("click", function(){
    this.classList.toggle("done");
}
)
listItem.querySelector("i").addEventListener("click", function(){
    listItem.remove()
})
toDo.appendChild(listItem)
}

