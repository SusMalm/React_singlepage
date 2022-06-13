import React, { Component } from 'react';
import TarinaListaYksi from './TarinaListaYksi';
import AddTarinaYksi from './AddTarinaYksi';

const tarinaData=[
  "Neverending story ",
  "Taru sormusten herrasta ",
  "Harry Potter ja viisasten kivi ",
  "Puhtaat valkeat lakanat ",
  "Ruusun aika "
]

 
class Tarinat extends Component {
  state = {
    tarinat: tarinaData,
  }

  onAddTarina(uusiTarina) {
    this.setState({tarinat:[...this.state.tarinat, uusiTarina]});
  }

  onRemoveFromList(poistettavaIndex) {
    this.setState({tarinat: this.state.tarinat.filter((tarina, index)=> index !== poistettavaIndex)})
  }
  render() {
    const {tarinat} = this.state;

    return (
      <div>
        <h2>Tarinoita</h2>
        <p>Kiinnostavia tarinoita: </p>
        <AddTarinaYksi onAddTarina = {(uusiTarina)=>
        this.onAddTarina(uusiTarina)}/>
        <TarinaListaYksi tarinat = {tarinat}
        onRemoveFromList = {(index) => 
        this.onRemoveFromList(index)}/>


      </div>
    );
  }
}
 
export default Tarinat;
