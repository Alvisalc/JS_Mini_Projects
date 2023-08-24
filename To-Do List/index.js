const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Add task function
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //save data after added the task
}

//By click the add button
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); //save data
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //save data
    }
}, false);

//save data function
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//show task function
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

//show all the task at the end
showTask();