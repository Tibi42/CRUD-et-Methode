## Étapes pour gérer le consentement des cookies

1. **Vérifiez la présence des boutons dans votre HTML.**

2. **Ajoutez le code JavaScript** pour enregistrer le choix dans un cookie avec une date de validité de 30 jours.

3. **Explications :**

   - Quand la page charge, si le cookie `cookieConsent` n’existe pas, la modal s’affiche.
   - Si l’utilisateur clique sur **Accepter**, le cookie `cookieConsent=accepted` est créé.
   - Si l’utilisateur clique sur **Refuser**, le cookie `cookieConsent=refused` est créé.
   - La modal disparaît après le choix de l’utilisateur.

7. **Ajoutez le code JavaScript pour gérer le le darkmode en enregistrant le choix de l'utilisateur dans un cookie -dark = on || dark = off**

### Pseudocode du fonctionnement du dark mode avec cookie

A. **Attendre que la page soit chargée.**  
B. **Récupérer le bouton de switch du mode sombre.**  
C. **Définir une méthode pour créer un cookie.**  
D. **Définir une méthode pour lire un cookie.**  
E. **Vérifier si un cookie `darkMode` existe et l’appliquer si besoin.**  
F. **Ajouter un événement sur le bouton pour activer/désactiver le mode sombre.**  
G. **Lors du clic, basculer le mode sombre et enregistrer le choix dans un cookie.**

#### Liste des méthodes et définitions

- **setCookie**  
   Crée un cookie avec un nom, une valeur et une durée d’expiration en jours.

- **getCookie**  
   Récupère la valeur d’un cookie à partir de son nom.

- **addEventListener**  
   Ajoute un gestionnaire d’événement pour détecter le clic sur le bouton.

- **classList.toggle**  
   Ajoute ou retire la classe CSS `dark-mode` sur le `<body>` pour activer/désactiver le mode sombre.
