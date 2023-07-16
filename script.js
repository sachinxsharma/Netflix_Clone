function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin@gmail.com" && password == "admin") {
        window.location.href = "redirect.html";
        console.log("helloword")
        return true;
    }
    else {
        alert("Invalid Credentials");
        console.log("else")
        return false;
    }
}