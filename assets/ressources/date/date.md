# l objet `Date` en JAvascript : introduction et utilisation des dates avec les cookies

l'objet `Date` en Javascript est utilisé pour travailler avec les dates et les heures.
Il permet de créer, manipuler et formater des dates, ce qui est particulierement utile pour gerer des fonctionnalitées comme les cookies,
ou il est souvent necessaire de definir une date d'expiration.

##1. creer un objet `Date`

### exemple 1 : creer une date actuelle

```javascript
const maintenant = new Date();
console.log(maintenant); // affiche la date et l'heure actuelle
```

###exmple 2 : creer une date specifique

```javascript
const dateSpecifique = new Date(2025, 5, 15);
console.log(dateSpecifique);
```

## 2. Methodes utiles de l objet `Date`

### obtenir des informations sur une date

```javascript
// obtenir des inforamtions sur une date
const MaintenantPhaseDeux = new Date();
console.log(MaintenantPhaseDeux); // obtenir les infos de la date
console.log(MaintenantPhaseDeux.getFullYear()); // obtenir l'année
console.log(MaintenantPhaseDeux.getMonth()); // obtenir le mois
console.log(MaintenantPhaseDeux.getDate()); // obtenir le jour
console.log(MaintenantPhaseDeux.getHours()); // obtenir l'heure
console.log(MaintenantPhaseDeux.getMinutes()); // obtenir les mintutes
console.log(MaintenantPhaseDeux.getSeconds()); // obtenir les secondes
```

### obtenir des information sur une date

```javascript
const dateModifie = new Date();
dateModifie.setFullYear(2025); // Cahnge l'année à 2025
dateModifie.setMonth(11); // change le mois pour decembre (11 = Decembre)
dateModifie.setDate(25); // change le jour pour 25
console.log(dateModifie);
```
### Exemple : creer un cookie avec une date d'expiration

```javascript
function creercookie(nom, valeur, jours) {
    const date = new Date();
    date.setTime(date.getTime() + (jours + 24 * 60 * 60 * 1000)); // Ajouter X jours de validité

    const expiration = "expires=" + date.toTCSString();
    document.cookie = `${nom}=${valeur}; ${expiration}; path=`
}

// creer un cookie qui expire dans 10 jours
creerCookies("user", "ana@mondomaine.fr", 10);
console.log(document.cookie); // affiche les cookies actuels

```