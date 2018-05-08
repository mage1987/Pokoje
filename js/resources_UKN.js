function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user == "") {
      user = prompt("Hello human, enter a name, if you don't wanna be called null:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
    return user;
}

var v_actualUser = [
  checkCookie()
];

var v_initialMsg = "\"Good, good, " + v_actualUser[0] + ", again you prevailed and got through. Job well done! You might even get a cake in the end\". <p>\"Now, let's try something else. Just go ahead and push that big red button in from of ya. Don't worry, no nukes are controled by it.\", said the uknown voice and yet again you thought it kinda wanted to put a blinking smiley to the end of the sentence.</p><p>When you left the white room, you found yourself standing in pitch black. Just when the voice went silent a red glowing button poped up in the midair in front of you.</p> <p>Should I push it, you thought. But what else can you do?</p>";

var v_actualRoom = [
  "The Unknown's Playground",   // jméno pokoje
  3     // ID pokoje
];
