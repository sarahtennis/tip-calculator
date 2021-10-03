export default class Bill {
  constructor (calculate) {
    this.calculate = calculate;
    this.validationMessage = '';
    this.showInvalidState = false;
    this.input = document.querySelector('#bill');
    this.currentValue = this.input.value;
    this.inputValidation = document.querySelector('.label-line .bill-validation');
    this.input.addEventListener('focus', () => {
      this.validationMessage = '';
      this.updateValidationMessage();
    });
    this.input.addEventListener('blur', () => {
      this.validInput();
    });

    this.input.addEventListener('beforeinput', (e) => {
      // if . already exists in input, don't allow another
      if ((e.data === '.' && this.input.value.indexOf('.') > -1)) {
        e.preventDefault();
      }
      if (!parseInt(e.data) && e.data !== '0' && e.data !== null && e.data !== '.') {
        e.preventDefault();
      }
    });

    this.input.addEventListener('input', () => {
      const decimalIndex = this.input.value.indexOf('.');
      const hasDecimal = decimalIndex > -1;
      const invalid = hasDecimal && decimalIndex < this.input.value.length - 3;
      if (invalid) {
        this.input.value = this.currentValue;
        return;
      }
      if (this.input.value.length > 0) {
        this.calculate({ bill: Number(this.input.value) });
      }
      this.currentValue = this.input.value;
    });

    this.input.addEventListener('paste', (e) => {
      const clipboardData = e.clipboardData.getData('text/plain');
      const decimalIndex = clipboardData.indexOf('.');
      const hasDecimal = decimalIndex > -1;
      const invalid = (hasDecimal && decimalIndex < clipboardData.length - 3) || !/^ [1 - 9]\d* $/.test(clipboardData);
      if (invalid) {
        e.preventDefault();
      }
    });
  }

  onReset () {
    this.input.value = '';
  }

  validInput () {
    const value = parseFloat(this.input.value);
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

  updateValidationMessage () {
    this.inputValidation.innerHTML = this.validationMessage;
    if (this.validationMessage) {
      this.input.classList.add('invalid-input');
    } else {
      this.input.classList.remove('invalid-input');
    }
  }
}
