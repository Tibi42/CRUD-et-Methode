// fonction pour creer un nouvel element
function creerElement() {
  // recuperer la valeur de saisie
  const elementSaisie = document.getElementById("saisieTache");
  const valeurElement = elementSaisie.value.trim();

  // creer un nouvel element li
  const nouvelElement = document.createElement("li");
  nouvelElement.textContent = valeurElement;

  // ajouter l'element à la liste
  const listeElement = document.getElementById("listeTaches");
  listeElement.appendChild(nouvelElement);

  // vider le champ de saisie
  elementSaisie.value = "";

  // ajouter un bouton de suppression
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "Supprimer";
  // ajouter un gestionnaire d'evenement pour supprimer l'element
  boutonSupprimer.onclick = function () {
    listeElement.removeChild(nouvelElement);
  };
  nouvelElement.appendChild(boutonSupprimer);

  // ajouter le bouton modifier
  const boutonModifier = document.createElement("button");
  boutonModifier.textContent = "Modifier";
  // ajouter un gestionnaire d'evenement pour modifier l'element via un prompt
  boutonModifier.onclick = function () {
    const nouvelValeur = prompt("Modifier la tache:", valeurElement);
    nouvelElement.firstChild.textContent = nouvelValeur;
  };
  nouvelElement.appendChild(boutonModifier);
}

const boutonAjouter = document.getElementById("ajouterTache");
boutonAjouter.onclick = function () {
  creerElement();
};

// Fonction pour créer un nouvel élément
function creerElement() {
  // recuperer la valeur de saisie
  const inputElement = document.getElementById("saisieTache");
  const valeurElement = inputElement.value;
  // creer un nouvel élément
  const nouvelElement = document.createElement("li");
  nouvelElement.textContent = valeurElement;
  // ajouter l'élément à la liste
  const listeElements = document.getElementById("listeTaches");
  listeElements.appendChild(nouvelElement);
  // vider le champ de saisie
  inputElement.value = "";
  // ajouter un bouton de suppression
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "Supprimer";
  // ajouter un gestionnaire d'événements pour supprimer l'élément
  boutonSupprimer.onclick = function () {
    listeElements.removeChild(nouvelElement);
  };
  nouvelElement.appendChild(boutonSupprimer);
  // ajouter un bouton de modification
  const boutonModifier = document.createElement("button");
  boutonModifier.textContent = "Modifier";
  boutonModifier.onclick = function () {
    const nouvelleValeur = prompt("Modifier la tâche:", valeurElement);
    if (nouvelleValeur !== null) {
      nouvelElement.firstChild.textContent = nouvelleValeur;
    }
  };
  nouvelElement.appendChild(boutonModifier);
}

// au click du bouton "Ajouter"
const boutonAjouter = document.getElementById("ajouterTache");
boutonAjouter.onclick = function () {
  creerElement();
};

// au click de la touche "Entrée"
const inputElement = document.getElementById("saisieTache");
inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    creerElement();
  }
});
