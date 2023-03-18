const cookieValue1 = document.cookie.replace(
  /(?:(?:^|.*;\s*)connecter\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (document.cookie.indexOf("connecter") !== true) {
  const profilLink = document.querySelector(
    'a[href="./html/page-de-connexion.html"]'
  );

  const profilIcon = document.createElement("i");
  profilIcon.classList.add("fa-solid", "fa-user");

  const profilLinkReplacement = document.createElement("a");
  profilLinkReplacement.setAttribute("href", "profil.html");
  profilLinkReplacement.appendChild(profilIcon);

  profilLink.replaceWith(profilLinkReplacement);
}
