var firebaseConfig = {
    apiKey: "AIzaSyBEE1rUi9ks4sCJVP2_bqgd2QRfWeBR7ZE",
    authDomain: "kwitter-project-6dc41.firebaseapp.com",
    projectId: "kwitter-project-6dc41",
    storageBucket: "kwitter-project-6dc41.appspot.com",
    messagingSenderId: "564708022900",
    appId: "1:564708022900:web:fe1630cf8af1a4570d4f21"
  };
function addUser(){
    var name = document.getElementById("user_name").value;
    localStorage.setItem("username", name);
    window.location = "kwitter_room.html";
}