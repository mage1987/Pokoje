// Definice hlavnich objektu a globalnich promennych

// Definice uzivatele/hrace
function Pawn(name, actPosition) {
  this.name = name;
  this.actPosition = actPosition;
  this.lookAround = function() {

  };
  this.explore = function() {

  };
  this.walk = function() {

  };
  this.takeItem = function() {

  };
  this.useItem = function() {

  };
  this.solve = function() {

  };
}

function Room(name, ident) {
  this.name = name;
  this.ident = ident;
}

//Definice stran
function Side(coord, name, bDesc, dDesc, itemID) {
  this.coord = coord;
  this.name = name;
  this.bDesc = bDesc;
  this.dDesc = dDesc;
  this.itemID = itemID;
}

//Definice veci
function Item(iid, name, desc, is_owned) {
  this.iid = iid;
  this.name = name;
  this.desc = desc;
  this.is_owned = is_owned;
}

//Definice slotu inventare
function invSlot(ocupied, itemID) {
  this.ocupied = ocupied;
  this.itemID = itemID;
}

//Dalsi pomocne fce
// 1) Vypisovani stringu do html elementu
function WritePageOutput(msg_output, msg_dest) {
  this.msg_output = msg_output;
  this.msg_dest = msg_dest;
  document.getElementById(msg_dest).innerHTML = msg_output;
}

// 2) Zobrzeni elementu zmenou css classy
function DisplayDynButton(elmID, r_class, a_class) {
  document.getElementById(elmID).classList.remove(r_class);
  document.getElementById(elmID).classList.add(a_class);
}

// 3) Cteni user inputu
/*function ReadPlayerCmd(inputElementId) {
  var playerCmd = document.getElementById(inputElementId).value;
  console.log(playerCmd);
  document.getElementById(inputElementId).value = null;
  return playerCmd;
}*/
