function addUser(){
    var name = document.getElementById("user_name").value;
    localStorage.setItem("username", name);
    window.location = "kwitter_room.html";
}