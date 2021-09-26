class Calculator {
  constructor() {
    this.calculations = {
      bill: 20,
      tip: 15
    }
    this.bill = new Bill(this.calculate);
    this.tipPercent = new TipPercent(this.calculate);
    this.total = new Total(this.calculations);
  }

  calculate = (thingy) => {
    this.total.setCalculations(thingy);
  }
}

class Bill {
  constructor(calculate) {
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

  validInput() {
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

  updateValidationMessage() {
    this.inputValidation.innerHTML = this.validationMessage;
    if (this.validationMessage) {
      this.input.classList.add('invalid-input');
    } else {
      this.input.classList.remove('invalid-input');
    }
  }
}

class TipPercent {
  constructor(calculate) {
    this.calculate = calculate;
    this.percent = "15";
    this.selected = document.querySelector('.tip-container .selected');
    this.buttons = document.querySelectorAll('button.tip-option');
    this.input = document.querySelector('input.tip-option');

    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;
        this.percent = value;
        this.selected.classList.remove('selected');
        this.selected.classList.remove('active');
        this.selected = event.target;
        this.selected.classList.add('selected');
        this.calculate({ tip: Number(value) });
      });

      button.addEventListener('focus', (e) => {
        this.selected.classList.remove('active');
      });
    });

    this.input.addEventListener('beforeinput', (e) => {
      if (!parseInt(e.data) && e.data !== null && e.data != '0') {
        e.preventDefault();
      }
    });

    this.input.addEventListener('input', () => {
      if (this.input.value.length > 0) {
        this.calculate({ tip: Number(this.input.value) });
      }
    });

    this.input.addEventListener('focus', (e) => {
      this.selected.classList.remove('selected');
      this.selected = e.target;
      this.selected.classList.add('selected');
      this.selected.classList.remove('active');
      if (this.input.value) {
        this.calculate({ tip: Number(this.input.value) });
      }
    });

    this.input.addEventListener('blur', () => {
      if (this.selected === this.input && this.input.value) {
        this.input.classList.add('active');
      }
    });
  }
}

class Total {
  constructor(calculations) {
    this.calculations = calculations;
    this.tipPerPerson = document.querySelector('#tip-per-person');
    this.totalPerPerson = document.querySelector('#total-per-person');
    this.updateValues();
  }

  setCalculations(newCalculations) {
    this.calculations = { ...this.calculations, ...newCalculations };
    this.updateValues();
  }

  updateValues(n = 1) {
    const peopleCount = n;
    const tipTotal = (this.calculations.bill * this.calculations.tip / 100);

    this.tipPerPerson.innerText = (tipTotal / peopleCount).toFixed(2);
    this.totalPerPerson.innerText = ((this.calculations.bill + tipTotal) / peopleCount).toFixed(2);
  }
}

new Calculator();