import React, { useRef, useState } from "react";
import ModalMenu from "../components/ModalMenu";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ieltsMock from "../images/ielts-mockup.jpg";
import cattleMock from "../images/cattle-stray-mockup.jpg";
import gravityMock from "../images/gravity-mockup.jpg";
import simulatorMock from "../images/simulator-mockup.jpg";
import techfestMock from "../images/techfest-mockup.jpg";
import covidMock from "../images/covid-mockup.jpg";
import sortingMock from "../images/sorting-mockup.jpg";
import styles from "./projects.module.css";
import Outline from "../components/Outline";
import { Colors } from "../components/colors";

const color = Colors.Yellow;

const Projects = () => {
  const cardRef = useRef([]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <Navbar color={color} title={"My Projects"} />
      <div className="section">
        <div className="container is-fluid">
          {/* Outline Div */}
          <Outline color={color} setIsLoading={setIsLoading} />

          <div className="columns">
            {/* First Column */}
            {!isLoading && (
              <div className="column">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={ieltsMock} alt="IELTS PREPS" />
                  </figure>
                  <h1 className="subtitle mt-3">IELTS PREPS </h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">Firebase</span>
                    <span className="tag is-info is-light">Socket.io</span>
                    <span className="tag is-info is-light">WebRTC</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/IELTS-PREPS"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ielts-video-call.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={cattleMock} alt="Cattle Stray" />
                  </figure>
                  <h1 className="subtitle mt-3">Cattle Stray</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">Firebase</span>
                    <span className="tag is-info is-light">React-Native</span>
                    <span className="tag is-info is-light">Expo</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Cattle-Stray"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1kkF4HdrfCxnD7RVJFLUjuff9e1jgurEZ/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      APK
                    </a>
                  </footer>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={gravityMock} alt="Gravity Educatin" />
                  </figure>
                  <h1 className="subtitle mt-3">Gravity Education</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">PHP / Laravel</span>
                    <span className="tag is-info is-light">MySQL</span>
                    <span className="tag is-info is-light">React-Native</span>
                    <span className="tag is-info is-light">Expo</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Online-Exam-MERN"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ferinpatel.OnlineExam"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Play Store
                    </a>
                  </footer>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={simulatorMock} alt="Simulator 8085" />
                  </figure>
                  <h1 className="subtitle mt-3">Simulator 8085</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Simulate8085"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/Simulate8085/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>
              </div>
            )}

            {/* Menu Placeholder */}
            <div className="column  is-hidden-touch has-text-centered">
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
                    <h1 className="is-size-3-desktop">My Projects</h1>
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
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={techfestMock} alt="TechFest 2020" />
                  </figure>
                  <h1 className="subtitle mt-3">TechFest 2020</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">HTML</span>
                    <span className="tag is-info is-light">CSS</span>
                    <span className="tag is-info is-light">JavaScript</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/TechFest2020"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/TechFest2020/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={covidMock} alt="COVID-19" />
                  </figure>
                  <h1 className="subtitle mt-3">COVID-19 Tracker</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">HTML</span>
                    <span className="tag is-info is-light">CSS</span>
                    <span className="tag is-info is-light">JavaScript</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/COVID-19"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/COVID-19/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={sortingMock} alt="Sorting Visualizer" />
                  </figure>
                  <h1 className="subtitle mt-3">Sorting Visualizer</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/sorting-visual"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/sorting-visual/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
