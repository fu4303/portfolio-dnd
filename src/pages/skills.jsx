import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ModalMenu from "../components/ModalMenu";
import Navbar from "../components/Navbar";
import Outline from "../components/Outline";
import "./skills.css";

const color = "#8cddf3";

const frontendArr = [
  "html",
  "css",
  "sass",
  "javascript",
  "typescript",
  "react",
  "vue",
  "c",
  "java",
  "python",
  "nodejs",
  "php",
];

const frameworkArr = [
  "django",
  "laravel",
  "flutter",
  "graphql",
  "firebase",
  "mysql",
  "postgresql",
  "docker",
  "kubernetes",
  "git",
];

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <Navbar color={color} title={"My Skills"} />
      <div className="section">
        <div className="container is-fluid">
          {/* Outline Div */}
          <Outline color={color} setIsLoading={setIsLoading} />

          <div className="columns">
            {/* First Column */}
            {!isLoading && (
              <div className="column">
                <div className="wrapper">
                  {frontendArr.map((item, index) => {
                    return (
                      <div className="box item is-clickable" key={index}>
                        <figure class="image is-128x128">
                          <img
                            src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${item}/${item}.png`}
                            alt={item}
                          />
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Menu Placeholder */}
            <div className="column is-hidden-touch has-text-centered">
              <AnimatePresence>
                {!isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    style={{
                      position: "fixed",
                      top: "10%",
                      left: "50%",
                      transform: "translate(-50%,-10%)",
                    }}
                  >
                    <h1 className="is-size-3-desktop">My Skills</h1>
                    <Link to="/" className="is-size-6-desktop ">
                      Back to Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <ModalMenu color={color} />
            </div>

            {/* Third Column */}
            {!isLoading && (
              <div className="column">
                <div className="wrapper">
                  {frameworkArr.map((item, index) => {
                    return (
                      <div className="box item is-clickable" key={index}>
                        <figure class="image is-128x128">
                          <img
                            src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${item}/${item}.png`}
                            alt={item}
                          />
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
