// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBtpqYMZz5erD8r8iWLrLN_lynYme1OPuo",
      authDomain: "kwitter-8d505.firebaseapp.com",
      databaseURL: "https://kwitter-8d505-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d505",
      storageBucket: "kwitter-8d505.appspot.com",
      messagingSenderId: "356169235983",
      appId: "1:356169235983:web:b7ef7800fa0f7877b6ad7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user")
document.getElementById("welcomeuser").innerHTML = "Welcome " + user_name
function addroom () {
      room_name = document.getElementById("roominput").value
      localStorage.setItem("room", room_name)
      firebase.database().ref("/").child(room_name).update ({
            room_name : "Added successfully"
      
      })
      document.getElementById("roominput").value = ""
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
room_tag = `<div class="room_name" id=${Room_names} onclick="gotoRoom(this.id)">${Room_names}</div><hr>`
document.getElementById("output").innerHTML += room_tag
      //End code
      });});}
getData();
function gotoRoom (room) {
console.log(room)
localStorage.setItem("room", room)
window.location = "kwitter_page.html"

}
function logout () {
      localStorage.removeItem("user")
      localStorage.removeItem("room")
      window.location = "index.html"
}