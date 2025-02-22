import React, { useRef, useState } from "react";
import "../index.css";
import tvImage from "../assets/tv.png";
import { STORYLINE } from "../lines";

const Television = () => {
  //declaring variables
  const welcomePage = useRef(null);
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

    if (welcomePage.current) {
      welcomePage.current.classList.add("hide");
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
    if (welcomePage.current) {
      welcomePage.current.classList.remove("hide");
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

      <div ref={welcomePage} className="overlay-television">
        <div className="overlap">
          <h1>Welcome back, Major!</h1>
          <p>There is a case waiting for you.</p>
          <button
            onClick={() => setTimeout(() => start(STORYLINE[lineNumber]), 100)}
          >
            Start
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#instructionModal"
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
            <p className="option" ref={ca}></p>
            <p className="option" ref={cb}></p>
            <div className="choice-btn-container">
              <button onClick={() => choicea(STORYLINE[lineNumber])}>A</button>
              <button onClick={() => choiceb(STORYLINE[lineNumber])}>B</button>
            </div>
          </div>
          <div className="btn-container">
            <button
              ref={nextBtn}
              className="button"
              onClick={() => next(STORYLINE[lineNumber])}
            >
              Next
            </button>
            <button className="button" onClick={() => quit()}>
              Quit
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#instructionModal"
            >
              Help
            </button>
            <button>Clues</button>
          </div>
        </div>
      </div>

      {/* instruction/help modal */}
      <div
        className="modal fade"
        id="instructionModal"
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
                carefully click on the either button A or button B after making
                your judgement. To go to the next scene after you finish
                reading, click 'Next'. To stop the game, click 'Quit'.
                <br />
                <br />
                This game is inspired by the real life case of Eileen Sarmenta
                in the Philippines. We have done our best to try and replicate
                the story in a respectful but thought provoking way so you, the
                major, can have an engaging experience of controlling the fate
                of a crime case.
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

      {/* clues modal */}
    </div>
  );
};

export default Television;
