(function () {
  'use strict';

  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');

    Array.prototype.forEach.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        var firstName = document.getElementById('firstName');
        var lastName = document.getElementById('lastName');
        var email = document.getElementById('email');
        var dob = document.getElementById('dob');
        var country = document.getElementById('country');

        // Validaciones personalizadas
        if (firstName.value.trim() === '') {
          firstName.setCustomValidity('Por favor, ingrese su nombre.');
          firstName.classList.add('is-invalid');
        } else {
          firstName.setCustomValidity('');
          firstName.classList.remove('is-invalid');
        }

        if (lastName.value.trim() === '') {
          lastName.setCustomValidity('Por favor, ingrese su apellido.');
          lastName.classList.add('is-invalid');
        } else {
          lastName.setCustomValidity('');
          lastName.classList.remove('is-invalid');
        }

        if (email.value.trim() === '' || email.validity.typeMismatch) {
          email.setCustomValidity('Por favor, ingrese un email válido.');
          email.classList.add('is-invalid');
        } else {
          email.setCustomValidity('');
          email.classList.remove('is-invalid');
        }

        if (dob.value.trim() === '') {
          dob.setCustomValidity('Por favor, ingrese su fecha de nacimiento.');
          dob.classList.add('is-invalid');
        } else {
          dob.setCustomValidity('');
          dob.classList.remove('is-invalid');
        }

        if (country.value === '') {
          country.setCustomValidity('Por favor, seleccione su país de residencia.');
          country.classList.add('is-invalid');
        } else {
          country.setCustomValidity('');
          country.classList.remove('is-invalid');
        }

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

    var toggleContrastButton = document.getElementById('toggleContrast');
    toggleContrastButton.addEventListener('click', function () {
      document.body.classList.toggle('high-contrast');
    });
  }, false);
})();
