import React, { useRef } from "react";
import "../index.css";
import tvImage from "../assets/tv.jpg"; // Import image properly

const Television = () => {
  const welcomePageRef = useRef(null);

  const start = () => {
    if (welcomePageRef.current) {
      welcomePageRef.current.classList.add("hide"); // Fixed classList issue
    }
  };

  return (
    <div>
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
