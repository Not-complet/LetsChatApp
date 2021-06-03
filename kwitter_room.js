var firebaseConfig = {
    apiKey: "AIzaSyBEE1rUi9ks4sCJVP2_bqgd2QRfWeBR7ZE",
    authDomain: "kwitter-project-6dc41.firebaseapp.com",
    projectId: "kwitter-project-6dc41",
    storageBucket: "kwitter-project-6dc41.appspot.com",
    messagingSenderId: "564708022900",
    appId: "1:564708022900:web:fe1630cf8af1a4570d4f21"
  };
  var room_code = 0;
  let username = localStorage.getItem("username");
  document.getElementById("current_user").innerHTML="Welcome "+ username+"!";
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
    room_code = document.getElementById("room_num").value;
    firebase.database().ref("/").child(room_code).update({
      purpose: "adding room code"
    });
    localStorage.setItem("room_code", room_code);
    window.location = "kwitter_page.html";
  }
 function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name: " + Room_names);
  row = "<div style='border-radius:10px; background-color:white;' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML = row;
 //End code
 });});}
getData();

 function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_code", room_code);
   window.location = "kwitter_page.html";
 }
 function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("room_code");
   window.location = "index.html";
 }