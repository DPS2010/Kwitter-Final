//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user")
room_name = localStorage.getItem('room')
function send () {
      message = document.getElementById("msg").value 
firebase.database().ref(room_name).push({
      MESSAGE : message,
      LIKES : 0,
      USER : user_name
})
document.getElementById("msg").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
user = message_data["USER"]
user_tag = `<h3>${user} <img class="user_tick" src="tick.png"></h4>`
message = message_data["MESSAGE"]
message_tag = `<h4 class="message_h4">${message}</h4>`
likes = message_data["LIKES"]
like_tag=`<button id=${firebase_message_id} class="btn btn-primary" value=${likes} onclick="updateLike(this.id)" ><span class="glyphicon glyphicon-thumbs-up"></span> Like : ${likes}</button><hr>`


document.getElementById("output").innerHTML += user_tag + message_tag + like_tag
//End code
      } });  }); }
      function logout () {
            localStorage.removeItem("user")
            localStorage.removeItem("room")
            window.location = "index.html"
      }
getData();

function updateLike (btnid) {
      get_likes = document.getElementById(btnid).value
      updatedlikes = Number(get_likes)+1
      firebase.database().ref(room_name).child(btnid).update({
            LIKES : updatedlikes
      })
}
