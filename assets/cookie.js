document.addEventListener("DOMContentLoaded", () => {
  // Creer element modal
  const modal = document.createElement("div");
  modal.className = "cookie-modal";

  const modalContent = document.createElement("p");
  modalContent.textContent =
    "Ce site utilise des cookies, selectionner vos preferences";
  modal.appendChild(modalContent);

const checkbox = document.createElement("div")

// mettre les checkbox dans une div
  const checkboxDiv = document.createElement("div")
  checkboxDiv.className = "check"
  modal.appendChild(checkboxDiv)


    // Creer checkboxs
  const checkbox1 = document.createElement("input");
  checkbox1.type = "checkbox";
  checkbox1.className = "checkbox";
  const label1 = document.createElement("label");
  label1.textContent = "permets l'analyse des cookies";

  label1.addEventListener("click", () => {
    checkbox1.checked = !checkbox1.checked;
  });

  checkboxDiv.appendChild(checkbox1);
  checkboxDiv.appendChild(label1);

  const checkbox2 = document.createElement("input");
  checkbox2.type = "checkbox";
  checkbox2.className = "checkbox";
  const label2 = document.createElement("label");
  label2.textContent = "autorise les cookies fonctionnels";

  label2.onclick = () => {
    checkbox2.checked = !checkbox2.checked;
  };

  checkboxDiv.appendChild(checkbox2);
  checkboxDiv.appendChild(label2);


  // creation d'une div pour les bouttons
  const boutton = document.createElement("div")
  boutton.className = "btn"
  modal.appendChild(boutton)

  // creation des bouttons
  const acceptButton = document.createElement("button");
  acceptButton.className = "acceptBoutton";
  acceptButton.textContent = "Accepter";
  boutton.appendChild(acceptButton);

  const declineButton = document.createElement("button");
  declineButton.className = "declineBoutton";
  declineButton.textContent = "Refuser";
  boutton.appendChild(declineButton);

  // ajoute la modal au body
  document.body.appendChild(modal);

  // acceptButton.addEventListener("click", () => {
  //   modal.style.display = "none";
  //   console.log("Cookies accepeter");
  // });

  // declineButton.addEventListener("click", () => {
  //   modal.style.display = "none";
  //   console.log("Cookies refuser");
  // });

  // checkbox1.checked = checkbox1.checked
  //   ? prompt
  //   : "Je suis checked" || "je ne suis pas checked";
});
