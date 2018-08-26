import React, { Component } from 'react';

export default function(ComponentItself, className) {
  if (!ComponentItself.prototype.render) {
    throw new Error('Component for HOC withCustomClassName must ' +
      'be class instance.');
  }

  return class extends Component {
    render() {
      var props = Object.assign({}, this.props);
      var customClassName = className;

      if (this.props.className) {
        customClassName += ` ${this.props.className}`;
      }

      props.className = customClassName;

      return (
        <ComponentItself {...props} />
      );
    }
  };
};
