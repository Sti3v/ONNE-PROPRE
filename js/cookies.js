const cookieValue1 = document.cookie.replace(
  /(?:(?:^|.*;\s*)connecter\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (cookieValue=true) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./css/connexion.css";
  document.head.appendChild(link);
} else {
  const link = document.querySelector('link[href="./css/connexioN;css"]');
  if (link) {
    link.parentNode.removeChild(link);
  }
}


