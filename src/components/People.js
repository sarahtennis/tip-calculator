import IntegerInput from './IntegerInput';

export default class People {
  constructor (calculate) {
    this.calculate = calculate;
    this.onValidInput = (val) => {
      this.calculate({ people: val });
    };
    this.peopleInput = new IntegerInput('#people', this.onValidInput);
    this.onReset = () => {
      this.peopleInput.input.value = '';
    };
  }
}
