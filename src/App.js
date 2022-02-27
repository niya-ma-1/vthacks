import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Create } from "./components/Pages/Create";
import { Donation } from "./components/Pages/Donation";
import Contact from "./components/Pages/Contact";
import Transaction from "./components/Pages/Transaction";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";

import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  const { isLoading }  = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Router>
        <NavBar/>
        <div className='pages'>
          <Route>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/donation" component={Donation} />
            <Route path="/contact" component={Contact} />
            <Route path="/transaction" component={Transaction} />
          </Route>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
