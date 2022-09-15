import React, { useState } from "react";
import "./selectRover.css";

import CamarasContainer from "../camarasContainer/camarasContainer";

const SelectRover = () => {
  const [rover, setRover] = useState("");

  function changeSelected(button) {
    if (button.value === "curiosity") {
      let button1 = document.getElementById("spirit");
      button1.classList.remove("selected");
      let button2 = document.getElementById("opportunity");
      button2.classList.remove("selected");
      button.classList.add("selected");
    } else if (button.value === "spirit") {
      let button1 = document.getElementById("curiosity");
      button1.classList.remove("selected");
      let button2 = document.getElementById("opportunity");
      button2.classList.remove("selected");
      button.classList.add("selected");
    } else if (button.value === "opportunity") {
      let button1 = document.getElementById("curiosity");
      button1.classList.remove("selected");
      let button2 = document.getElementById("spirit");
      button2.classList.remove("selected");
      button.classList.add("selected");
    }
  }

  function setCameras(e) {
    setRover(e.target.value);
    changeSelected(e.target);
  }

  return (
    <section className="select_rover">
      <h2> Please Select a Rover</h2>
      <hr />
      <div className="container_rovers">
        <button
          id="curiosity"
          onClick={(e) => setCameras(e)}
          className="button_rover"
          value="curiosity"
        >
          Curiosity
        </button>
        <button
          id="spirit"
          onClick={(e) => setCameras(e)}
          className="button_rover"
          value="spirit"
        >
          Spirit
        </button>
        <button
          id="opportunity"
          onClick={(e) => setCameras(e)}
          className="button_rover"
          value="opportunity"
        >
          Opportunity
        </button>
      </div>
      <CamarasContainer props={rover} />
    </section>
  );
};

export default SelectRover;
