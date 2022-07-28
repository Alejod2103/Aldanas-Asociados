import React from 'react'
import "./css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.js"
import Counter from './Components/Counter/Counter';
import About from './Components/About/About';
import Service from './Components/Servicios/Service';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import BannerHomePage from './Pages/BannerHomePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={BannerHomePage} />
            <Route path="/counter" exact component={Counter} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/features" exact component={Features} />
          </Switch>
       < Footer />
      </Router>
    </>
  )
}

export default App