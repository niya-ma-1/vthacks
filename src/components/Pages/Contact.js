import { React} from "react";
import { Form , Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useState} from "react"; 
import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,} from "firebase/auth";
import {auth} from './firebase_config';
import '../Styles.css';
import Nessie from './Nessie';

function Contact() {
  return(
    <div>
      
    </div>
  );
}

export default Contact;
