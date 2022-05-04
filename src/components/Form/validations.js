 export  default function validations(formValues){
  let valid;
  let errors = { userName_error: "", email_error: "", imageUrl_error: "" };
  //validations for user name
  
  if (!/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(formValues.userName)) {
    valid = false;
    errors.userName_error = "User name should constain at least 8 characters";
  } else {
    errors.userName_error = "";
  }
  //validations for email
  if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(formValues.email)) {
    valid = false;
    errors.email_error = "Enter a valid email";
  } else {
    errors.email_error = "";
  }
  //validations for url
  if (!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(formValues.imageLink.trim())) {
    valid = false;
    errors.imageUrl_error = "Url is not valid";
    return errors;
  } else {
    errors.imageUrl_error = "";
  }

  if (!valid) {
    return errors;
  }
};
