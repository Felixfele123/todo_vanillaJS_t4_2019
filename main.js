let fakeDataBase;

if(localStorage.getItem("todo2019"))
{
    fakeDataBase = JSON.parse(localStorage.getItem("todo2019"));
}
else{
    fakeDataBase = [];
}

let order = true;

_id("orderButton").addEventListener("click",changeOrder)

function changeOrder(){
    order = !order;

    renderFakeData();
}


renderFakeData();

function renderFakeData(){
    //skapa html från vår fakeDataBase
    let htmlOutput = fakeDataBase.map(function(taskObject,index){
        return `
        <div>
             <h1 id = "${index}">${taskObject.task} <sub>${taskObject.ready}</sub></h1>
             <button onclick = "deleteTask(${index})"> Delete </button>
             <button onclick = "doneTask(${index})"> Done </button>

        </div>`;
    });
    
    if(order)
    {
        document.getElementById("taskList").innerHTML = htmlOutput.join("")
    }
    else
    {
        document.getElementById("taskList").innerHTML = htmlOutput.reverse().join("")

    }
}

//lyssna efter form-submit

document.getElementById("taskForm").addEventListener("submit", addTask);

function addTask(event){

    event.preventDefault();
      
    //hämta input data
    let inputText = document.getElementById("taskId").value;
    //skapa ett task-object 
    if(inputText.trim() != "")
    {
      let taskObject = {id: Date.now() ,task:inputText, ready:false}
      //spara i fakeDataBase

     

     

      fakeDataBase.push(taskObject);
      //rendera på nytt
    renderFakeData();
    
     //spara lokalt
    saveLocal();


    }
    document.getElementById("taskId").value = "";
    document.getElementById("taskId").focus();
}
function _id(id){
    return document.getElementById(id);
}

function deleteTask(index){
    fakeDataBase.splice(index,1);
    renderFakeData();

    saveLocal();
}

function doneTask(index){
    let taskObject = fakeDataBase[index];
    taskObject.ready = !taskObject.ready;
    renderFakeData();
    
    saveLocal();
}




function saveLocal()
    {
        localStorage.setItem("todo2019", JSON.stringify(fakeDataBase));
    }


//helpers
function id(id){

}