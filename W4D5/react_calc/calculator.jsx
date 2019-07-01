import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: '', num2: '' };
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNumber1.bind(this)} value={this.state.num1} />
        <input type="text" onChange={this.setNumber2.bind(this)} value={this.state.num2} />
      </div>
    );
  }

  setNumber1(e) {
    let value = parseInt(e.target.value);
    if (value || e.target.value === '') {
      this.setState({ num1: parseInt(value) || '' });
    }
  }

  setNumber2(e) {
    let value = parseInt(e.target.value);
    if (value || e.target.value === '') {
      this.setState({ num2: parseInt(value) || '' });
    }
  }
}
export default Calculator;
