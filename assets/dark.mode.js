// Bouton switch dark mode
document.addEventListener("DOMContentLoaded", function () {
  const darkSwitch = document.getElementById("darkModeSwitch");
  if (darkSwitch) {
    darkSwitch.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // const body = document.body;
  darkSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      setCookie("dark", "on", 30);
      darkModeSwitch.textContent = "☀️";
    } else {
      setCookie("dark", "off", 30);
      darkModeSwitch.textContent = "🌙";
    }
  });

  window.onload = () => {
    const darkMode = getCookie("dark");
    if (darkMode === "on") {
      body.classList.add("dark-mode");
      darkModeSwitch.textContent = "☀️";
    } else {
      body.classList.remove("dark-mode");
      darkModeSwitch.textContent = "🌙";
    }
  };
});
