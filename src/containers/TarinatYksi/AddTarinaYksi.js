import React, { useState } from 'react';

function AddTarina (props) {
    const [uusiTarina, setuusiTarina]= useState(undefined);

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAddTarina(uusiTarina)
    };

    return (
        <form onSubmit = {(event) => onSubmit (event)}>
            <input type ="text"
            onChange = {(event)=> setuusiTarina(event.target.value)}/>
        
            <button type = "Submit">Lisää</button>
        </form>
    )
}
export default AddTarina;
