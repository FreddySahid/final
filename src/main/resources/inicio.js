var btnRegistrar = document.getElementById("ingresar")
btnRegistrar.addEventListener("click", function () {
    axios.post("https://finalproyectofreddy.herokuapp.com/usuarioB", {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    }).then(function(){
        if (response.data.access =="ok")
            window.location.replace(response.data.page)
        else
            alert("datos equivocados");
    })
})



function usuarios(){
    window.location.href="usuarios.html";
}


