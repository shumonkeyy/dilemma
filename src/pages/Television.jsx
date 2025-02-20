import React, { useRef } from "react";
import "../index.css";
import tvImage from "../assets/tv.jpg";
import { STORYLINE } from "../lines";

const Television = () => {
  //declaring variables
  const welcomePageRef = useRef(null);
  const storyLine = useRef(null);
  const storyBoard = useRef(null);
  //hide welcome page to start story
  const start = () => {
    if (welcomePageRef.current) {
      welcomePageRef.current.classList.add("hide");
    }
    if (storyBoard.current) {
      storyBoard.current.classList.remove("hide");
    }
    if (storyLine.current) {
      storyLine.current.innerHTML = STORYLINE[0];
    }
  };

  return (
    <div>
      {/* welcome page */}
      <img src={tvImage} alt="" className="overlay-television" />

      <div ref={welcomePageRef} className="overlay-television">
        <div className="overlap">
          <h1>Welcome back, Major!</h1>
          <p>There is a case waiting for you.</p>
          <button onClick={start}>Start</button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Instructions
          </button>
        </div>
      </div>

      <div ref={storyBoard} className="overlay-television hide">
        <div className="overlap">
          <p ref={storyLine}></p>
          <button onClick={() => console.log("next")}>Next</button>
          <button onClick={() => console.log("quit")}>Quit</button>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>hi</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Television;
