const cookieConsentModal = document.getElementById("cookie-consent-modal");
const cookieWarningModal = document.getElementById("cookie-warning-modal");
const usernameModal = document.getElementById("username-modal");
const overlay = document.getElementById("overlay");
const createBtn = document.getElementById("submit-username");
const welcome = document.getElementById('welcome-message')
const name = document.getElementById('username')

document.getElementById("accept-cookies").addEventListener("click", () => {
  cookieConsentModal.classList.add("hidden");
  overlay.classList.add("hidden");
  usernameModal.classList.remove("hidden");
});

document.getElementById("decline-cookies").addEventListener("click", () => {
  cookieConsentModal.classList.add("hidden");
  overlay.classList.add("hidden");
  cookieWarningModal.classList.remove("hidden");
});

document.getElementById("close-warning").addEventListener("click", () => {
  cookieWarningModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Show the cookie consent modal on page load
window.addEventListener("load", () => {
  cookieConsentModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});


createBtn.addEventListener("click", () => {
    const createNameInput = document.getElementById("username-input");
    const cookieName = createNameInput.value.trim();

    if (cookieName === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    document.cookie = `${cookieName};`;
    alert(`Cookie "${cookieName}" créé avec succès.`);
    usernameModal.classList.add("hidden");
    overlay.classList.add("hidden");
    name.textContent = cookieName;
    welcome.style.display = "block";


});

