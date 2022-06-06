window.addEventListener("DOMContentLoaded", (e) => {
  //   var link = document.querySelector("#id-link");
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     console.log("link clicked");
  //   });
  //   var secondContainer = document.querySelector("#second-container");
  //   secondContainer.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     console.log("second container!!");
  //   });

  var formRegister = document.querySelector("#form-register");
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    var auxValidator = true;
    var inputVar = document.querySelector("#input-name");
    if (inputVar.value == "") {
      document.querySelector("#input-name-container .error-input").innerHTML =
        "Name is required";
    } else {
      document.querySelector("#input-name-container .error-input").innerHTML =
        "";
      auxValidator = false;
    }

    if (!auxValidator) {
      e.preventDefault();
      formRegister.submit();
    }
  });
});
