// TODO ﻿

var progress = 0;
var inventory = 0;
var pozice = 0;

function headerRoomSetter() {
  progress = 1;
  return "Pokoj číslo " + progress + ", '" + darkRoom.name + "'.";
};


function displayDynButton(elmID) {
  document.getElementById(elmID).style.display="block";
}

function hideDynButton(elmID) {
  document.getElementById(elmID).style.display="none";
}

function Room(name, left, right, ahead, msgLeft, msgAhead, msgRight, msgBack) {
	this.name = name;
	this.left = left;
	this.right = right;
	this.ahead = ahead;
  this.msgLeft = msgLeft;
  this.msgAhead = msgAhead;
  this.msgRight = msgRight;
  this.msgBack = msgBack;
  this.observe = function() {
    // pozice = 0 - jsem na začátku
    if (pozice == 0) {
      return "Před sebou máš: " + this.ahead + ", vlevo:  " + this.left + ", vpravo: " + this.right + ".";
    // pozice = 1 - jsem vlevo
    } else if (pozice == 1) {
      return "Před sebou máš: " + this.right + ", vlevo: " + this.ahead + ".";
    // pozice = 2 - jsem vepředu
    } else if (pozice == 2) {
      return "Vlevo máš: " + this.right + ", vpravo: " + this.left + ".";
    } else {
      return "Před sebou máš: " + this.left + ", vpravo: " + this.ahead + ".";
    }
  };
  this.goBack = function () {
    pozice = 0;
    return this.msgBack;
  };
  this.goLeft = function () {
    if (pozice == 0) {
      pozice = 1;
      return this.msgLeft;
    } else if (pozice == 1) {
      pozice = 2;
      return this.msgAhead;
    } else if (pozice == 2) {
      pozice = 3;
      return this.msgRight;
    } else {
      pozice = 0;
      return this.msgBack;
    }
  };
  this.goAhead = function () {
    if (pozice == 0) {
      pozice = 2;
      return this.msgAhead;
    } else if (pozice == 1) {
      pozice = 3;
      return this.msgRight;
    } else if (pozice == 2) {
      pozice = 0;
      return this.msgBack;
    } else {
      pozice = 1;
      return this.msgLeft;
    }
  };
  this.goRight = function () {
    hideDynButton("dynamicButton");
    if (pozice == 0) {
      pozice = 3;
      return this.msgRight;
    } else if (pozice == 1) {
      pozice = 0;
      return this.msgBack;
    } else if (pozice == 2) {
      pozice = 1;
      return this.msgLeft;
    } else {
      pozice = 2;
      return this.msgAhead;
    }
  };
  this.pickUp = function () {
    inventory = 1;
    document.getElementById("dynamicButton").style.display="none";
    return "Sebral jsi klíč."
  };
}

function Item(name) {
  this.name = name;
  this.takeItem = function() {
    inventory = 1;
    return "Sebral jsi " + this.name + ".";
  };
  this.useItem = function() {
    inventory = 0;
    return "Použil jsi " + this.name + ".";
  };
};

var darkRoom = new Room(
  "Dark Room",
  "komoda",
  "okno",
  "dveře",
  "Jsi u komody.",
  "Jsi u dveří.",
  "Jsi u okna.",
  "Jsi zpět na začátku."
);
darkRoom.interact = function() {
  if (pozice == 1) {
    return "Na komodě leží klíč.";
  } else if (pozice == 2) {
    return "Dveře jsou zamčené, asi to bude chtít klíč.";
  } else if (pozice == 3) {
    return "Venku je tma a prší.";
  } else {
    return "No jsi v dost špatně osvětleném pokoji a potřebuješ ven. Kapiš to?! Čím se vychází ven? Tak hybaj!";
  };
};

var klic = new Item("klíč");
