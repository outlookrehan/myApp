function save() {
    var obj = {
        email : document.getElementById("userEmail").value,
        pass : document.getElementById("userPass").value
    }
    if (obj.email === "" || obj.email === " ") {
        alert("email required");
    }
    else if (obj.pass === "" || obj.pass === " ") {
        alert("password required");
    }
    else {
        localStorage.setItem("data",JSON.stringify(obj));
        document.getElementById("fieldLegend").innerHTML = "Login";
        document.getElementById("userEmail").value = "";
        document.getElementById("userPass").value = "";
        document.getElementById("fieldButton").innerHTML = 
        "<input type='button' value='LOGIN' onclick='login()'>";
    }
}
function login() {
    email = document.getElementById("userEmail").value;
    pass = document.getElementById("userPass").value;
    if (email === "" || email === " ") {
        alert("email required");
    }
    else if (pass === "" || pass === " ") {
        alert("password required");
    }
    else {
        data = localStorage.getItem("data");
        data = JSON.parse(data);
        if (data.email === email && data.pass === pass) {
            alert("login successful");
            //document.getElementById("userEmail").value = "";
            //document.getElementById("userPass").value = "";
        }
        else {
            alert("Error")
        }
    }
}