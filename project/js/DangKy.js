function backLogIn(){
    window.location.href = 'DangNhap.html'
}

function register(e){
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phoneNumbers = document.getElementById("phoneNumbers").value;
    var password = document.getElementById("password").value;
    var user = {
        userName: userName,
        email: email,
        phoneNumbers: phoneNumbers,
        password: password,
    };
    var json = JSON.stringify(user) || [];
    localStorage.setItem(userName,json);
    window.location.href = 'DangNhap.html'
}