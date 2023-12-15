function settings_proxy() {
  location.href = './webphp/edit.php';
}
function settings_proxy_adv() {
  location.href = './webhtml/phpprox.html';
}
function settings_site()  {
  location.href = './webhtml/settings.html';
  const manifestation = require('manifest.json');
  //manifest declaration
}
function redirect_about() {
  location.href = './webhtml/docs.html';
}

function redirect_refer() {
  location.href = './webhtml/index.html';
}

function showDrp() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function beginBrowser() {
  // final show/hide
  this.toggleElement("getStarted");
  this.showEL("display_container");
}

function toggleElement(a) {
  var element = document.getElementById(a);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function showEL(a) {
  document.getElementById(a).classList.toggle("show");
}

function hideEL(a) {
  document.getElementById(a).classList.toggle("hide");
}

function colorElement(element, hex) {document.getElementById(element).style.color=hex
  window.localStorage("siteColor",hex)
}

  function que() {
    const docCloak = document.getElementByID("cloak-title").value;
    document.title = docCloak; window.localStorage.setItem("siteCL",docCloak)}

  function createCookie(name, value, days) {
    var expires;
    if (days) { var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString(); }
    else { expires = ""; }
      document.cookie = escape(name) + "=" +
        escape(value) + expires + "; path=/"; }