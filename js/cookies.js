const cookieValue1 = document.cookie.replace(
  /(?:(?:^|.*;\s*)connecter\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (cookieValue=true) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./css/connexion.css";
  document.head.appendChild(link);
}


