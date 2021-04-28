function login () {
   user_name = document.getElementById("userinput").value

   localStorage.setItem("user", user_name)

   window.location = "kwitter_room.html"
}