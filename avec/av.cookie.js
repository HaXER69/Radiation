    var a;
    var cou;
    
    function createCookie(name, value, days) {
    var expires;
    if (days) { var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString(); }
    else { expires = ""; }
      document.cookie = escape(name) + "=" +
        escape(value) + expires + "; path=/";
      let cou = cou + 1;
      const cookieNum = cou;
      const construct_COOKIE = name + "=" +
        value + expires + "; path=/";
      localStorage.setItem(cookieNum, construct_COOKIE);
    }
    
    function getCookie(name, value) {
    let cookie = localStorage.getItem("cookie=");
    let cookies = cookie.split(';');
    let ret = '';
    for (let i = 1; i <= cookies.length; i++) {
        ret += i + ' - ' + cookies[i - 1] + "\n";
    } return ret; }
    
  function parseCookie(content, ASCII) {escape(content);}
  
  function avCookies(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}