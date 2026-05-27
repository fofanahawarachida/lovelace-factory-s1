// =========================================
// EXERCICE 3 — JavaScript interactif
// Lovelace Factory
// =========================================
// Lis les commentaires et complète les TODO.
// Teste dans le navigateur après chaque étape.
// =========================================


// =========================================
// EXERCICE 1 — Afficher / Cacher une section
// =========================================
// Au clic sur btn-toggle :
//   - Si description cachée → afficher + changer texte bouton
//   - Si description visible → cacher + remettre texte original
//
// Indices :
//   element.style.display = "block" / "none"
//   element.textContent = "..."

const btnToggle = document.getElementById("btn-toggle");
const descriptionProjet = document.getElementById("description-projet");

btnToggle.addEventListener("click", function() {
  // TODO

});


// =========================================
// EXERCICE 2 — Message personnalisé
// =========================================
// Au clic sur btn-bienvenue :
//   - Champ vide → message d'erreur en rouge dans zoneMessage
//   - Prénom saisi → message de bienvenue en vert
//
// Indices :
//   element.value.trim()
//   element.innerHTML = "..."
//   element.style.color = "red"

const btnBienvenue = document.getElementById("btn-bienvenue");
const champPrenom = document.getElementById("champ-prenom");
const zoneMessage = document.getElementById("zone-message");

btnBienvenue.addEventListener("click", function() {
  // TODO

});


// =========================================
// EXERCICE 3 — Validation de formulaire
// =========================================
// À la soumission, vérifier :
//   - Nom : obligatoire, >= 3 caractères
//   - Description : obligatoire, entre 10 et 200 caractères
//   - Email : obligatoire, contient "@" et "."
//
// Si invalide → afficher l'erreur sous le bon champ
// Si valide → afficher un message de succès
//
// Indices :
//   event.preventDefault()
//   chaine.length
//   chaine.includes("@")

const formulaire = document.getElementById("formulaire-projet");
const nomProjet = document.getElementById("nom-projet");
const descriptionChamp = document.getElementById("description");
const emailProjet = document.getElementById("email-projet");
const erreurNom = document.getElementById("erreur-nom");
const erreurDescription = document.getElementById("erreur-description");
const erreurEmail = document.getElementById("erreur-email");
const messageFinal = document.getElementById("message-final");

formulaire.addEventListener("submit", function(event) {
  // TODO : empêche le comportement par défaut

  // TODO : efface les erreurs précédentes

  // TODO : récupère et nettoie les valeurs

  // TODO : déclare estValide = true

  // TODO : valide le nom

  // TODO : valide la description

  // TODO : valide l'email

  // TODO : si valide, affiche le succès

});