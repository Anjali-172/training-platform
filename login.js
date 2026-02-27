document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(email === "student@techverse.com" && password === "12345"){
        alert("Login Successful 🎉");
        window.location.href = "dashboard.html";
    } else{
        alert("Invalid Email or Password ❌")
    }
});