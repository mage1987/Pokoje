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
      user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
    return user;
}

var v_actualUser = [
  checkCookie()
];

var v_initialMsg = "<p>\"Hello " + v_actualUser[0] + ", wake up now. I was told, you are " + v_actualUser[0] + ". Is it your name? Nevermind. Do you wanna play? What is this voice, you ask. Maybe you'll find out...\" <p> You woke up in a fairly large, badly lit room. An old, weak bulb is hanging on a wire from the ceiling. The corners of the room are not lit at all and it seems something creeps in the shadows there, watching you, snarling, gurgling. You rolled over, cleared your throat and stood up. The antient floor creaks with every step you take, there are several rotten holes in it. You have to be careful, you don't want to fall down to the utter darkness.<p>How you got here? No, you can't recall, no matter how much you try. Your head aches teribly, but you don't think you have been drinking. Or have you?<p>You better get out quickly. What you gonna do, " + v_actualUser[0] + "?";

var v_actualRoom = [
  "The Dark Room",
  1
];

var v_leftSide = [
  "Cupboard",
  "You are by a cupboard.",
  "You opened the cupboard. On the bottom you can barely see something resembling a key."
];

var v_frontSide = [
  "Door",
  "You stand in front of a dirty door.",
  "You tried the handle, but it seems to be locked. You'll need a key."
];

var v_rightSide = [
  "Window",
  "You are by a dusty window.",
  "It is dark outside, it rains. The window won't open."
];

var v_doorKey = [
  "Old Rusty key",
  "Looks like it was not stored properly. It's all rusty, slightly bent. You doubt it would unlock anything. But hey, don't give up now."
];
