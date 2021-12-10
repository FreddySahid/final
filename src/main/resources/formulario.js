

var idpregunta;
/************************************Crear preguntas********************************************************/

var btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", agregar);

var txtTarea = document.getElementById("pregunta");
var listTareas = document.getElementById("preguntas");


var btnAgregarRespuestas = document.getElementById("agregaRespuesta");


var txtRespuesta = document.getElementById("respuesta");



function agregar() {
    let tarea = document.createElement("li");
    tarea.textContent = txtTarea.value;

    let botonRespuestas = document.createElement("button");

   /*let botonBorrar = document.createElement("button");
    let botonEditar = document.createElement("button");*/
   /*botonBorrar.innerHTML = "Borrar";
    botonEditar.innerHTML = "Editar";*/
    botonRespuestas.innerHTML = "Agregar respuestas";

    
    let archivo = document.createElement("li");
    archivo.textContent = video.value;
    

    

    listTareas.appendChild(tarea);
    /*listTareas.appendChild(botonBorrar);
    listTareas.appendChild(botonEditar);*/
    listTareas.appendChild(botonRespuestas);
    listTareas.appendChild(archivo);
/****************************Agrega la respuesta a la lista de opción multiple*******************************/
    btnAgregarRespuestas.addEventListener("click", function(){
        let resp = document.createElement("label");
        resp.textContent = txtRespuesta.value;
        //Agrega la respuesta a la base de datos
        axios.post("http://localhost:4567/respuesta", {
        respuesta : document.getElementById("respuesta").value,
        foranea : idpregunta

      
        })
        .then(function (response) {
            alert("mensaje: pregunta creada "+response.data.status+" con id: "+response.data.id);
            id = response.data.id;
            estado=response.data.status;
        })
        .catch(function (error) {
            console.log(error);

            
        })
        
        txtRespuesta.value = null;
        let salto = document.createElement("br");
        listTareas.appendChild(resp);
        listTareas.appendChild(salto);
        resp = null;
        
        console.log("dentro de función" + resp);


        

    });
    
    /************************Abre la ventana emergente para agregar la respuesta*******************************/
    overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    botonRespuestas.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function(e){
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    })


    console.log("dentro de función" + tarea);

    

    
}



/*************************Enviar preguntas a la base de datos************************************************/

btnAgregar.addEventListener("click", function(){
    
    
    axios.post("http://localhost:4567/pregunta", {
        pregunta : document.getElementById("pregunta").value,
        video : document.getElementById('video').value
 
        
    })
    .then(function (response) {
        alert("mensaje: pregunta creada "+response.data.status+" con id: "+response.data.id);
        id = response.data.id;
        idpregunta = id;
        estado=response.data.status;
    })
    .catch(function (error) {
        console.log(error);

        
    })
});



console.log("fuera de función:" + tarea);


