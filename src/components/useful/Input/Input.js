import React from 'react'
import './Input.scss';

export default function Input(prop) {
    return (<input
        style={{ backgroundImage: "url(" + prop.svg + ")" }}
        required
        className={prop.class}
        title={prop.title}
        type={prop.type}
        name={prop.name}
        placeholder={prop.placeholder}
        value={prop.value} 
        onChange={prop.emailOnChangeHandlerChange, prop.passOnChangeHandlerChange}
        />
    )
}
