function backRegister(){
    window.location.href = 'DangKy.html'
}   

function logIn(e){
    e.preventDefault()
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(userName);
    var data = JSON.parse(user);
    if(userName==data.userName && password == data.password){
        window.location.href = 'project.html'
    }
}

let errorLogIn = document.getElementById("errorLogIn");
var userName = document.getElementById("userName").value;
var password = document.getElementById("password").value;
var user = localStorage.getItem(userName);

let formLogIn = document.getElementById("formLogIn");
formLogIn.addEventListener("submit", function(e){
    e.preventDefault();
    if(!userName && !password){
        errorLogIn.style.display = "block"
    }
})