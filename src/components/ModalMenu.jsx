import React from "react";

import Menu from "./Menu";

const ModalMenu = ({ color }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          zIndex: 5,
        }}
      >
        <Menu color={color} />
      </div>
    </>
  );
};

export default ModalMenu;
