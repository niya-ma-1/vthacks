import React from "react";
import Button from 'react-bootstrap/Button';
import '../Styles.css';
import axios from 'axios';
import { SuperAgent } from "superagent";
import logo from '../assets/logo.png';
import city_skyline from '../assets/city-skyline.gif';
import control from '../assets/control.jpg';
import transparency from '../assets/transparency.jpg';
import resources from '../assets/resources.jpg';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';




export const Home = () => {
  
  // return (
  //   <div className="home">
  //   </div>
  // );

  return (
    <div>
      <div className="bruh">
        <Parallax bgImage={city_skyline} bgImageAlt="City skyline with moving clouds" strength={500}>
          <div className="blockaideTitle">BLOCKAIDE</div>
          
        </Parallax>
        <div class="aboutTextBlock">
          Unlike traditional crowdfunding, BlockAide is a tool based on the blockchain. By making crowdfunding decoupled, BlockAide provides...
        </div>
        <Parallax bgImage={resources} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">Resources</div>
        </Parallax>
        <div class="aboutTextBlock"></div>
        <Parallax bgImage={transparency} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">Transparency</div>
        </Parallax> 
        <div class="aboutTextBlock"></div>
        <Parallax bgImage={control} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">Control</div>
        </Parallax> 
        <div class="aboutTextBlock"></div>
      </div>
    </div>
    );
};
