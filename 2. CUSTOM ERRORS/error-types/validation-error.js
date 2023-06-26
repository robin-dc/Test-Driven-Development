// Your code here

class ValidationError extends Error{
  constructor(message, ...params){
    super(...params)

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, ValidationError)
    }

    this.name = "ValidationError"
    this.message = message || "Invalid input"
  }
}

// class Field {
//   constructor(inputName, value) {
//     this.inputName = inputName;
//     this.value = value;
//   }
// }

// // When a message is passed in:
// const passwordInput = new Field('Password', 'pass');
// // Field { inputName: 'Password', value: 'pass' }
// if (passwordInput.value === 'pass') {
//   throw new ValidationError('Insecure password');
// }
// // throws ValidationError: Insecure password

// When a message is not passed in:
// const passwordInput2 = new Field('Password', 10);
// // Field { inputName: 'Password', value: 10 }
// if (typeof passwordInput2.value !== 'string') {
//   throw new ValidationError();
// }
// throws ValidationError: Invalid input

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
