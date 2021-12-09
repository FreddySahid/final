

/*Crear preguntas**************************************************************************************/

var btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", agregar);

var txtTarea = document.getElementById("pregunta");
var listTareas = document.getElementById("preguntas");



function agregar() {
    let tarea = document.createElement("li");
    tarea.textContent = txtTarea.value;
    let botonBorrar = document.createElement("button");
    let botonEditar = document.createElement("button");
    let botonRespuestas = document.createElement("button");

    
    botonBorrar.innerHTML = "Borrar";
    botonEditar.innerHTML = "Editar";
    botonRespuestas.innerHTML = "Agregar respuestas"
    udio = document.createElement('video');
    
    let archivo = document.createElement("li");
    archivo.textContent = video.value;


    
    listTareas.appendChild(tarea);
    listTareas.appendChild(botonBorrar);
    listTareas.appendChild(botonEditar);
    listTareas.appendChild(botonRespuestas);
    listTareas.appendChild(archivo);
    console.log("dentro de función" + tarea);

    
}



//Enviar preguntas a la base de datos

btnAgregar.addEventListener("click", function(){
    
    
    axios.post("http://localhost:4567/pregunta", {
        pregunta : document.getElementById("pregunta").value,
        video : document.getElementById('video').value
        
        
        
        
    })
    .then(function (response) {
        alert("mensaje: pregunta creada "+response.data.status+" con id: "+response.data.id);
        id = response.data.id;
        estado=response.data.status;
    })
    .catch(function (error) {
        console.log(error);

        
    })
});

console.log("fuera de función:" + tarea);


