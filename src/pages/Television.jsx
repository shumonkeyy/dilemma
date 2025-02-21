import React, { useRef, useState } from "react";
import "../index.css";
import tvImage from "../assets/tv.jpg";
import { STORYLINE } from "../lines";

const Television = () => {
  //declaring variables
  const welcomePageRef = useRef(null);
  const storyLine = useRef(null);
  const storyBoard = useRef(null);
  const [lineNumber, setLineNumber] = useState(0);
  const ca = useRef(null);
  const cb = useRef(null);
  const choice = useRef(null);
  const nextBtn = useRef(null);

  //hide welcome page to start story
  const start = (storyline) => {
    const line = storyline.line;
    if (welcomePageRef.current) {
      welcomePageRef.current.classList.add("hide");
    }
    if (choice.current && !choice.current.classList.contains("hide")) {
      choice.current.classList.add("hide");
    }
    if (nextBtn.current && nextBtn.current.classList.contains("hide")) {
      nextBtn.current.classList.remove("hide");
    }
    if (storyBoard.current) {
      storyBoard.current.classList.remove("hide");
    }
    if (storyLine.current) {
      storyLine.current.innerHTML = line;
    }
    const newLineNumber = lineNumber + 1;
    setLineNumber(newLineNumber);
  };

  //next page
  const next = (storyline) => {
    const line = storyline.line;
    const storyChoice = storyline.choice;
    const goTo = storyline.goto;
    if (!storyChoice) {
      if (choice.current) {
        if (!choice.current.classList.contains("hide")) {
          choice.current.classList.add("hide");
        }
      }
      if (nextBtn.current && nextBtn.current.classList.contains("hide")) {
        nextBtn.current.classList.remove("hide");
      }
      setLineNumber(goTo);
    } else {
      const lineA = storyline.ca;
      const lineB = storyline.cb;
      if (nextBtn.current && !nextBtn.current.classList.contains("hide")) {
        nextBtn.current.classList.add("hide");
      }
      if (choice.current) {
        if (choice.current.classList.contains("hide")) {
          choice.current.classList.remove("hide");
        }
        if (ca.current) {
          ca.current.innerHTML = lineA;
        }
        if (cb.current) {
          cb.current.innerHTML = lineB;
        }
      }
    }

    if (storyLine.current) {
      storyLine.current.innerHTML = line;
    }
  };

  //quit
  const quit = () => {
    if (welcomePageRef.current) {
      welcomePageRef.current.classList.remove("hide");
    }
    if (storyBoard.current) {
      storyBoard.current.classList.add("hide");
    }
    setLineNumber(0);
  };

  //choice a is picked
  const choicea = (storyline) => {
    const goToA = storyline.gotoa;
    setLineNumber(goToA);
    setTimeout(() => {
      next(STORYLINE[goToA]);
    }, 0);
  };

  //choice b is picked
  const choiceb = (storyline) => {
    const goToB = storyline.gotob;
    setLineNumber(goToB);
    setTimeout(() => {
      next(STORYLINE[goToB]);
    }, 0);
  };

  return (
    <div>
      {/* welcome page */}
      <img src={tvImage} alt="" className="overlay-television" />

      <div ref={welcomePageRef} className="overlay-television">
        <div className="overlap">
          <h1>Welcome back, Major!</h1>
          <p>There is a case waiting for you.</p>
          <button onClick={() => start(STORYLINE[lineNumber])}>Start</button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Instructions
          </button>
        </div>
      </div>

      {/* storyBoard  */}
      <div ref={storyBoard} className="overlay-television hide">
        <div className="overlap">
          <p ref={storyLine}></p>
          <div ref={choice} className="hide">
            <p ref={ca}></p>
            <p ref={cb}></p>
            <button onClick={() => choicea(STORYLINE[lineNumber])}>A</button>
            <button onClick={() => choiceb(STORYLINE[lineNumber])}>B</button>
          </div>
          <div ref={nextBtn}>
            <button
              className="button"
              onClick={() => next(STORYLINE[lineNumber])}
            >
              Next
            </button>
          </div>
          <button className="button" onClick={() => quit()}>
            Quit
          </button>
        </div>
      </div>

      {/* modal */}
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
                Instructions
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Welcome to Dillemma, Major!
                <br />
                <br />
                Your task as the Major (one of the higher ups in the police
                department) is to find out who committed the crime while
                withstanding the pressure from the public. When given the
                choice, you will have to make a decision. Read the choices, and
                carefully click on the button after making your judgement.
                <br />
                <br />
                The result of this case relies on you, Major.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Television;
