import React from 'react';

class Button extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
    };
  }

  render () {
    var innerNum = this.props.inner;
    var className = "pagination__button";
    if (this.props.current)
      className += " pagination__button--current";

    return (
      <button
        className={className}
        onClick={() => this.props.onClick(innerNum)}
        >
        { innerNum }
      </button>
    );
  }
}

export default Button;
