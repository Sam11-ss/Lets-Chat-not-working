var firebaseConfig = {
    apiKey: "AIzaSyAJPVgb9w9oOrI9oob0BGZgYxhrvbOQhhk",
    authDomain: "let-s-chat-18660.firebaseapp.com",
    projectId: "let-s-chat-18660",
    storageBucket: "let-s-chat-18660.appspot.com",
    messagingSenderId: "358639838347",
    appId: "1:358639838347:web:e59dbec3357718eaa2608e"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem('UserName');
document.getElementById("user_name_label").innerHTML="Welcome " + user_name + "!";

function add_room() {
        roomname = document.getElementById("room_name_input").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"Adding room name"          
    });
    localStorage.setItem("RoomName" , roomname);
    window.location="chat_page.html";

}


    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name = "+ Room_names);
row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML+=row; 
//End code
});});}
getData();

function redirectToRoomName(name){s
    console.log(name);
    localStorage.setItem("RoomName" , name);
    window.location="chat_page.html";
}
function logout() {
    localStorage.removeItem("UserName");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}
