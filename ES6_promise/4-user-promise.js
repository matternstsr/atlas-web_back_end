import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });