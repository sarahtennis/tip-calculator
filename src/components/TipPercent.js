import IntegerInput from './IntegerInput';

export default class TipPercent {
  constructor (calculate) {
    this.calculate = calculate;
    this.onValidInput = (val) => {
      this.calculate({ tip: val });
    };
    this.selected = document.querySelector('.tip-container .selected');
    this.buttons = document.querySelectorAll('button.tip-option');
    this.tipInput = new IntegerInput('input.tip-option', this.onValidInput);

    this.addTipInputEvents();

    this.buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;
        if (this.selected) {
          this.selected.classList.remove('selected');
          this.selected.classList.remove('active');
        }
        this.selected = event.target;
        this.selected.classList.add('selected');
        this.calculate({ tip: Number(value) });
      });

      button.addEventListener('focus', (e) => {
        if (this.selected) {
          this.selected.classList.remove('active');
        }
      });
    });
  }

  onReset () {
    if (this.selected) {
      this.selected.classList.remove('selected');
      this.selected.classList.remove('active');
    }
    this.tipInput.input.value = '';
  }

  addTipInputEvents () {
    if (!(this.tipInput && this.tipInput.input)) {
      return;
    }

    this.tipInput.input.addEventListener('focus', (e) => {
      if (this.selected) {
        this.selected.classList.remove('selected');
      }
      this.selected = e.target;
      this.selected.classList.add('selected');
      this.selected.classList.remove('active');
      if (e.target.value) {
        this.calculate({ tip: Number(e.target.value) });
      }
    });

    this.tipInput.input.addEventListener('blur', (e) => {
      if (this.selected === this.tipInput.input && this.tipInput.input.value) {
        this.tipInput.input.classList.add('active');
      }
    });
  }
}
