const button = document.querySelector('button');
const fieldContainer = document.querySelector('.field');
const emailInput = document.querySelector('input');
const errorIcon = document.getElementById('error-icon');

button.addEventListener('click', () => {
  const email = emailInput.value;
  const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  if (regex.test(email)) {
    fieldContainer.classList.remove('error');
    errorIcon.style.display = 'none';
  } else {
    fieldContainer.classList.add('error');
    errorIcon.style.display = 'block';
  }
});