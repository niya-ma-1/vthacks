import React from "react";
import Button from 'react-bootstrap/Button';
import '../Styles.css';
import axios from 'axios';
import { SuperAgent } from "superagent";
import { Parallax , useParallax} from 'react-parallax';
import logo from "../assets/logo.jpg"




export const Home = () => {
  
  // return (
  //   <div className="home">
  //   </div>
  // );

  return (
    <div>

    <Parallax blur={10} bgImage={logo} strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
    </div>
  );
};
