import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import Outline from "../components/Outline";
import { Colors } from "../components/colors";

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
        color1={Colors.Yellow}
        color2={Colors.Green}
        color3={Colors.Orange}
        color4={Colors.Blue}
        setIsLoading={setIsLoading}
      />
      {!isLoading && (
        <>
          <Menu color={"#000"} />
          <p className={styles.titlePortfolio}>Portfolio</p>
          <p className={styles.nameTitle}>Alec Campbell</p>
        </>
      )}
    </motion.div>
  );
};

export default Home;
