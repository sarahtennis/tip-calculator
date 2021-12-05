export default class Total {
  constructor (calculations, reset) {
    this.calculations = calculations;
    this.reset = reset;
    this.tipPerPerson = document.querySelector('#tip-per-person');
    this.totalPerPerson = document.querySelector('#total-per-person');
    this.resetButton = document.querySelector('.reset-btn');
    this.updateValues();
    this.initResetEvents();
  }

  initResetEvents () {
    if (!this.resetButton) {
      return;
    }
    this.resetButton.addEventListener('click', (e) => {
      this.reset();
    });
  }

  setCalculations (newCalculations) {
    this.calculations = { ...this.calculations, ...newCalculations };
    this.updateValues();
  }

  updateValues () {
    const { bill, tip, people } = this.calculations;
    if (bill === null || tip === null || !people) {
      this.tipPerPerson.innerText = Number(0).toFixed(2);
      this.tipPerPerson.setAttribute('title', Number(0).toFixed(2));
      this.totalPerPerson.innerText = Number(0).toFixed(2);
      this.totalPerPerson.setAttribute('title', Number(0).toFixed(2));
      return;
    }
    const tipTotal = (bill * tip / 100);
    this.tipPerPerson.innerText = (tipTotal / people).toFixed(2);
    this.tipPerPerson.setAttribute('title', (tipTotal / people).toFixed(2));
    this.totalPerPerson.innerText = ((bill + tipTotal) / people).toFixed(2);
    this.totalPerPerson.setAttribute('title', ((bill + tipTotal) / people).toFixed(2));
  }
}
