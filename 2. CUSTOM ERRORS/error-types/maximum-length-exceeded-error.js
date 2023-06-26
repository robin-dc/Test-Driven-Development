const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError {
  constructor(message,...params){
    super(...params);

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, MaximumLengthExceededError)
    }

    this.name = "MaximumLengthExceededError"
    this.message = message ? `Maximum length exceeded by ${message}` : "Maximum length exceeded"
  }
}


// class Field {
//   constructor(inputName, value, maxLength = null) {
//     this.inputName = inputName;
//     this.value = value;
//     this.maxLength = maxLength;
//   }

//   changeInput(newValue) {
//     if (!this.maxLength) {
//       throw new MaximumLengthExceededError()
//     } else if (newValue.length > this.maxLength) {
//       throw new MaximumLengthExceededError(newValue.length - this.maxLength)
//     }

//     this.value = newValue;
//   }
// }

// // When no maximum length is specified:
// const nameInput = new Field('Name', 'Zelda');
// // Field { inputName: 'Name', value: 'Zelda', maxLength: null }
// nameInput.changeInput('Sheik');
// // throws MaximumLengthExceededError: Maximum length exceeded

// // When maximum length is specified and is exceeded:
// const nameInput = new Field('Name', 'Zelda', 5);
// // Field { inputName: 'Name', value: 'Zelda', maxLength: 5 }
// nameInput.changeInput("Ganondorf");
// // throws MaximumLengthExceededError: Maximum length exceeded by 4

// // When maximum length is specified and is not exceeded:
// const nameInput = new Field('Name', 'Zelda', 5);
// // Field { inputName: 'Name', value: 'Zelda', maxLength: 5 }
// nameInput.changeInput("Sheik");
// // does not throw an error
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
