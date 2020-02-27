import React from 'react';

function DisplayComponents(props) {
    return (
      <div className="display">
        { props.getCurrentState || '' }
      </div>
    );
  }

  export default DisplayComponents;