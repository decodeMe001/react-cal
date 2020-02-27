import React from 'react';

export default function Operation(props) {
    return (
        <button className="btn operator" onClick = { props.onClick } > { props.value } </button>
    )
}
