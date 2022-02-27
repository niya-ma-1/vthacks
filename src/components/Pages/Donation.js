import React, { memo, useState, useEffect }from "react";
import {Table, ProgressBar, tr, td, thead, InputGroup, FormControl} from 'react-bootstrap'
import { useTable } from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles.css';
import { useSSRSafeId } from "@react-aria/ssr";
import { useAuth0 } from '@auth0/auth0-react';
import { doc, setDoc, collection, query, getDocs  } from "firebase/firestore";
import db from "./firebase_config";
import { render } from "@testing-library/react";


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

export const Donation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async (e) => {
      const q = query(collection(db, "CrowdFundingProjects"));
      const querySnapshot = await getDocs(q);
  
      await querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          items.push(doc.data())
      });
      console.log(items);
    }
    getData();
  }, []);
  const headers = ["Title", "Description", "Author", "Goal", "Address"];
  const attributes = ["title", "description", "author", "goal", "address"];

  return (
    <div className="page">
      <Table responsive>
      <thead>
        <tr>
          {Array.from({ length: 5 }).map((_, index) => (
            <th key={index}>{headers[index]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr>
            {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>{item[attributes[index]]}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </Table>
      {/* <div style={{height:"20px", backgroundColor: 'black'}}>
      </div> */}
      </div>
  );
  
};
