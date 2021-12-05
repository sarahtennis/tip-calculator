import './styles/main.css';
import Bill from './components/Bill';
import TipPercent from './components/TipPercent';
import People from './components/People';
import Total from './components/Total';

if (document.fonts) {
  document.fonts.ready.then(() => {
    document.querySelector('.page-container').style.opacity = 1;
  });
} else {
  // For IE, will potentially show font flash
  document.querySelector('.page-container').style.opacity = 1;
}

const INIT_CALCULATIONS = {
  bill: null,
  tip: null,
  people: null
};

class Calculator {
  constructor () {
    this.calculate = (thingy) => {
      this.total.setCalculations(thingy);
    };
    this.reset = () => {
      this.bill.onReset();
      this.tipPercent.onReset();
      this.people.onReset();
      this.calculate(INIT_CALCULATIONS);
    };
  }

  init () {
    this.bill = new Bill(this.calculate);
    this.tipPercent = new TipPercent(this.calculate);
    this.people = new People(this.calculate);
    this.total = new Total(INIT_CALCULATIONS, this.reset);
  }
}

const calculator = new Calculator();
calculator.init();
