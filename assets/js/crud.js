// Obkectif faire une todolist a partir des elements presents sur la page crud.html
// ! 1 Selectionner et stocker les element du DOM
// ! 2 click sur le bouton cree une tache pour creer une tache
// ! 3 ajouter une tache avec le text de l'input et deux bouttons supprimer et modifier
//  ! 4 supprimer une tache en cliquant sur le boutton supprimer
// ! modifierr une tache en cliquant sur le boutton modifier avec un prompt

const inputTache = document.querySelector("#saisieTache");
const buttonAddTask = document.querySelector("#ajouterTache");
const listeTaches = document.querySelector("#listeTaches");

buttonAddTask.addEventListener("click", () => {
  //  je recupere la valeur de l'input
  const textInputValue = inputTache.value.trim();
  //  je créé une balise html li
  const containerTask = document.createElement("li");
  containerTask.classList.add("toDoContainer");
  //  j'injecte du texte dans la balise li
  containerTask.textContent = textInputValue;
  //  je créé un container li container task
  listeTaches.appendChild(containerTask);

  const bouttonMod = document.createElement("boutton");
  bouttonMod.textContent = "Modifier";
  bouttonMod.classList.add("bouttonMod");

  bouttonMod.onclick = () => {
    const nouveauTexte = prompt("Modifier la tâche", "");
    if (nouveauTexte) {
      containerTask.textContent = nouveauTexte;
      containerTask.appendChild(bouttonMod);
      containerTask.appendChild(bouttonDel);
    }
  };

  const bouttonDel = document.createElement("boutton");
  bouttonDel.textContent = "Supprimer";
  bouttonDel.classList.add("bouttonDel");

  bouttonDel.onclick = () => {
    listeTaches.removeChild(containerTask);
  };

  containerTask.appendChild(bouttonMod);
  containerTask.appendChild(bouttonDel);

  inputTache.value = "";
});

