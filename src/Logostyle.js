import React, { Component } from "react";
//import './index.css';
import styled from 'styled-components'
import githubJpg from './images/githubjpg.jpg';
import githubPng from './images/githubpng.png';
import githubSvg from './images/githubsvg.svg';
import {ReactComponent as GithubSvgComponent } from './images/kattisvg.svg';
import {ReactComponent as githubsvgkomp} from './images/githubsvgkomp.svg';


const IconImage = styled.img`
  width: 200px;
  height: 200px;
`;

const SafeGithubLogo = styled.div` 
  width: 200px;
  height: 200px; 
  background-image: url(${githubPng});
`;

const ImportedGithubSvgComponent = styled(githubsvgkomp)`
  width: 200px;
  height: 200px;
`;

const StyledGithubSvgComponent = styled(GithubSvgComponent)`
  width: 200px;
  height: 200px;
  &:hover path {
  fill: red;
  }
`;


class Logostyle extends Component {
  render() {
    return (
      <div className="logo">
      
        <h2>Logoista</h2>
        <p>Jpg kuva public kansiosta</p>
        <IconImage 
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src="/images/GitHub_JPG_katti.jpg"/>
     
        <p>Jpg kuva importattuna</p>
        <IconImage  
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubJpg}/>

        <p>Png kuva importattuna</p>
        <IconImage  
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubPng}/>

        <p>Svg kuva importattuna</p>
        <IconImage  
          alt="githubin logo jossa valkoinen kissaprofiili mustan ympyrätaustan sisällä" 
          src={githubSvg}/>

        <p>Svg kuva importattu komponenttina</p>
        <ImportedGithubSvgComponent/>

        <p>Png Safeimage</p>
        <SafeGithubLogo/>

        <p>Styled svg komponentti täyttövärillä</p>
        <StyledGithubSvgComponent/>

      </div>
    );
  }
}

export default Logostyle;