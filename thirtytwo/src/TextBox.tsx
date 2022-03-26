import React from 'react';
import './App.css';

function TextBox(props: any) {
    const text = (event: any) => {
        props.change(event.target.value)
    }
    return (
        <div className="Horoscope">
            <label>
                {props.label}
                <input type="text" onChange={text}/>
            </label>
        </div>
    );
}

export default TextBox;