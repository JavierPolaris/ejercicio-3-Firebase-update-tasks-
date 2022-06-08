
//Me traigo mi db firestore
import { getTasks, insertTask, deleteTask, updateTask} from "./utils.js";
//console.log(db);
//Extraigo todos los documentos de tasks y creo tarjetas con ellos
getTasks();


//Obtenemos el form y capturamos el submit
const form = document.getElementById("task-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const task = {
        title: form["task-title"].value,
        description: form["task-description"].value
    }

    insertTask(task);
})


const buttonsCardD = document.getElementsByName("delete");
buttonsCardD.forEach(element => {
    element.addEventListener("click", () => {
        var divDelete = element.parentNode.parentNode;
        let contenedor = document.getElementById('contenedor');
        contenedor.removeChild(divDelete);
        //console.log("Estoy borrando la tarea: "+element.id);
        deleteTask(element.id);
    })
});

const buttonsCardA = document.getElementsByName('añadir');



buttonsCardA.forEach(element => {
    const inputNam = document.getElementsByName(element.id)
    
       
  
    element.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(document.querySelector('.tituloTar').value)
        
        
        const taskIn = {
            title: document.querySelector('.tituloTar').value,
            description: document.querySelector('.descriptionTar').value
            
        }
       
        updateTask(element.id, taskIn);
        // updateTask(element.id, taskIn);
    })
});


