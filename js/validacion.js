function validar() {
    var ret_email = validar_email();
    var ret_pass1 = validar_pass1();
    var ret_pass2 = validar_pass2();
    var ret_addr  = validar_addr();
    var ret_comun = validar_comuna();
    var ret_zip   = validar_zip();
    var ret_phone = validar_phone();
    var ret_url   = validar_url();
    var ret_check = validar_check();
    return ret_email && ret_pass1 && ret_pass2 && ret_addr && ret_comun && ret_zip && ret_phone && ret_url && ret_check;
}

function validar_check() {
    var check = document.getElementById("check");
    var div = document.getElementById("msj_check");
    if(check.checked == true){
        div.innerText = "";
        div.className = "";
        return true;
    } else {
        div.innerText = 'Debe aceptar las condiciones de uso';
        div.className = 'm-1 alert alert-danger';
        return false;
    }
}

function validar_email() {
    var input = document.getElementById("email");
    var div = document.getElementById("msj_email");
    if (input.value != "") {
        if(input.value.length >= 5) {
            // Validación mediante manipular y analizar el String
            var correo = input.value;
            var pos_arroba = correo.indexOf('@');
            var pos_punto = correo.lastIndexOf('.');
            var arr_correo = correo.split('.');
            var extension = arr_correo[arr_correo.length - 1];
            if(pos_arroba > 3 && (pos_punto - pos_arroba) > 1 && extension.length > 1) {
                div.innerText = "El correo ingresado es valido";
                div.className = "m-1 alert alert-success";
                return true;
            } else {
                div.innerText = 'El campo "Correo electrónico" no tiene un formato válido';
                div.className = 'm-1 alert alert-danger';
                return false;
            }
        } else {
            div.innerText = 'El campo "Correo electrónico" debe tener al menos 5 carcteres';
            div.className = 'm-1 alert alert-danger';
            return false;
        }
    } else {
        div.innerText = 'El campo "Correo electrónico" es obligatorio';
        div.className = 'm-1 alert alert-danger';
        return false;
    }
    
}

function validar_pass1() {
    var input = document.getElementById("pass1");
    var div = document.getElementById("msj_pass1");
    if (input.value.length !=""){
        if (input.value.length >=3 && input.value.length<=6){
            div.innerText = "La contraseña es valida";
            div.className = "m-1 alert alert-success";
            return true; 
        } else{
            div.innerText = "El campo Contraseña tiene que tener entre 3 a 6 caracteres";
            div.className = "m-1 alert alert-danger";
            return false;
        }
    } else{
        div.innerText = "La contraseña no puede quedar vacia";
        div.className = 'm-1 alert alert-danger';
        return false;
    }
}

function validar_pass2() {
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var div = document.getElementById("msj_pass2");

    if (pass2.value.length !=""){
        if (pass1.value == pass2.value){
            div.innerText = "La contraseña coincide";
            div.className = "m-1 alert alert-success";
            return true;
        }else{
            div.innerText = "Las contraseñas no coinciden";
            div.className = 'm-1 alert alert-danger';
            return false;
        }
    } else{
        div.innerText = "El campo de confirmacion de la contraseña no puede quedar vacio";
        div.className = 'm-1 alert alert-danger';
        return false;
    }
}

function validar_addr(){
    var input = document.getElementById("addr")
    var div = document.getElementById("msj_addr")

    if (input.value.length != ""){
        if (input.value.length >=10){
            div.innerText = "Direccion ingresada correctamente";
            div.className = "m-1 alert alert-success";
            return true;

        } else{
            div.innerText = 'El campo direccion no puede tener menos de 10 caracteres';
            div.className = 'm-1 alert alert-danger';
            return false;
        }
    } else {
        div.innerText = 'El campo de direccion no puede quedar vacio';
        div.className = 'm-1 alert alert-danger';
        return false;
    }
}

function validar_comuna(){
    var input = document.getElementById("comuna")
    var div = document.getElementById("msj_comuna")

    if (input.value != ""){
        div.innerText = "";
        div.className = "";
        return true;
    } else{
        div.innerText = "Debe seleccionar una comuna";
        div.className = 'm-1 alert alert-danger';
        return false;
    }
}

function validar_zip(){
    var input = document.getElementById("zip");
    var div = document.getElementById("msj_zip");

    if (input.value.length == 7){
        if(!isNaN(input.value)){
            div.innerText = "El codigo postal es valido";
            div.className = "m-1 alert alert-success";
            return true;
        }else{
            div.innerText = "Debe ingresar un codigo postal";
            div.className = "m-1 alert alert-danger";
            return false;
        }
    }else{
        div.innerText = "El codigo postal tiene que tener 7 digitos";
        div.className = "m-1 alert alert-danger";
        return false;
    }

}

function validar_phone(){
    var input = document.getElementById("phone");
    var div = document.getElementById("msj_phone");

    if (input.value.length == 8){
        if(!isNaN(input.value)){
            div.innerText = "El numero ingresado es valido";
            div.className = "m-1 alert alert-success";
            return true;
        }else{
            div.innerText = "El dato ingresado no es valido";
            div.className = "m-1 alert alert-danger";
            return false;
        }
    }else{
        div.innerText = "El Numero telefonico no puede quedar vacio";
        div.className = "m-1 alert alert-danger";
        return false;
    }

}

function validar_url(){
    var input = document.getElementById("url");
    var div = document.getElementById("msj_url");
    if (input.value != ""){
        var link = input.value;
        var pos_https = link.indexOf('https://');
        var pos_com =link.lastIndexOf('.com');
        var arr_link = link.split('.');

        div.innerText = "La URL fue ingresada correctamente";
        div.className = "m-1 alert alert-success";
        return true;
    } else{
        div.innerText = "La URL no puede quedar vacia";
        div.className = "m-1 alert alert-danger";
        return false;
    }
}
