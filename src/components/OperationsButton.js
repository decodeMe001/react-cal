import React from 'react'

function OperationsButton(props) {
    return (
      <button className="btn" onClick = { props.onClick } >
        { props.value }
      </button>
    );
  }

  export default OperationsButton;