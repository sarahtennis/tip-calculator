class Calculator {
  constructor() {
    this.calculations = {
      bill: 20,
      tip: 0
    }
    this.bill = new Bill(this.calculate);
    this.tipPercent = new TipPercent(this.calculate);
    this.total = new Total(this.calculations);
  }

  calculate = (thingy) => {
    console.log(thingy);
    this.total.setCalculations(thingy);
  }
}

class Bill {
  constructor() {
    this.validationMessage = '';
    this.input = document.querySelector('#bill');
    this.inputValidation = this.input.nextElementSibling;
    this.input.addEventListener('focus', () => {
      this.validationMessage = '';
      this.updateValidationMessage();
    });
    this.input.addEventListener('blur', () => {
      this.validInput();
    });
  }

  validInput() {
    const value = parseFloat(this.input.value);
    if (value) {
      console.log('valid');
    } else if (value === 0) {
      this.validationMessage = 'Cannot be 0';
    } else {
      this.validationMessage = 'Invalid input';
    }
    this.updateValidationMessage();
  }

  updateValidationMessage() {
    this.inputValidation.innerHTML = this.validationMessage;
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
        this.selected = event.target;
        this.selected.classList.add('selected');
        this.calculate({ tip: value });
      });
    });
  }
}

class Total {
  constructor(calculations) {
    console.log(calculations);
    this.calculations = calculations;
    this.perPerson = document.querySelector('#per-person');
    this.total = document.querySelector('#total');
    this.updateValues();
  }

  setCalculations(newCalculations) {
    this.calculations = { ...this.calculations, ...newCalculations };
    this.updateValues();
  }

  updateValues() {
    console.log(this.calculations);
    this.perPerson.innerText = parseFloat(this.calculations.bill) * parseFloat(this.calculations.tip);
  }
}

new Calculator();