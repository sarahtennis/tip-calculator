import NumberInput from './NumberInput';

export default class IntegerInput extends NumberInput {
  constructor (selector, onValidInput) {
    super(selector);
    this.onValidInput = typeof onValidInput === 'function' ? onValidInput : this.defaultOnValidInput;
    this.onInput = (e) => {
      const val = this.input.value;
      const intVal = parseInt(val);
      if (val.length > 0 && !isNaN(intVal)) {
        this.onValidInput(intVal);
      }
    };
  }

  onBeforeInput (e) {
    if (!parseInt(e.data) && e.data !== null && e.data !== '0') {
      e.preventDefault();
    }
  }

  // No action on valid input
  defaultOnValidInput () {}
}
