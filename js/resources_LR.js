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

var v_initialMsg = "\"Oh, hi " + v_actualUser[0] + ". So you found the key I've hidden in the cupboard. What a skilful and clever boy.\" <br> There was a short silence and you thought The Voice kinda smiled and blinked, or something like that.<br> \"So let's play some more. What you say? It was pretty easy with those prepared buttons and all, right? Let's make it little harder. I'm giving you The Command Line. Yeah man, that field right in front of you. Enjoy, dude!\"<p>What da hell? You thougth. Somebody is shiting me, right? What am I supposed to do with that? Am I in a computer game? You remembered one of your first computers and the crude UI it had back then. Or better to say it didn't have. You looked around yourself. There is literally nothing around you, just white everywhere, endless. And obviously, The Command Line floating in the midair with big Execute! button and something like keyboard.</p><p>Alright, let's try it. What was the command to get some help in that ancient computer of yours...? \"</p> "; // nápis na první obrazovce, welcome pokoje

var v_actualRoom = [
  "The White Room",   // jméno pokoje
  2     // ID pokoje
];

var v_commands = [
  ": command not found",
  "Lookin'for help, eh? Let's play a game of riddles. An easy one for the start. The first one goes:<div style=\"text-align: center;\"><br><br>You must prove yourself worthy, friend<br>As the fellowship at The Mine<br>It's just one word that will take you to the end<br>If you know what's on my mind.</div>",
  "Yes. \"Friend\", \"Mellon\" in Quenya, is the word that opened the Mines of Moria when Gandalf said it. Now, here goes another riddle:<div style=\"text-align: center;\"><br><br>I, we are a crazy bunch, there is many of me, of us. Exactly b=m(5:9).<br>What is my name?<div style=\"color: white;\">TXkgbmFtZSBpcyBMZWdpb24sIGZvciB3ZSBhcmUgbWFueS4g</div></div>",
  "You are good as hell. And I'm tired of making up riddles. So, here is the last one:<div style=\"text-align: center;\"><br>There is a monster of monsters crafted by the prince of horror? It creeps in the darkness, terifying. It is dead, waiting. It is calling. What is it?</div><br>When you get it right, just exit The Command Line and you can leave. I'm bored... Fuck off",
  "Bingo! You got it! The command line dissapeared and a big button with a EXIT label poped-up in front of you. <p>So buckle your seatbelt, Dorothy, 'cause Kansas is going bye-bye...</p>"
];
