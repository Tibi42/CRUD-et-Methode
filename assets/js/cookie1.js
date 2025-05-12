document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les éléments DOM nécessaires
  const cookieConsentModal = document.getElementById("cookieConsentModal");
  const cookieWarningModal = document.getElementById("cookieWarningModal");
  const userNameModal = document.getElementById("userNameModal");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const userNameSpan = document.getElementById("userName");
  const userNameInput = document.getElementById("userNameInput");

  const acceptCookiesButton = document.getElementById("acceptCookies");
  const declineCookiesButton = document.getElementById("declineCookies");
  const closeWarningButton = document.getElementById("closeWarning");
  const saveUserNameButton = document.getElementById("saveUserName");

  // Fonction pour gérer les cookies
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }

  // Afficher ou masquer les modales en fonction des cookies
  const userName = getCookie("userName");
  const cookiesAccepted = getCookie("cookiesAccepted");

  if (!cookiesAccepted) {
    cookieConsentModal.classList.remove("hidden");
  } else if (cookiesAccepted === "true" && !userName) {
    userNameModal.classList.remove("hidden");
  } else if (userName) {
    userNameSpan.textContent = userName;
    welcomeMessage.classList.remove("hidden");
  }

  // Gestion des boutons
  acceptCookiesButton.addEventListener("click", () => {
    setCookie("cookiesAccepted", "true", 365);
    cookieConsentModal.classList.add("hidden");
    userNameModal.classList.remove("hidden");
  });

  declineCookiesButton.addEventListener("click", () => {
    setCookie("cookiesAccepted", "false", 365);
    cookieConsentModal.classList.add("hidden");
    cookieWarningModal.classList.remove("hidden");
  });

  closeWarningButton.addEventListener("click", () => {
    cookieWarningModal.classList.add("hidden");
  });

  saveUserNameButton.addEventListener("click", () => {
    const name = userNameInput.value.trim();
    if (name) {
      setCookie("userName", name, 365);
      userNameSpan.textContent = name;
      userNameModal.classList.add("hidden");
      welcomeMessage.classList.remove("hidden");
    }
  });
});
