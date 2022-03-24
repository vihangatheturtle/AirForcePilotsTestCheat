  harvir.src = yachet;
  harvir.type = "text/javascript";
  harvir.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(harvir);
}
if (document.title == "Air Force Pilot's Test") {
  include("https://cosmosbot.ga/cdn/Content/console_image_min.js");
  setTimeout(function () {
    console.log("Make sure you switch JavaScript context to: I1 (skill_test_board.htm) and try again\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  }, 500);
}
;
setTimeout(function () {
  if (document.title == "Air Force Pilot's Test") {
    console.image("https://i.imgur.com/5cmahZR.png");
    alert("Make sure you switch JavaScript context to: I1 (skill_test_board.htm) and try again.\n\nLook in console for instructions");
    document.location.reload();
  }
}, 1e3);
var noreptime = 0;
var norep = 0;
var nono = 0;
var cstarttime = null;
var t = document.createElement("p");
t.id = "timer-stopwatch";
var eone = document.createElement("p");
eone.id = "e1-lbl";
var etwo = document.createElement("p");
etwo.id = "e2-lbl";
var ethree = document.createElement("p");
ethree.id = "e3-lbl";
var efour = document.createElement("p");
efour.id = "e4-lbl";
var e0 = document.getElementById("enemy0");
var e1 = document.getElementById("enemy1");
var e2 = document.getElementById("enemy2");
var e3 = document.getElementById("enemy3");
var player = document.getElementById("box");
player.appendChild(t);
var enemy1 = document.getElementById("enemy0");
enemy1.appendChild(eone);
var enemy2 = document.getElementById("enemy1");
enemy2.appendChild(etwo);
var enemy3 = document.getElementById("enemy2");
enemy3.appendChild(ethree);
var enemy4 = document.getElementById("enemy3");
enemy4.appendChild(efour);
document.getElementById("timer-stopwatch").style.margin = "0";
document.getElementById("e1-lbl").style.margin = "0";
document.getElementById("e1-lbl").style.marginLeft = "6";
document.getElementById("e1-lbl").textContent = "Enemy";
document.getElementById("e2-lbl").style.margin = "0";
document.getElementById("e2-lbl").style.marginLeft = "28";
document.getElementById("e2-lbl").textContent = "Enemy";
document.getElementById("e3-lbl").style.margin = "0";
document.getElementById("e3-lbl").style.marginLeft = "-8";
document.getElementById("e3-lbl").textContent = "Enemy";
document.getElementById("e4-lbl").style.margin = "0";
document.getElementById("e4-lbl").style.marginLeft = "8";
document.getElementById("e4-lbl").textContent = "Enemy";
function normal() {
  e0.style.left = +e0.style.left.split("px")[0] - 500;
  e1.style.left = +e1.style.left.split("px")[0] - 500;
  e2.style.left = +e2.style.left.split("px")[0] - 500;
  e3.style.left = +e3.style.left.split("px")[0] - 500;
  nono = 1;
  norep = 0;
  document.getElementById("timer-stopwatch").style.opacity = "0";
}
function formatTime(niclaus) {
  var milya = niclaus / 1e3;
  var morgann = Math.floor(milya / 3600);
  var leianne = Math.floor(milya % 3600 / 60);
  var shalia = milya % 3600 % 60;
  shalia = Math.round(shalia);
  var marthann = pad(morgann, 2) + ":" + pad(leianne, 2) + ":" + pad(shalia, 2);
  return marthann;
}
function pad(darleni, ghenet) {
  var darleni = darleni + "";
  return darleni.length >= ghenet ? darleni : new Array(ghenet - darleni.length + 1).join("0") + darleni;
}
function timecounter(cstarttime) {
  currentdate = new Date;
  var aben = currentdate.getTime() - cstarttime;
  return formatTime(aben);
}
function stopwatch() {
  if (cstarttime != null) {
    return timecounter(cstarttime);
  } else {
    console.log("Timer has not started yet, click within the game area to start");
  }
}
document.getElementById("box").ondblclick = function () {
  normal();
  norep = 1;
  setTimeout(function () {
    norep = 0;
  }, 1e3);
};
document.body.onmousedown = function () {
  if (norep == 0) {
    if (noreptime == 0) {
      currentdate = new Date;
      currentdate = currentdate.getTime();
      cstarttime = currentdate;
      noreptime = 1;
    }
    ;
    norep = 1;
    nono = 0;
    document.getElementById("timer-stopwatch").textContent = "00:00:00";
    document.getElementById("timer-stopwatch").style.margin = "0";
    document.getElementById("timer-stopwatch").style.marginLeft = "-8";
    document.getElementById("timer-stopwatch").style.opacity = "1";
    e0.style.left = +e0.style.left.split("px")[0] + 500;
    e1.style.left = +e1.style.left.split("px")[0] + 500;
    e2.style.left = +e2.style.left.split("px")[0] + 500;
    e3.style.left = +e3.style.left.split("px")[0] + 500;
    setInterval(function () {
      document.getElementById("timer-stopwatch").textContent = stopwatch();
    }, 100);
  }
};
// L deobfuscated ur code
