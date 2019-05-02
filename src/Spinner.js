import React from 'react';

const Spinner = props => {
  return (
    // Semantic UI Loader
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.text}</div>
    </div>
  );
};

// Default properties (like text)
Spinner.defaultProps = {
  text: 'Loading...'
};

export default Spinner;
