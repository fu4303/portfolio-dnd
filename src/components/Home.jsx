import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className={styles.containerWrapper}
    >
      <Menu color={"#000"} />
      <p className={styles.titlePortfolio}>Portfolio</p>
      <p className={styles.nameTitle}>Ferin Patel</p>
    </motion.div>
  );
};

export default Home;
