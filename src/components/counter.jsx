import React, { Component } from 'react';

class Counter extends Component {
  // constructor() {
  // you don't have to use bind method if you use arrow function
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
