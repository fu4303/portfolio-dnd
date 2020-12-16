import React, { useRef, useEffect, useCallback } from "react";
import { TweenMax } from "gsap";
import styles from "./Outline.module.css";

const Outline = ({ color, setIsLoading, color1, color2, color3, color4 }) => {
  const TopSide = useRef();
  const LeftSide = useRef();
  const RightSide = useRef();
  const BottomSide = useRef();

  const performPageEnterAnimation = useCallback(() => {
    setIsLoading(true);
    TweenMax.fromTo(
      TopSide.current,
      0.3,
      {
        width: 0,
        background: color1 ? color1 : color,
        immediateRender: false,
        autoRound: false,
      },
      {
        width: "100%",
        background: color1 ? color1 : color,
      }
    );

    // right
    TweenMax.fromTo(
      RightSide.current,
      0.3,
      {
        height: 0,
        background: color2 ? color2 : color,
        immediateRender: false,
        autoRound: false,
      },
      {
        height: "100%",
        background: color2 ? color2 : color,
        delay: 0.5,
      }
    );

    // bottom
    TweenMax.fromTo(
      BottomSide.current,
      0.3,
      {
        width: 0,
        background: color3 ? color3 : color,
        immediateRender: false,
        autoRound: false,
      },
      {
        width: "100%",
        background: color3 ? color3 : color,
        delay: 0.8,
      }
    );

    // left
    TweenMax.fromTo(
      LeftSide.current,
      0.3,
      {
        height: 0,
        background: color4 ? color4 : color,
        immediateRender: false,
        autoRound: false,
      },
      {
        height: "100%",
        background: color4 ? color4 : color,
        delay: 1.1,
        onComplete: () => {
          setIsLoading(false);
        },
      }
    );

    // TweenMax.fromTo(
    //   cardRef.current,
    //   { yPercent: 200, opacity: 0 },
    //   { yPercent: 0, opacity: 1, ease: Power3.easeInOut, stagger: 0.3 }
    // );
  }, [color, setIsLoading, color1, color2, color3, color4]);

  useEffect(() => {
    performPageEnterAnimation();
  }, [performPageEnterAnimation]);

  return (
    <div className={styles.square}>
      <span ref={LeftSide} className={styles.leftSide}></span>
      <span ref={TopSide} className={styles.topSide}></span>
      <span ref={RightSide} className={styles.rightSide}></span>
      <span ref={BottomSide} className={styles.bottomSide}></span>
    </div>
  );
};

export default Outline;
