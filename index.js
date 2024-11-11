const todos = [

]

const container = document.getElementById("container");
const Input = document.getElementById("Input");
const btnadd = document.getElementById("btnadd");






btnadd.addEventListener("click" , ()=>{

    const todovalue = {
        todoinput:Input.value,
      
    }





todos.push(todovalue);
Input.value =""
 

const p = document.createElement("h2");
const div = document.createElement("div");

let text = p.innerText = todovalue.todoinput
    

if(text.length <= 0){
    div.appendChild(text)
    container.appendChild(div)
}


const btndelete = document.createElement("button");
btndelete.innerText = "Delete"
btndelete.className = "btnDelete"


btndelete.addEventListener("click", () => {
   
    todos.splice(todos.indexOf(todovalue), 1);

    
    container.removeChild(div);
   

})



const btnedit =document.createElement("Edit");
btnedit.innerText = "Edit"
btnedit.className = "btnEdit"

btnedit.addEventListener("click", () =>{

    todos.splice(todos.indexOf(todovalue) , 1);


    Input.value = todovalue.todoinput

    
    container.removeChild(div);

})


    div.appendChild(p);
    div.appendChild(btnedit);
    div.appendChild(btndelete);

    
    container.appendChild(div);


})