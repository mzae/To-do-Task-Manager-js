const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messageSpan = document.querySelector(".message span");
const searchForm = document.querySelector(".search-box");

function updatemessage(){
    const textlength = tasks.children.length;
    messageSpan.textContent = `You have ${textlength} pending tasks.`;
}

updatemessage();

addForm.addEventListener("submit", event=> {
    event.preventDefault();
    const value = addForm.task.value.trim();

    if(value.length){
        tasks.innerHTML += 
        `<li>
        <span>${value}</span> 
        <i class="bi bi-trash-fill delete"></i>
        </li>`;
        addForm.reset();
        updatemessage();

    }

})

tasks.addEventListener("click", event=> {
    if(event.target.classList.contains("delete")){
            event.target.parentElement.remove();
            updatemessage();

    }
});

clearAll.addEventListener("click", event=> {
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(element => {
        element.remove();
    });
    updatemessage();

});

function filterTask(term){
    const list = Array.from(tasks.children).filter(task =>{
        const text = task.textContent.toLowerCase();
        task.style.display = text.includes(term.toLowerCase())? "block" : "none";
        return !task.textContent.toLowerCase().includes(term);       
    });
    console.log(task =>{
        task.classList.add(".hide");
    });

    Array.from(tasks.children).filter(task => {
        return task.textContent.toLowerCase().includes("term");
    })
    .forEach(task => { 
        task.classList.remove(".hide");
    })
}
 
searchForm.addEventListener("keyup", event=>{
    const term = searchForm.task.value.trim();
    filterTask(term);
    
});

searchForm.addEventListener("click", event =>{
    if(event.target.classList.contains("reset")){
        searchForm.reset();
        const term = searchForm.task.value.trim();
        filterTask("term");
        
    }
});
