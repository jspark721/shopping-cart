import React, { Component } from 'react';

class Counter extends Component {
  // constructor() {
  // you don't have to use bind method if you use arrow function
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-success btn-sm'
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className='btn btn-warning btn-sm m-2'
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
