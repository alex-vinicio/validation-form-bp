window.addEventListener("DOMContentLoaded", (e) => {
  var formRegister = document.querySelector("#form-register");
  formRegister.addEventListener("submit", (e) => {
    var nameNameV,
      latNameV,
      ciV,
      mailV = true;
    //section of name validation
    var inputVar = document.querySelector("#input-name");
    nameNameV = validationName(inputVar);

    //Section of last name validation
    var inputLatName = document.querySelector("#input-last-name");
    latNameV = validationLastName(inputLatName);

    //Section of CI validation
    var inputCi = document.querySelector("#input-cedula");
    ciV = validationCi(inputCi);

    //Section of mail validation
    var inputMail = document.querySelector("#input-mail");
    mailV = validationMail(inputMail);

    //comparison if all the inputs are correct to create petition request
    if (nameNameV || latNameV || ciV || mailV) {
      e.preventDefault();
    } else {
      setTimeout(() => {
        formRegister.submit();
      }, 3000);
    }
  });
});

function validationMail(inputMail) {
  if (inputMail.value == "") {
    document.querySelector("#input-mail-container .error-input").style.color =
      "red";
    document.querySelector("#input-mail-container .error-input").innerHTML =
      "El correo electronico es requerido!";
    return true;
  } else {
    var firstLetter = inputMail.value.indexOf(".");
    var lastLetter = inputMail.value.lastIndexOf("@");

    if (
      firstLetter == -1 ||
      lastLetter == -1 ||
      firstLetter < lastLetter ||
      lastLetter == 0
    ) {
      document.querySelector("#input-mail-container .error-input").style.color =
        "red";
      document.querySelector("#input-mail-container .error-input").innerHTML =
        inputMail.value +
        " debe cumplir con campos similares a: alex@hotmail.com!";
      return true;
    } else {
      document.querySelector("#input-mail-container .error-input").style.color =
        "green";
      document.querySelector("#input-mail-container .error-input").innerHTML =
        "Correo correcto!";
      mailV = false;
    }
  }
}
function validationCi(inputCi) {
  if (inputCi.value == "") {
    document.querySelector("#input-cedula-container .error-input").style.color =
      "red";
    document.querySelector("#input-cedula-container .error-input").innerHTML =
      "El numero de CI es requerido!";
  } else {
    if (inputCi.value.length !== 10) {
      document.querySelector(
        "#input-cedula-container .error-input"
      ).style.color = "red";
      document.querySelector("#input-cedula-container .error-input").innerHTML =
        "Debe tener la cantidad de digitos correcto!";
    } else {
      let isnum = /^[0-9]+$/.test(inputCi.value);
      if (!isnum) {
        document.querySelector(
          "#input-cedula-container .error-input"
        ).style.color = "red";
        document.querySelector(
          "#input-cedula-container .error-input"
        ).innerHTML = "Debe ingresar solo digitos!";
      } else {
        document.querySelector(
          "#input-cedula-container .error-input"
        ).style.color = "green";
        document.querySelector(
          "#input-cedula-container .error-input"
        ).innerHTML = "CI correcto!";
        ciV = false;
      }
    }
  }
}
function validationLastName(inputLatName) {
  if (inputLatName.value == "") {
    document.querySelector(
      "#input-last-name-container .error-input"
    ).style.color = "red";
    document.querySelector(
      "#input-last-name-container .error-input"
    ).innerHTML = "El apellido es requerido!";
    return true;
  } else {
    if (inputLatName.value.length < 3) {
      document.querySelector(
        "#input-last-name-container .error-input"
      ).style.color = "red";
      document.querySelector(
        "#input-last-name-container .error-input"
      ).innerHTML = "Debe tener al menos 3 caracteres";
      return true;
    } else {
      document.querySelector(
        "#input-last-name-container .error-input"
      ).style.color = "green";
      document.querySelector(
        "#input-last-name-container .error-input"
      ).innerHTML = "Apellido correcto!";
      return false;
    }
  }
}
function validationName(inputVar) {
  if (inputVar.value == "") {
    document.querySelector("#input-name-container .error-input").style.color =
      "red";
    document.querySelector("#input-name-container .error-input").innerHTML =
      "El nobre es requerido!";
    return true;
  } else {
    if (inputVar.value.length < 3) {
      document.querySelector("#input-name-container .error-input").style.color =
        "red";
      document.querySelector("#input-name-container .error-input").innerHTML =
        "Debe tener al menos 3 caracteres";
      return true;
    } else {
      document.querySelector("#input-name-container .error-input").style.color =
        "green";
      document.querySelector("#input-name-container .error-input").innerHTML =
        "Nombre correcto!";
      return false;
    }
  }
}
