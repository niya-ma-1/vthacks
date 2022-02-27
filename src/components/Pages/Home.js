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
      <meta name="viewport" content="initial-scale=1"></meta>
      <div className="bruh">
        <Parallax bgImage={city_skyline} bgImageAlt="City skyline with moving clouds" strength={500}>
          <div className="blockaideTitle">BLOCKAIDE</div>
        </Parallax>
        <div class="aboutTextBlock">
          <b style={{text:"white"}}>Breaking through the digital blockade with BlockAide</b><br></br><br></br>
          BlockAide is a crowdfunding platform built on top of the Ethereum blockchain. BlockAide aims to democratize crowdfunding by providing...
        </div>
        <Parallax bgImage={control} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">Control</div>
        </Parallax> 
        <div class="aboutTextBlock">
          <b>BlockAide has no third parties</b>
          <br></br>
          <br></br>BlockAide publishes public Ethereum addresses for crowdfunding projects. This means that once a project has been published its control is in the hands of the people, not third parties
        </div>
        <Parallax bgImage={transparency} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">Transparency</div>
        </Parallax> 
        <div class="aboutTextBlock">
          <b>Have you ever wondered where your donations go?</b>
          <br></br>
          <br></br>With BlockAide, your contributions are permanently added to the public blockchain for transparent crowdfunding</div>
        <Parallax bgImage={resources} bgImageAlt="Cyber swirls on black background" strength={500}>
          <div className="blockaideTitle">No Fees</div>
        </Parallax>
        <div class="aboutTextBlock">
          <b>BlockAide cuts out the middle man</b>
          <br></br>
          <br></br>Most crowdfunding tools charge a fee on all donations. Unlike these other tools, BlockAide is a fee-less platform and won't take a cut of any of your contributions</div>
      </div>
    </div>
    );
};
