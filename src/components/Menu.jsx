import React, { useRef, useEffect, useState, useCallback } from "react";
import { TweenMax, Power3 } from "gsap/all";
import { Tween } from "react-gsap";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
import { addMyFunction, myCloseFunction } from "../helper";
import styles from "./Menu.module.css";
import { Colors } from "./colors";

let IS_MOUNTED = false;
const Menu = ({ color }) => {
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stroke, setStroke] = useState(color);
  const [id, setId] = useState(null);
  const [menuText, setMenuText] = useState("Click Menu");

  const RectRef = useRef(null);
  const CircleMain = useRef(null);
  const Circle1Ref = useRef(null);
  const Circle2Ref = useRef(null);
  const Circle3Ref = useRef(null);
  const Circle4Ref = useRef(null);
  const CloseBtn = useRef(null);

  const handleOpenMenu = () => {
    setStroke("#000");
    TweenMax.to(CircleMain.current, {
      backgroundColor: "white",
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle1Ref.current, 1, {
      top: "15%",
      left: "15%",
      zIndex: 1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle2Ref.current, 1, {
      top: "85%",
      left: "15%",
      zIndex: 1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle3Ref.current, 1, {
      top: "15%",
      left: "85%",
      zIndex: 1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle4Ref.current, 1, {
      top: "85%",
      left: "85%",
      zIndex: 1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(CloseBtn.current, 1, {
      top: "25%",
      left: "50%",
      zIndex: 1,
      ease: Power3.easeInOut,
      onComplete: () => {
        setIsMenuOpen(true);
        setMenuText("Drag to Open");
      },
    });
  };

  const handleOnClose = useCallback(() => {
    TweenMax.to(Circle1Ref.current, 1, {
      top: "50%",
      left: "50%",
      zIndex: -1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle2Ref.current, 1, {
      top: "50%",
      left: "50%",
      zIndex: -1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle3Ref.current, 1, {
      top: "50%",
      left: "50%",
      zIndex: -1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(Circle4Ref.current, 1, {
      top: "50%",
      left: "50%",
      zIndex: -1,
      ease: Power3.easeInOut,
    });
    TweenMax.to(CloseBtn.current, 1, {
      top: "50%",
      left: "50%",
      ease: Power3.easeInOut,
    });
    TweenMax.to(CircleMain.current, {
      backgroundColor: "black",
      ease: Power3.easeInOut,
      onComplete: () => {
        setIsMenuOpen(false);
        setStroke(color);
        setMenuText("Click Menu");
        if (myCloseFunction) {
          myCloseFunction();
        }
      },
    });
  }, [color]);

  const dragDrop = useCallback(() => {
    if (IS_MOUNTED) {
      const circles = document.querySelectorAll(".circle-selector");

      // Drag Start handlers
      circles.forEach((item, index) => {
        item.addEventListener("dragstart", (event) => {
          setId(index);
          setMenuText("Drop Here");
          if (index === 0) {
            setStroke(Colors.Yellow);
          } else if (index === 1) {
            setStroke(Colors.Blue);
          } else if (index === 2) {
            setStroke(Colors.Green);
          } else if (index === 3) {
            setStroke(Colors.Orange);
          }

          event.dataTransfer.setData("text/plain", index);
          event.dataTransfer.effectAllowed = "move";
        });
      });

      // Drag End handlers
      circles.forEach((item) => {
        item.addEventListener("dragend", () => {
          if (IS_MOUNTED) {
            setStroke("#000");
            setMenuText("Drag to Open");
            setId(null);
          }
        });
      });

      // DragOver handler
      document
        .querySelector("#mainCircle")
        .addEventListener("dragover", (event) => {
          document.querySelector("#mainCircle").style.border =
            "5px dotted black";
          document.querySelector("#mainCircle").style.background = "grey";

          event.preventDefault();
        });

      document
        .querySelector(".svg-dropzone")
        .addEventListener("dragover", (event) => {
          document.querySelector("#mainCircle").style.border =
            "5px dotted black";
          document.querySelector("#mainCircle").style.background = "grey";

          event.preventDefault();
        });

      //DragLeave handler
      document.querySelector("body").addEventListener("dragleave", () => {
        document.querySelector("#mainCircle").style.border = "2px solid black";
        document.querySelector("#mainCircle").style.background = "white";
      });

      //Drop handler
      document
        .querySelector("#mainCircle")
        .addEventListener("drop", (event) => {
          event.preventDefault();

          const data = event.dataTransfer.getData("text/plain");
          if (id !== null) {
            if (id.toString() === "0" || data.toString() === "0") {
              handleOnClose();
              history.push("/projects");
            }
          }

          if (id !== null) {
            if (id.toString() === "1" || data.toString() === "1") {
              handleOnClose();
              history.push("/skills");
            }
          }

          if (id !== null) {
            if (id.toString() === "2" || data.toString() === "2") {
              handleOnClose();
              history.push("/about");
            }
          }

          if (id !== null) {
            if (id.toString() === "3" || data.toString() === "3") {
              handleOnClose();
              history.push("/contact");
            }
          }
        });

      document
        .querySelector(".svg-dropzone")
        .addEventListener("drop", (event) => {
          event.preventDefault();

          const data = event.dataTransfer.getData("text/plain");
          if (id !== null) {
            if (id.toString() === "0" || data.toString() === "0") {
              handleOnClose();
              history.push("/projects");
            }
          }

          if (id !== null) {
            if (id.toString() === "1" || data.toString() === "1") {
              handleOnClose();
              history.push("/skills");
            }
          }

          if (id !== null) {
            if (id.toString() === "2" || data.toString() === "2") {
              handleOnClose();
              history.push("/about");
            }
          }

          if (id !== null) {
            if (id.toString() === "3" || data.toString() === "3") {
              handleOnClose();
              history.push("/contact");
            }
          }
        });
    }
  }, [history, handleOnClose, id]);

  addMyFunction(handleOpenMenu);

  const addClickHandler = useCallback(() => {
    const circle = document.querySelectorAll(".circle-selector");

    circle.forEach((item, index) => {
      item.addEventListener("click", () => {
        setMenuText("Drop Here");
        if (index === 0) {
          setStroke(Colors.Yellow);
        } else if (index === 1) {
          setStroke(Colors.Blue);
        } else if (index === 2) {
          setStroke(Colors.Green);
        } else if (index === 3) {
          setStroke(Colors.Orange);
        }
        setInterval(() => {
          setMenuText("Click Menu");
          setStroke(color);
        }, 1500);
      });
    });
  }, [color]);

  useEffect(() => {
    IS_MOUNTED = true;

    TweenMax.fromTo(RectRef.current, 1, { drawSVG: "0" }, { drawSVG: "1" });

    dragDrop();

    setStroke(color);

    addClickHandler();

    return () => {
      IS_MOUNTED = false;
    };
  }, [dragDrop, color, addClickHandler]);

  return (
    <div className={isMenuOpen ? styles.svgBackgroundContainer : ""}>
      <svg
        viewBox="0 0 276 313"
        fill="none"
        className={classnames(styles.menuSVG, "svg-dropzone")}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Tween
          from={{
            svgDraw: 0,
          }}
          to={{
            svgDraw: 1,
          }}
        >
          <path
            className={styles.changeStrokeColor}
            d="M13 300V50H263V300H13Z"
            style={{ strokeWidth: 25, stroke: stroke }}
          />
          <path
            d="M136.939 101.061C137.525 101.646 138.475 101.646 139.061 101.061L148.607 91.5147C149.192 90.9289 149.192 89.9792 148.607 89.3934C148.021 88.8076 147.071 88.8076 146.485 89.3934L138 97.8787L129.515 89.3934C128.929 88.8076 127.979 88.8076 127.393 89.3934C126.808 89.9792 126.808 90.9289 127.393 91.5147L136.939 101.061ZM136.5 0V100H139.5V0L136.5 0Z"
            fill="black"
          />
        </Tween>
      </svg>

      <div
        ref={CircleMain}
        id="mainCircle"
        className={classnames(styles.color, styles.circle, styles.mainCircle)}
        onClick={handleOpenMenu}
      ></div>

      <div
        draggable="true"
        ref={Circle1Ref}
        className={classnames(styles.circle, "circle-selector")}
      >
        <div
          className={styles.color}
          style={{ background: Colors.Yellow }}
        ></div>
        {isMenuOpen ? (
          <p className={styles.fieldTitle}>My Projects</p>
        ) : (
          <span></span>
        )}
      </div>

      <div
        draggable="true"
        ref={Circle2Ref}
        className={classnames(styles.circle, "circle-selector")}
      >
        <div className={styles.color} style={{ background: Colors.Blue }}></div>
        {isMenuOpen ? (
          <p className={styles.fieldTitle}>My Skills</p>
        ) : (
          <span></span>
        )}
      </div>

      <div
        draggable="true"
        ref={Circle3Ref}
        className={classnames(styles.circle, "circle-selector")}
      >
        <div
          className={styles.color}
          style={{ background: Colors.Green }}
        ></div>
        {isMenuOpen ? (
          <p className={styles.fieldTitle}>About Me</p>
        ) : (
          <span></span>
        )}
      </div>

      <div
        draggable="true"
        ref={Circle4Ref}
        className={classnames(styles.circle, "circle-selector")}
      >
        <div
          className={styles.color}
          style={{ background: Colors.Orange }}
        ></div>
        {isMenuOpen ? (
          <p className={styles.fieldTitle}>Contact Me</p>
        ) : (
          <span></span>
        )}
      </div>

      <p className={classnames(styles.menu, "menu-selector")}>{menuText}</p>

      {isMenuOpen ? (
        <Link to="/" className={classnames("is-size-6", styles.backToHome)}>
          Back to Home
        </Link>
      ) : (
        <span></span>
      )}

      {isMenuOpen ? (
        <div
          ref={CloseBtn}
          className={styles.handleClose}
          onClick={handleOnClose}
        >
          <h1 onClick={handleOnClose}>X</h1>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Menu;
