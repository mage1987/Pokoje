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

function Room(name, ident, sides) {
  this.name = name;
  this.ident = ident;
}

//Definice stran
function Side(name, coord, bDesc, dDesc, itemID) {
  this.name = name;
  this.coord = coord;
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
