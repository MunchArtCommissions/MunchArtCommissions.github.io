document.getElementById("menu").onmouseover = function() {menuOver()};
document.getElementById("menu").onmouseout = function() {menuOut()};
document.getElementById("menu").onclick = function() {menuReplace()};
function menuOver() {
  document.getElementById("menu").style.color = "LightSkyBlue";
}
function menuOut() {
  document.getElementById("menu").style.color = "LightSlateGray";
}
function menuReplace() {
  window.location.href = "menu.html";
}

document.getElementById("guidelines").onmouseover = function() {guidelinesOver()};
document.getElementById("guidelines").onmouseout = function() {guidelinesOut()};
document.getElementById("guidelines").onclick = function() {guidelinesReplace()};
function guidelinesOver() {
  document.getElementById("guidelines").style.color = "LightSkyBlue";
}
function guidelinesOut() {
  document.getElementById("guidelines").style.color = "LightSlateGray";
}
function guidelinesReplace() {
  window.location.href = "guidelines.html";
}

document.getElementById("commission").onmouseover = function() {commissionOver()};
document.getElementById("commission").onmouseout = function() {commissionOut()};
document.getElementById("commission").onclick = function() {commissionReplace()};
function commissionOver() {
  document.getElementById("commission").style.color = "LightSkyBlue";
}
function commissionOut() {
  document.getElementById("commission").style.color = "LightSlateGray";
}
function commissionReplace() {
  window.location.href = "commission.html";
}

document.getElementById("contact").onmouseover = function() {contactOver()};
document.getElementById("contact").onmouseout = function() {contactOut()};
document.getElementById("contact").onclick = function() {contactReplace()};
function contactOver() {
  document.getElementById("contact").style.color = "LightSkyBlue";
}
function contactOut() {
  document.getElementById("contact").style.color = "LightSlateGray";
}
function contactReplace() {
  window.location.href = "contact.html";
}

document.getElementById("bust").onmouseover = function() {bustOver()};
document.getElementById("bust").onmouseout = function() {bustOut()};
//document.getElementById("bust").onclick = function() {bustReplace()};
function bustOver() {
  document.getElementById("bust").style.backgroundColor = "AliceBlue";
}
function bustOut() {
  document.getElementById("bust").style.backgroundColor = "White";
}
//function bustReplace() {
  //window.location.href = "contact.html";
//}

document.getElementById("halfbody").onmouseover = function() {halfbodyOver()};
document.getElementById("halfbody").onmouseout = function() {halfbodyOut()};
//document.getElementById("halfbody").onclick = function() {halfbodyReplace()};
function halfbodyOver() {
  document.getElementById("halfbody").style.backgroundColor = "AliceBlue";
}
function halfbodyOut() {
  document.getElementById("halfbody").style.backgroundColor = "White";
}
//function halfbodyReplace() {
  //window.location.href = "contact.html";
//}

document.getElementById("card").onmouseover = function() {cardOver()};
document.getElementById("card").onmouseout = function() {cardOut()};
//document.getElementById("card").onclick = function() {cardReplace()};
function cardOver() {
  document.getElementById("card").style.backgroundColor = "AliceBlue";
}
function cardOut() {
  document.getElementById("card").style.backgroundColor = "White";
}
//function cardReplace() {
  //window.location.href = "contact.html";
//}
