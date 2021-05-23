import axios from "axios";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const instance = axios.create({
  baseURL: "http://192.168.1.178:1000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

let head = () =>
  (instance.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
    "idToken"
  )}`);

head();
setInterval(() => head(), 500);

export default instance;
