import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: 0 };
    this.doCalculation = this.doCalculation.bind(this);
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNumber1.bind(this)} value={num1} />
        <input type="text" onChange={this.setNumber2.bind(this)} value={num2} />
        <button type="submit" onClick={this.doCalculation} value="+">
          +
        </button>
        <button type="submit" onClick={this.doCalculation} value="-">
          -
        </button>
        <button type="submit" onClick={this.doCalculation} value="*">
          *
        </button>
        <button type="submit" onClick={this.doCalculation} value="/">
          /
        </button>
        <button type="submit" onClick={this.doCalculation} value="reset">
          Clear
        </button>
      </div>
    );
  }

  doCalculation(e) {
    e.preventDefault();
    let num1 = this.state.num1;
    let num2 = this.state.num2;
    if (num1 && num2) {
      switch (e.target.value) {
        case '+':
          this.setState({ result: num1 + num2 });
          break;
        case '-':
          this.setState({ result: num1 - num2 });
          break;
        case '*':
          this.setState({ result: num1 * num2 });
          break;
        case '/':
          this.setState({ result: num1 / num2 });
          break;
        case 'reset':
          this.setState({ result: 0, num1: '', num2: '' });
          break;
      }
    }
  }

  setNumber1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num1 });
  }

  setNumber2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num2 });
  }
}
export default Calculator;
