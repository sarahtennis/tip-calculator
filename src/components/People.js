import IntegerInput from './IntegerInput';

export default class People {
  constructor (calculate) {
    this.calculate = calculate;
    this.onValidInput = (val) => {
      this.calculate({ people: val });
    };
    this.peopleInput = new IntegerInput('#people', this.onValidInput);
    this.inputValidation = document.querySelector('.label-line .people-validation');
    this.onReset = () => {
      this.peopleInput.input.value = '';
      this.validationMessage = '';
      this.showInputValidation = false;
      this.updateValidationMessage();
    };
    this.peopleInput.input.addEventListener('focus', () => {
      this.validationMessage = '';
      this.updateValidationMessage();
    });
    this.peopleInput.input.addEventListener('blur', () => {
      this.validInput();
    });
  }

  updateValidationMessage () {
    this.inputValidation.innerHTML = this.validationMessage;
    if (this.validationMessage) {
      this.peopleInput.input.classList.add('invalid-input');
    } else {
      this.peopleInput.input.classList.remove('invalid-input');
    }
  }

  validInput () {
    const value = parseFloat(this.peopleInput.input.value);
    if (value) {
      this.showInvalidState = false;
    } else if (value === 0) {
      this.validationMessage = 'Cannot be 0';
      this.showInvalidState = true;
    } else {
      this.validationMessage = 'Invalid input';
      this.showInvalidState = true;
    }
    this.updateValidationMessage();
  }
}
