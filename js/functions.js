// Show error message
export const setErrorMessage = (element, message) => {
  const errorMessage =
    message && typeof message === "object" ? message.email : message;
  element.parentElement.setAttribute("data-error-visible", "true");
  element.parentElement.setAttribute("data-error", errorMessage);
};

// Hide error message
export const hideErrorMessage = (element) => {
  element.parentElement.removeAttribute("data-error-visible");
  element.parentElement.removeAttribute("data-error");
};

// Check input value
export function checkInputValue(regex, element, message) {
  if (!regex.test(element.value)) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
}

// Fonction pour vérifier si l'utilisateur a moins de 12 ans ou si la date de naissance n'est pas spécifiée
export function checkIfUserIsYoungerthan12(element, message) {
  // Récupère la date de naissance depuis la valeur de l'élément fourni
  const birthdate = new Date(element.value);

  // Vérifie si la date de naissance est spécifiée
  if (isNaN(birthdate.getTime())) {
    // Affiche un message d'erreur et retourne false pour indiquer que la validation a échoué
    setErrorMessage(element, "Veuillez spécifier une date de naissance.");
    return false;
  }

  // Calcule l'âge de l'utilisateur en soustrayant l'année de naissance de l'année actuelle
  const userAge = new Date().getFullYear() - birthdate.getFullYear();

  // Si l'âge de l'utilisateur est inférieur à 12 ans
  if (userAge < 12) {
    // Affiche un message d'erreur et retourne false pour indiquer que la validation a échoué
    setErrorMessage(element, message);
    return false;
  }

  // Si l'âge de l'utilisateur est de 12 ans ou plus, masque le message d'erreur
  hideErrorMessage(element);

  // Retourne true pour indiquer que la validation a réussi
  return true;
}

// Check if conditions are accepted
export function checkIfConditionsValid(element, message) {
  if (!element.checked) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
}

// Fonction pour vérifier si une ville est sélectionnée

export function checkIfCitySelected(cities, message) {
  // Convertit la NodeList(cities) en tableau pour utiliser la méthode some
  const isChecked = Array.from(cities).some((radio) => radio.checked);

  // Si aucune ville n'est sélectionnée
  if (!isChecked) {
    // Affiche un message d'erreur et retourne false pour indiquer que la validation a échoué
    setErrorMessage(cities[0], message);
    return false;
  }

  // Si une ville est sélectionnée, masque le message d'erreur
  hideErrorMessage(cities[0]);
  return true;
}
