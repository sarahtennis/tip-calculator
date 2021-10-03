export default class NumberInput {
  constructor (selector) {
    this.input = document.querySelector(selector);
    this.initEvents();
  }

  onInput (e) { }
  onBeforeInput (e) { }
  onBlur (e) { }
  onFocus (e) { }

  initEvents () {
    if (!this.input) {
      return;
    }
    this.input.addEventListener('input', (e) => this.onInput(e));
    this.input.addEventListener('beforeinput', (e) => this.onBeforeInput(e));
    this.input.addEventListener('blur', (e) => this.onBlur(e));
    this.input.addEventListener('focus', (e) => this.onFocus(e));
  }
}
