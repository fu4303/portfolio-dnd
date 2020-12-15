import React, { useEffect } from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import Projects from "./pages/projects";
import Home from "./components/Home";
import About from "./pages/about";
import Skills from "./pages/skills";
import "aos/dist/aos.css";
import "./App.css";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/404" exact component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
