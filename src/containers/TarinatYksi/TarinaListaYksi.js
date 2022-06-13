import React from 'react';
import TarinaYksi from './TarinaYksi';


function TarinaLista(props) {
    const {tarinat, onRemoveFromList} = props;
    

    return (
        <ol>
            {tarinat.map
            ((tarina, index) =>
            (<TarinaYksi key = {index} title ={tarina}   
            onRemove = {() => onRemoveFromList(index)} /> ))}
       
        </ol>       
  
    )
}
export default TarinaLista;