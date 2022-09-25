class Utility {
    constructor() {
    }
    //--------------------------------------------------------------------------------------------------
    static validateForm(formData) {
      // console.log("static validateForm(formData) started");
      // Remove any existing error messages before adding new ones
      document.querySelectorAll(".error").forEach((el) => el.remove());
  
      let validate = true;
      formData.forEach((e) => {
        if (!e.checkValidity()) {
          validate = false;
  
          let blankField = document.querySelector("#" + e.id + ""),
            errorMessage = `<label class="error" for="">${e.name}  must be filled out!</label>`;
          blankField.insertAdjacentHTML("beforebegin", errorMessage);
        }
      });
      // console.log("static validateForm(formData) done");
      return validate;
    }
    //--------------------------------------------------------------------------------------------------
  } // End of Utility Class ----------------------------------------------------------------------------