import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import Outline from "../components/Outline";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className={styles.containerWrapper}
    >
      <Outline
        color="#0af"
        color1="#ffe27a"
        color2="#8cddf3"
        color3="#75ebb0"
        color4="#ffa27a"
        setIsLoading={setIsLoading}
      />
      {!isLoading && (
        <>
          <Menu color={"#000"} />
          <p className={styles.titlePortfolio}>Portfolio</p>
          <p className={styles.nameTitle}>Ferin Patel</p>
        </>
      )}
    </motion.div>
  );
};

export default Home;
