import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import ModalMenu from "../components/ModalMenu";
import Navbar from "../components/Navbar";
import Outline from "../components/Outline";
import styles from "./about.module.css";
import Page404 from "../images/404.gif";

const color = "#000";

const PageNotFound = () => {
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
                <img src={Page404} alt="404 Page Not Found" />
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
                    <h1 className="is-size-3-desktop">Page Not Found</h1>
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
                <p className="is-size-4">Useful Links</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    margin: "5px",
                  }}
                >
                  <Link className="mt-2" to="/">
                    Home
                  </Link>
                  <Link className="mt-2" to="/projects">
                    My Projects
                  </Link>
                  <Link className="mt-2" to="/skills">
                    My Skill
                  </Link>
                  <Link className="mt-2" to="/about">
                    About Me
                  </Link>
                  <Link className="mt-2" to="/contact">
                    Contact Me
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageNotFound;
