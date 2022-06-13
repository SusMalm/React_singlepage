import React, { Component } from "react";
import {Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";

import Koti from "./Koti";
import TarinatYksi from './containers/TarinatYksi/TarinatYksi';
import Tarinat from './containers/TarinatKaksi/Tarinatkaksi'; /*puuttuu (redux) toimintoja*/

import Logocat from "./Logocat";
import Logostyle from "./Logostyle";

import Kartta from "./Kartta";
import Karttakaksi from "./Karttakaksi"; /*ei toimi vielä*/
import Karttakolme from "./Karttakolme";
import Karttanelkku from "./Karttanelkku"; /*clikker markkerit ei toimi vielä*/
import Karttaviisi from "./Karttaviisi";
import Suomikartta from "./Suomikartta";

import Kuvakaruselli from "./Kuvakaruselli";
import Yhteys from "./containers/Yhteys/Yhteys";

import store from "./store";

 
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h1>Matkalla media-assistentista juniorikoodariksi</h1>
            <ul className="top-header">
              <li><NavLink exact to="/">Koti</NavLink></li>
              <li><NavLink to="/tarinatYksi">Tarina 1</NavLink></li>
              <li><NavLink to="/tarinat">Tarina 2</NavLink></li>
              
              <li><NavLink to="/logocat">Logot 1</NavLink></li>
              <li><NavLink to="/logostyle">Logot 2</NavLink></li>

              <li><NavLink to="/kartta">Kartta 1</NavLink></li>
              <li><NavLink to="/karttakaksi">Kartta 2X </NavLink></li>
              <li><NavLink to="/karttakolme">Kartta 3</NavLink></li>
              <li><NavLink to="/karttanelkku">Kartta 4X</NavLink></li>
              <li><NavLink to="/karttaviisi">Kartta 5</NavLink></li>
              <li><NavLink to="/suomikartta">Kartta 6 pyöräretki</NavLink></li>

              <li><NavLink to="/kuvakaruselli">Kuvakaruselli</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
            </ul>
            <div className="content">
              <Routes>
                <Route path="/" element={<Koti />}/>
                <Route path="/tarinatYksi" element={<TarinatYksi />}/>
                <Route path="/tarinat" element={<Tarinat />}/>

              
                <Route path="/logocat" element={<Logocat />}/>
                <Route path="/logostyle" element={<Logostyle />}/>

                <Route path="/kartta" element={<Kartta />}/>
                <Route path="/karttakaksi" element={<Karttakaksi />}/>
                <Route path="/karttakolme" element={<Karttakolme />}/>
                <Route path="/karttanelkku" element={<Karttanelkku />}/>
                <Route path="/karttaviisi" element={<Karttaviisi />}/>
                <Route path="/suomikartta" element={<Suomikartta />}/>

                <Route path="/kuvakaruselli" element={<Kuvakaruselli />}/>
                <Route path="/yhteys" element={<Yhteys />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
 
export default Main;