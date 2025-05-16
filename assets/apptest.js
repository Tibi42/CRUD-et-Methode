document.addEventListener("DOMContentLoaded", function () {
  const modalCookie = document.getElementById("cookieModal");
  const cookiesAccept = document.getElementById("acceptCookies");
  const cookiesRefuse = document.getElementById("refuseCookies");
  const cookieConsent = "cookieConsent";

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function acceptCookies() {
    setCookie(cookieConsent, "accepted", 30);
    modalCookie.style.display = "none";
  }

  function refuseCookies() {
    setCookie(cookieConsent, "refused", 30);
    modalCookie.style.display = "none";
  }

  cookiesAccept.addEventListener("click", acceptCookies);

  cookiesRefuse.addEventListener("click", refuseCookies);

  if (getCookie(cookieConsent) === null) {
    modalCookie.style.display = "block";
  } else {
    modalCookie.style.display = "none";
  }
});






