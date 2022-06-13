import React, { Component } from "react";
import './index.css';
import githubJpg from './images/githubjpg.jpg';
import githubPng from './images/githubpng.png';
import githubSvg from './images/githubsvg.svg';
import {ReactComponent as GithubSvgComponent } from './images/kattisvg.svg';


class Logocat extends Component {
  render() {
    return (
      <div class="logo">
      
        <h2>Logoista</h2>
        <p>Jpg kuva public kansiosta</p>
        <img class="sample-icon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src="/images/GitHub_JPG_katti.jpg"/>
     
        <p>Jpg kuva importattuna</p>
        <img class="sample-icon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubJpg}/>

        <p>Png kuva importattuna</p>
        <img class="sample-icon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubPng}/>

        <p>Svg kuva importattuna</p>
        <img class="sample-icon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubSvg}/>

        <p>Svg kuva importattu komponenttina, täyttöväri</p>
        <GithubSvgComponent class = "oticon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" />

        <p>Png as background-image</p>
        <div class="sample-icon" 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          style={{backgroundImage: "url(" + githubPng + ")", backgroundSize: "contain"}} >
        </div>
      </div>
    );
  }
}

export default Logocat;


 

 
