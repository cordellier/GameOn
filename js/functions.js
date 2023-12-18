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

// Function to check if the user is under 12 or if the date of birth is not specified
export function checkIfUserIsYoungerthan12(element, message) {
  const birthdate = new Date(element.value);

  const userAge = new Date().getFullYear() - birthdate.getFullYear();

  if (userAge < 12) {
    setErrorMessage(element, message);
    return false;
  }

  hideErrorMessage(element);
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

// Function to check whether a city is selected

export function checkIfCitySelected(cities, message) {
  const isChecked = Array.from(cities).some((radio) => radio.checked);

  if (!isChecked) {
    setErrorMessage(cities[0], message);
    return false;
  }

  hideErrorMessage(cities[0]);
  return true;
}
