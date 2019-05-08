import React from 'react';
const validation = (props) => {

    let text = 'Text long enough';

    if(props.length < 6){
        text = 'Text too short';
    }

    return (
        props.length > 0?
        <p>{text}</p>: null
    );
}

export default validation;