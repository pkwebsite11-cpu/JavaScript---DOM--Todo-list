let input = document.querySelector("#name")
let button = document.querySelector("#btn");
let tasklist= document.querySelector("#tasklist");



button.addEventListener("click",function(){
    let list1= document.createElement("li");
     list1.textContent = input.value;
    list1.addEventListener("click", function(){
    if(list1.style.textDecoration === "line-through"){
        list1.style.textDecoration = "none";
    } else {
        list1.style.textDecoration = "line-through";
    }
});
    tasklist.appendChild(list1);
    input.value = "";
    let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
list1.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function(){
        list1.remove();
    });


})

