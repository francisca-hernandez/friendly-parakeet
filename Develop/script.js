function generatePassword() {

  //numbers,letters, special characters arrays
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '/', '*', '?'];
  let gatherAnswers= []


  //prompt for length


  length = prompt("How many characters would you like your password to contain?");
  if (length < 8 || length > 128) {
    return "Password does not meet minimum length criteria";
  } 
  else if (isNaN(length)) {
    length = prompt("please enter a valid number.")
    generatePassword();
   }
  else {
    alert(" Your password will be " + length + " characters long.");
  }


    // prompt questions 
    let hasNumbers = confirm('Do you want numbers?');
    let hasUpperCase = confirm('Do you want uppercase letters?')
    let hasLowerCase = confirm('Do you want lower case letters?');
    let hasSpecialCharacters = confirm('Do you want special characters?');
  

  //Selected Characters

  if (hasNumbers) {
    gatherAnswers = gatherAnswers.concat(numbers)

  } if (hasLowerCase) {
    gatherAnswers = gatherAnswers.concat(lowerCase)

  } if (hasUpperCase) {
    gatherAnswers = gatherAnswers.concat(upperCase)

  } if (hasSpecialCharacters) {

    gatherAnswers = gatherAnswers.concat(specialCharacters)
    if (!hasUpperCase && !hasLowerCase && !hasSpecialCharacters && !hasNumbers)

      alert('Password does not meet minimum requirements')
  }

 
  let results = []
    for(let i=0; i<length; i++) {
      let randomIndex = Math.floor(Math.random() * gatherAnswers.length)
      let randomContent = gatherAnswers[randomIndex];
      results.push(randomContent);
    
    }
  return results.join("");
  
  //randomContent= gatherAnswers[length];


  }


//Get References to the #gerate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
