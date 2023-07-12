function validateForm(event) {
    event.preventDefault();

    clearErrors();


    var isValid = true;

    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }

    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    }

    var phoneInput = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');
    if (phoneInput.value.trim() === '') {
      phoneError.textContent = 'Phone number is required';
      isValid = false;
    }

    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required';
      isValid = false;
    }

    var ageInput = document.getElementById('age');
    var ageError = document.getElementById('ageError');
    if (ageInput.value.trim() === '') {
      ageError.textContent = 'Age is required';
      isValid = false;
    } else if (isNaN(ageInput.value) || ageInput.value < 1 || ageInput.value > 150) {
      ageError.textContent = 'Invalid age';
      isValid = false;
    }

    var genderInput = document.getElementById('gender');
    var genderError = document.getElementById('genderError');
    if (genderInput.value === '') {
      genderError.textContent = 'Gender is required';
      isValid = false;
    }

    var dateInput = document.getElementById('date');
    var dateError = document.getElementById('dateError');
    if (dateInput.value.trim() === '') {
      dateError.textContent = 'Date is required';
      isValid = false;
    }

    var colorInput = document.getElementById('color');
    var colorError = document.getElementById('colorError');
    if (colorInput.value.trim() === '') {
      colorError.textContent = 'Color is required';
      isValid = false;
    }

    // Submit the form if all fields are valid
    if (isValid) {
      document.getElementById('myForm').submit();
    }
  }

  function clearErrors() {
    var errors = document.getElementsByClassName('error');
    for (var i = 0; i < errors.length; i++) {
      errors[i].textContent = '';
    }
  }

  function isValidEmail(email) {
    // Basic email format validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }