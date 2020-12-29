import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import SocialMedia from "../components/SocialMedia";
import ModalMenu from "../components/ModalMenu";
import Navbar from "../components/Navbar";
import Outline from "../components/Outline";
import mailGif from "../images/mail.gif";
import styles from "./about.module.css";
import { Colors } from "../components/colors";

const color = Colors.Orange;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <Navbar color={color} title={"Contact Me"} />
      <div className="section">
        <div className="container is-fluid">
          {/* Outline Div */}
          <Outline color={color} setIsLoading={setIsLoading} />

          <div
            className={classnames("columns is-vcentered", styles.columnsHeight)}
          >
            {/* First Column */}
            {!isLoading && (
              <div className="column has-text-centered">
                <img src={mailGif} alt="Send Mail" />

                <div className="is-hidden-touch">
                  <SocialMedia />
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
                    <h1 className="is-size-3-desktop">Contact Me</h1>
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
              <div className="column ">
                <p className="subtitle is-2">Get In Touch</p>
                <p className="mb-5">This Contact Form Actually Works</p>

                <form action="https://formspree.io/f/xoqpkpjd" method="POST">
                  <div className="box">
                    <div class="field">
                      <label class="label">Full Name</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="ex: Ferin Patel"
                          name="fullname"
                          required
                        />
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control">
                        <input
                          class="input"
                          type="email"
                          placeholder="ex: ferinpatel@example.com"
                          name="email"
                          required
                        />
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Message</label>
                      <textarea
                        class="textarea"
                        placeholder="Type Your message"
                        name="message"
                      ></textarea>
                    </div>

                    <button class="button is-primary is-outlined">Send</button>
                  </div>
                </form>

                <div className=" is-hidden-desktop ">
                  <SocialMedia />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
