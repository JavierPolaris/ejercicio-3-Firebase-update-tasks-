
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc,updateDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQyDZBhvZiTTPzW6dwLpqKY09sVb6bVlU",
    authDomain: "primer-proyecto-4aa08.firebaseapp.com",
    projectId: "primer-proyecto-4aa08",
    storageBucket: "primer-proyecto-4aa08.appspot.com",
    messagingSenderId: "346752810474",
    appId: "1:346752810474:web:ff6b2f34593af4a47ac693"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "task"));

function createCard(id, task, i) {
    //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
    const principalDiv = document.createElement('div');
    principalDiv.setAttribute("class", "card bg-light mb-3");
    principalDiv.style = "max-width: 20rem;";
    principalDiv.setAttribute("name", id);
    principalDiv.setAttribute("id", i);
    //<div class="card-header">Formulario Tareas</div>
    const headerDiv = document.createElement('div');
    const contentDiv = document.createTextNode("Id: " + id);
    headerDiv.setAttribute("class", "card-header");

    headerDiv.appendChild(contentDiv);
    principalDiv.appendChild(headerDiv);
    // <div class="card-body">
    const bodyDiv = document.createElement('form');
    bodyDiv.setAttribute("name", "formulario")
    bodyDiv.setAttribute("class", "formulario")
    // const pTitle = document.createElement("p");
    // const pTitleText = document.createTextNode("Title: " + task.title);


    const pTitleInText = document.createElement("input");
    pTitleInText.type = "text";
    pTitleInText.value =  task.title ;
    // pTitleInText.placeholder = "Modifica Titulo";
    pTitleInText.setAttribute("name", "tituloTar");
    pTitleInText.setAttribute("class", "tituloTar");
   


    // const pTitleIn = document.createTextNode('placeholder' + task.title);
    const hr = document.createElement('hr');
    // const pDesc = document.createElement("p");
    // const pDescText = document.createTextNode("Description: " + task.description);


    const pDescInText = document.createElement("input");
    pDescInText.type = "text";
    pDescInText.value = task.description;
    // pDescInText.placeholder = "Modifica Descripción";
    pDescInText.setAttribute("name", "descriptionTar");
    pDescInText.setAttribute("class", "descriptionTar");
  


   
    bodyDiv.appendChild(pTitleInText);
    bodyDiv.appendChild(hr);
  
    bodyDiv.appendChild(pDescInText);
    bodyDiv.appendChild(hr);

    var inputAdd = document.createElement('input');
    inputAdd.type = "button";
    inputAdd.value = "Modificar";
    inputAdd.setAttribute("name", "añadir");
    inputAdd.setAttribute("class", "boton");
    inputAdd.setAttribute("id", id);
    bodyDiv.appendChild(inputAdd)


    var input = document.createElement("input");
    input.type = "button";
    input.value = "Borrar Tarea";
   
    input.setAttribute("name", "delete");
    input.setAttribute("class", "boton");
    input.setAttribute("id", id);
    bodyDiv.appendChild(input);

    principalDiv.appendChild(bodyDiv);

    let contenedor = document.getElementById('contenedor');
    contenedor.appendChild(principalDiv)

    // document.body.appendChild(principalDiv);
    const br = document.createElement("br");
    contenedor.appendChild(br);

}

export function getTasks() {
    let i = 0;
    querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        createCard(doc.id, doc.data(), i);
        i++
    });
}


function generateRandomIdTask(num) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
export async function insertTask(task) {
    await setDoc(doc(db, "task", generateRandomIdTask(20)), task);
    location.reload()
    alert("Insertada la tarea: " + task.title);
}

export async function deleteTask(id) {
    await deleteDoc(doc(db, "task", id));
    location.reload()
    alert("Borrada la tarea: " + id);
}

export async function updateTask(id, task){
    await updateDoc(doc(db, "task", id),task);
    location.reload()
    alert("Actaulaización: " + id);
}