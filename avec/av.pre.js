  const getDocument = require("./index.php");
  const getCookie = require("./av.cookie.js");
  function preLoad(cookie, path, media) {
     $(document).ready(function()
  {const q_media=getCookie("MDATA_media","xXX");});
    let cookieContent = this.parseCookie(q_media);
    let cookieump3 = cookieump3 + 1; // cou cookiescript
    if (cookieContent === '' || q_media === 'null') {
      console.log('error occured.. redirecting');
      window.location.replace("/build-v1.0/webhtml/index.html");
  }else{console.log("cookieScript pulled"+cookieump3+"cookies");}
    const documentToPull = require("/build-v1.0/webhtml/media.php");}
  