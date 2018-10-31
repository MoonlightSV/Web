var carpet = document.getElementById('img_carpet');

function move() {
    carpet.style.top = '80px';
}

function back(){
    carpet.style.top = '16px';
}

var login = document.getElementById('inp_login')
var pass = document.getElementById('inp_pass')

function sign_in(){
    if (login.value === "admin" && pass.value === "admin")
        document.location.href = "http://www.google.com";
}