(function () { // Función autoejecutable para evitar la contaminación del ámbito global.

  window.addEventListener('load', function () { // Espera a que la página se cargue completamente.
    var forms = document.getElementsByClassName('needs-validation'); // Obtiene todos los formularios con la clase 'needs-validation'.
    var successMessage = document.getElementById('successMessage'); // Obtiene el contenedor del mensaje de éxito.

    Array.prototype.forEach.call(forms, function (form) { // Itera sobre cada formulario.
      form.addEventListener('submit', function (event) { // Agrega un evento de envío al formulario.
        var firstName = document.getElementById('firstName'); // Obtiene el elemento de entrada del nombre.
        var lastName = document.getElementById('lastName'); // Obtiene el elemento de entrada del apellido.
        var email = document.getElementById('email'); // Obtiene el elemento de entrada del email.
        var dob = document.getElementById('dob'); // Obtiene el elemento de entrada de la fecha de nacimiento.
        var country = document.getElementById('country'); // Obtiene el elemento de selección del país.

        // Validaciones personalizadas para el campo 'Nombre'
        if (firstName.value.trim() === '') {
          firstName.setCustomValidity('Por favor, ingrese su nombre.'); // Establece un mensaje de validez personalizado.
          firstName.classList.add('is-invalid'); // Añade una clase para mostrar el mensaje de error.
        } else {
          firstName.setCustomValidity(''); // Limpia el mensaje de validez.
          firstName.classList.remove('is-invalid'); // Elimina la clase de mensaje de error.
        }

        // Validaciones personalizadas para el campo 'Apellido'
        if (lastName.value.trim() === '') {
          lastName.setCustomValidity('Por favor, ingrese su apellido.');
          lastName.classList.add('is-invalid');
        } else {
          lastName.setCustomValidity('');
          lastName.classList.remove('is-invalid');
        }

        // Validaciones personalizadas para el campo 'Email'
        if (email.value.trim() === '' || email.validity.typeMismatch) {
          email.setCustomValidity('Por favor, ingrese un email válido.');
          email.classList.add('is-invalid');
        } else {
          email.setCustomValidity('');
          email.classList.remove('is-invalid');
        }

        // Validaciones personalizadas para el campo 'Fecha de Nacimiento'
        if (dob.value.trim() === '') {
          dob.setCustomValidity('Por favor, ingrese su fecha de nacimiento.');
          dob.classList.add('is-invalid');
        } else {
          dob.setCustomValidity('');
          dob.classList.remove('is-invalid');
        }

        // Validaciones personalizadas para el campo 'País de Residencia'
        if (country.value === '') {
          country.setCustomValidity('Por favor, seleccione su país de residencia.');
          country.classList.add('is-invalid');
        } else {
          country.setCustomValidity('');
          country.classList.remove('is-invalid');
        }

        if (form.checkValidity() === false) { // Verifica si el formulario es válido.
          event.preventDefault(); // Previene el envío del formulario si es inválido.
          event.stopPropagation(); // Detiene la propagación del evento.
        } else {
          successMessage.classList.remove('d-none'); // Muestra el mensaje de éxito.
          successMessage.classList.add('fade-out'); // Añade la clase para la animación de desvanecimiento.
          setTimeout(function () {
            successMessage.classList.add('hide'); // Añade la clase para ocultar el mensaje lentamente.
          }, 3000); // Cambia 3000ms al tiempo que desees que el mensaje permanezca visible.
          form.classList.add('was-validated');
          event.preventDefault(); // Previene el envío del formulario para mostrar el mensaje de éxito.
        }
      }, false);
    });
                                                       // togglecontrast = alternar contraste//
    var toggleContrastButton = document.getElementById('toggleContrast'); // Obtiene el botón de cambiar contraste.
    toggleContrastButton.addEventListener('click', function () { // Agrega un evento de clic al botón.
      document.body.classList.toggle('high-contrast'); // Alterna la clase 'high-contrast' en el cuerpo del documento.
    });
  }, false);
})();
