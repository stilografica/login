
// ELECTING ALL TEXT ELEMENTS
let username    = document.forms["vform"]["username"];
let email       = document.forms["vform"]["email"];
let tel         = document.forms["vform"]["tel"];
let pass        = document.forms["vform"]["pass"];
let pass2       = document.forms["vform"]["pass2"];


//SELECTING ALL ERROR DISPLAY ELEMENTS
let name_error      = document.getElementById("username_error");
let email_error     = document.getElementById("email_error");
let tel_error       = document.getElementById("tel_error");
let pass_error      = document.getElementById("pass_error");
let pass2_error     = document.getElementById("pass2_error");


//SETTING ALL EVENT LISTENERS

username.addEventListener("change", usernameVerify);
email.addEventListener("change", emailVerify);
tel.addEventListener("change", telVerify);
pass.addEventListener("change", passVerify);
pass2.addEventListener("change", pass2Verify);


//Validation function
function Validate() {
    let validador = true;

// validate username
    if (username.value.length<5) {
        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.textContent = "Username es obligatorio";
        username.focus();
        validador = false;
    }

// validate email
    let letrasEmail=/^[A-Za-z0-9\u0430-\u044F\u0410-\u042F\._-]+@([A-Za-z0-9\u0430-\u044F\u0410-\u042F]{1,2}|[A-Za-z0-9\u0430-\u044F\u0410-\u042F]((?!(\.\.))[A-Za-z0-9\u0430-\u044F\u0410-\u042F.-])+[A-Za-z0-9\u0430-\u044F\u0410-\u042F])\.[A-Za-z\u0430-\u044F\u0410-\u042F]{2,}$/;
    if (!letrasEmail.test(email.value)){
        email.style.border = "1px solid red";
        document.getElementById('email_div').style.color = "red";
        email_error.innerHTML = "Email incorrecto"; 
        username.focus();
        validador = false;
    }

//Validar password
    if(pass.value.length<6) {
        pass.style.border = "1px solid #5e6e66";
        document.getElementById('pass_div').style.color = "red";
        pass_error.textContent = "Password incorrecta";
        pass.focus();
        validador = false;
    }

//validar password con segunda password
    if ((pass.value)!=(pass2.value)) {
        pass2.style.border = "1px solid #5e6e66";
        document.getElementById('pass2_div').style.color = "red";
        pass2_error.textContent = "No coincide con la password anterior";
        pass2.focus();
        validador = false;

    }   

//validar tel
    let telefono= /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
    if (!(telefono.test(tel.value))) {
        tel.style.border = "1px solid #5e6e66";
        document.getElementById('tel_div').style.color = "red";
        tel_error.textContent = "Teléfono incorrecto";
        tel.focus();
        validador = false;

    }

    return validador;

}

//Event handler functions
function usernameVerify() {
    let boleano = false;
    if (username.value.length >=5 && isNaN(username.value)) {
        username.style.border = "1px solid #5e6e66";
        document.getElementById('username_div').style.color = "#0ec771";
        name_error.innerHTML = ""; 
        boleano = true;

    } else{

        username.style.border = "1px solid red";
        document.getElementById('username_div').style.color = "red";
        name_error.innerHTML = "Introduce sólo letras y mínimo 5 carácteres"; 

    }

    return boleano;
}

function emailVerify() {
    let boleano = false;
    let letrasEmail=/^[A-Za-z0-9\u0430-\u044F\u0410-\u042F\._-]+@([A-Za-z0-9\u0430-\u044F\u0410-\u042F]{1,2}|[A-Za-z0-9\u0430-\u044F\u0410-\u042F]((?!(\.\.))[A-Za-z0-9\u0430-\u044F\u0410-\u042F.-])+[A-Za-z0-9\u0430-\u044F\u0410-\u042F])\.[A-Za-z\u0430-\u044F\u0410-\u042F]{2,}$/;
    if (letrasEmail.test(email.value)){
        email.style.border = "1px solid #5e6e66";
        document.getElementById('email_div').style.color = "#0ec771";
        email_error.innerHTML = ""; 
        boleano = true;

    } else{

        email.style.border = "1px solid red";
        document.getElementById('email_div').style.color = "red";
        email_error.innerHTML = "Email no válido"; 

    }

    return boleano;
}

function telVerify() {
    let boleano = true;
    let telefono= /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;

    if (telefono.test(tel.value)) {
        tel.style.border = "1px solid #5e6e66";
        document.getElementById('tel_div').style.color = "#0ec771";
        tel_error.innerHTML = ""; 
        boleano = true;
    } else{

        tel.style.border = "1px solid red";
        document.getElementById('tel_div').style.color = "red";
        tel_error.innerHTML = "Teléfono incorrecto"; 

    }

    return boleano;
}

function passVerify() {
    
    let boleano = false;
    //se  pone la expre. regular entre / expresión/
    let passSegura=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/    
    if (passSegura.test(pass.value)) {
        pass.style.border = "1px solid #5e6e66";
        document.getElementById('pass_div').style.color = "#0ec771";
        pass_error.innerHTML = ""; 
        boleano = true;
       } else {
           
        pass.style.border = "1px solid red";
        document.getElementById('pass_div').style.color = "red";
        pass_error.innerHTML = "Verifica que contenga 6 carácteres | al menos 1 mayúscula | 1 minúscula | 1 número"; 

   }

    return boleano;
}

function pass2Verify() {
    let boleano = false;
    if ((pass.value)==(pass2.value)) {
        pass2.style.border = "1px solid #5e6e66";
        document.getElementById('pass2_div').style.color = "#0ec771";
        pass2_error.innerHTML = ""; 
        boleano = true;
        
        } else {
           
            pass2.style.border = "1px solid red";
            document.getElementById('pass2_div').style.color = "red";
            pass2_error.innerHTML = "No es igual al campo anterior"; 
        }  

    return boleano;
}


        