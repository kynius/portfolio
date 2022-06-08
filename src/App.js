import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {
  return (
    <>
    <Layout/>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route path={'/projects'}>
                    <Projects/>
                </Route>
                <Route path={'/about'}>
                    <About/>
                </Route>
                <Route path={'/contact'}>
                    <Contact/>
                </Route>
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
