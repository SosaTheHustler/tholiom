import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/nav/navbar";
import Schedule from "./pages/schedule";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Schedule" component={Schedule} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
