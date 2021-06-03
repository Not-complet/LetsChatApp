var firebaseConfig = {
    apiKey: "AIzaSyBEE1rUi9ks4sCJVP2_bqgd2QRfWeBR7ZE",
    authDomain: "kwitter-project-6dc41.firebaseapp.com",
    databaseURL: "https://kwitter-project-6dc41-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-6dc41",
    storageBucket: "kwitter-project-6dc41.appspot.com",
    messagingSenderId: "564708022900",
    appId: "1:564708022900:web:fe1630cf8af1a4570d4f21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var room_code = localStorage.getItem("room_code");
var user_name = localStorage.getItem("username");
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_code");
    window.location.replace("index.html");
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_code).push({
        name:user_name,
        message:msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_code).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data["name"];
        message = message_data["message"];
        like = message_data["like"];
        message_tag = "<h4 class='message_h4'>"+message+"</h4>";
        name_tag = "<h4>"+name+"</h4>";
        like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"'value='"+like+"' onclick='updateLike(this.id)>";
        span_tag ="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";
        row = "<div style='background-color:white; border-radius:10px; width:50%;'>"+name_tag+message_tag+like_button+span_tag+"</div>";
        document.getElementById("output").innerHTML =row;
        document.getElementById("chat_title").innerHTML="Welcome to room #" + room_code;
    } });  }); }
    getData();
    function updateLike(message_id){
        console.log("clicked on like button: "+message_id);
        button_id = message_id;
        likes=document.getElementById(button_id).value;
        updatedLikes = Number(likes) +1;

        firebase.database().ref(room_code).child(message_id).update({
            like: updatedLikes
        });
    }