import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import ModalMenu from "../components/ModalMenu";
import Navbar from "../components/Navbar";
import Outline from "../components/Outline";
import styles from "./about.module.css";
import SocialMedia from "../components/SocialMedia";
import Resume from "./resume.pdf";
import { Colors } from "../components/colors";

const color = Colors.Green;

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <Navbar color={color} title={"About Me"} />
      <div className="section">
        <div className="container ">
          {/* Outline Div */}
          <Outline color={color} setIsLoading={setIsLoading} />

          <div
            className={classnames("columns is-vcentered", styles.columnsHeight)}
          >
            {/* First Column */}
            {!isLoading && (
              <div className="column">
                <h1 className="title is-2  is-spaced is-uppercase">
                  Ferin Patel
                </h1>
                <h1 className="subtitle is-4">Full Stack Developer</h1>
                <p>
                  I am a dedicated and efficient full stack developer and
                  passionate about solving problems with my programming and
                  logical thinking skills. Profuse experience of developing and
                  maintaining web as well as mobile applications.
                </p>
                <a
                  class="button is-primary my-5"
                  href={Resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  My Resume
                </a>
                <SocialMedia />
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
                    <h1 className="is-size-3-desktop">About Me</h1>
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
              <div className={classnames("column", styles.addMargin)}>
                <h3 class="title">My Education</h3>

                <aside class="menu">
                  <p class="menu-label">Undergraduate</p>
                  <ul class="menu-list">
                    <li>Bachelor of Engineering</li>
                    <li>
                      <ul>
                        <li className="m-2 is-size-5">Computer Engineering</li>
                        <li className="m-2">9.39 CGPA</li>
                        <li className="m-2">
                          Gujarat Technological university
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p class="menu-label mt-5">School</p>
                  <ul class="menu-list">
                    <li>H.S.C</li>
                    <li>
                      <ul>
                        <li className="m-2 is-size-5">Bhulka Vihar School</li>
                        <li className="m-2">80 Percent</li>
                      </ul>
                    </li>
                  </ul>
                </aside>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
