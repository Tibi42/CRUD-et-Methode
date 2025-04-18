document.addEventListener("DOMContentLoaded", () => {
  // Creer element modal
  const modal = document.createElement("div");
  modal.className = "cookie-modal";

  const modalContent = document.createElement("p");
  modalContent.textContent =
    "Ce site utilise des cookies, selectionner vos preferences";
  modal.appendChild(modalContent);

  // Creer checkboxs
  const checkbox1 = document.createElement("input");
  checkbox1.type = "checkbox";
  checkbox1.id = "check1";
  checkbox1.className = "checkbox";
  const label1 = document.createElement("label");
  label1.textContent = "permets l'analyse des cookies";

  label1.addEventListener("click", () => {
    checkbox1.checked = !checkbox1.checked;
  });

  const checkbox2 = document.createElement("input");
  checkbox2.type = "checkbox";
  checkbox2.id = "check2";
  checkbox2.className = "checkbox";
  const label2 = document.createElement("label");
  label2.textContent = "autorise les cookies fonctionnels";

  label2.onclick = () => {
    checkbox2.checked = !checkbox2.checked;
  };

  // mettre les checkbox dans une div
  const checkboxDiv = document.createElement("div");
  checkboxDiv.className = "check";
  modal.appendChild(checkboxDiv);

  checkboxDiv.appendChild(checkbox1);
  checkboxDiv.appendChild(label1);

  checkboxDiv.appendChild(checkbox2);
  checkboxDiv.appendChild(label2);

  // creation d'une div pour les bouttons
  const boutton = document.createElement("div");
  boutton.className = "btn";
  modal.appendChild(boutton);

  const declineButton = document.createElement("button");
  declineButton.className = "declineBoutton";
  declineButton.textContent = "Refuser";

  // creation des bouttons
  const acceptButton = document.createElement("button");
  acceptButton.className = "acceptBoutton";
  acceptButton.textContent = "Accepter";

  boutton.appendChild(acceptButton);
  boutton.appendChild(declineButton);

  // ajoute la modal au body
  document.body.appendChild(modal);

  acceptButton.onclick = () => {
    modal.style.display = "none";
    console.log("Cookies accepeter");
  };

  declineButton.addEventListener("click", () => {
    modal.style.display = "none";
    console.log("Cookies refuser");
  });

  // ecoute des checkboxs
  label1.addEventListener("click", () => {
    checkbox1.checked = !checkbox1.checked;
    checkbox1.dispatchEvent(new Event("change"));
  });

  label2.addEventListener("click", () => {
    checkbox2.checked = !checkbox2.checked;
    checkbox2.dispatchEvent(new Event("change"));
  });

  checkbox1.addEventListener("change", () => {
    if (checkbox1.checked) {
      console.log("Checkbox 1 activée : Permets l'analyse des cookies");
    } else {
      console.log("Checkbox 1 désactivée : Analyse des cookies non permise");
    }
  });

  checkbox2.addEventListener("change", () => {
    if (checkbox2.checked && label2.onclick) {
      console.log("Checkbox 2 activée : Autorise les cookies fonctionnels");
    } else {
      console.log("Checkbox 2 désactivée : Cookies fonctionnels non autorisés");
    }
  });
  // checkbox1.checked = checkbox1.checked
  //   ? alert
  //   : "Je suis checked" || "je ne suis pas checked";
});
