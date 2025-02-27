import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import tvImage from "../assets/tv.png";
import { STORYLINE } from "../lines";
import sound from ".././assets/walkie-talkie-beep.mp3";

const Television = () => {
  //declaring variables
  const welcomePage = useRef(null);
  const storyLine = useRef(null);
  const storyBoard = useRef(null);
  const [lineNumber, setLineNumber] = useState(0);
  const ca = useRef(null);
  const cb = useRef(null);
  const choice = useRef(null);
  const choiceButtons = useRef(null);
  const nextBtn = useRef(null);
  const [notes, setNotes] = useState("");
  const notepad = useRef(null);
  const userName = useRef(null);
  const [user, setUser] = useState("");
  const usernameInput = useRef(null);
  const usernameHead = useRef(null);
  const [answer, setAnswer] = useState([]);
  const endScreen = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [textTime, setTextTime] = useState(false);
  const [isTimed, setIsTimed] = useState(false);
  const clock1 = useRef(null);
  const clock2 = useRef(null);
  const [win, setWin] = useState(false);
  const audio = new Audio(sound);

  useEffect(() => {
    let interval;

    if (isTimed) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        if (seconds == 60) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
        if (minutes == 60) {
          setMinutes(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimed]);

  //continue to welcome page
  const continueToWelcome = () => {
    if (userName.current) {
      userName.current.classList.add("hide");
    }
    if (welcomePage.current) {
      welcomePage.current.classList.remove("hide");
    }
    if (usernameInput.current) {
      const inputValue = usernameInput.current.value;
      setUser(inputValue);
    }
  };

  //hide welcome page to start story
  const start = (storyline) => {
    const line = storyline.line;
    setIsTimed(true);
    if (welcomePage.current) {
      welcomePage.current.classList.add("hide");
    }

    if (choice.current && !choice.current.classList.contains("hide")) {
      choice.current.classList.add("hide");
    }
    if (
      choiceButtons.current &&
      !choiceButtons.current.classList.contains("hide")
    ) {
      choiceButtons.current.classList.add("hide");
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
    audio.play();
  };

  //next page
  const next = (storyline) => {
    if (lineNumber == -1) {
      if (storyBoard.current) {
        storyBoard.current.classList.add("hide");
      }
      if (endScreen.current) {
        setIsTimed(false);
        setTextTime(false);
        endScreen.current.classList.remove("hide");
      }
      return;
    }
    const line = storyline.line;
    const storyChoice = storyline.choice;
    const goTo = storyline.goto;
    if (!storyChoice) {
      if (choice.current) {
        if (!choice.current.classList.contains("hide")) {
          choice.current.classList.add("hide");
        }
        if (!choiceButtons.current.classList.contains("hide")) {
          choiceButtons.current.classList.add("hide");
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
      if (choiceButtons.current) {
        if (choiceButtons.current.classList.contains("hide")) {
          choiceButtons.current.classList.remove("hide");
        }
      }
    }

    if (storyLine.current) {
      storyLine.current.innerHTML = line;
    }
    audio.play();
  };

  //quit
  const quit = () => {
    setIsTimed(false);
    setSeconds(0);
    if (welcomePage.current) {
      welcomePage.current.classList.remove("hide");
    }
    if (storyBoard.current && !storyBoard.current.classList.contains("hide")) {
      storyBoard.current.classList.add("hide");
    }
    if (endScreen.current && !endScreen.current.classList.contains("hide")) {
      endScreen.current.classList.add("hide");
    }
    setLineNumber(0);
    setAnswer([]);
    setWin(false);
  };

  //choice a is picked
  const choicea = (storyline) => {
    audio.play();
    const goToA = storyline.gotoa;
    const ca = storyline.ca;
    setAnswer((prevAnswers) => [...prevAnswers, ca]);
    const newA = goToA;
    if (newA == 100 || newA == -1) {
      if (newA == 100) {
        setWin(true);
      }
      if (storyBoard.current) {
        storyBoard.current.classList.add("hide");
      }
      if (endScreen.current) {
        setIsTimed(false);
        setTextTime(false);
        endScreen.current.classList.remove("hide");
      }
      return;
    }
    setLineNumber(goToA);
    setTimeout(() => {
      next(STORYLINE[goToA]);
    }, 0);
  };

  //choice b is picked
  const choiceb = (storyline) => {
    audio.play();
    const goToB = storyline.gotob;
    const cb = storyline.cb;
    setAnswer((prevAnswers) => [...prevAnswers, cb]);
    const newB = goToB;
    if (newB == 100 || newB == -1) {
      if (newB == 100) {
        setWin(true);
      }
      if (storyBoard.current) {
        storyBoard.current.classList.add("hide");
      }
      if (endScreen.current) {
        setIsTimed(false);
        setTextTime(false);
        endScreen.current.classList.remove("hide");
      }
      return;
    }
    setLineNumber(goToB);
    setTimeout(() => {
      next(STORYLINE[goToB]);
    }, 0);
  };

  //save notepad changes
  const saveNotepad = () => {
    setNotes(notepad.value);
    notepad.value = notes;
  };

  // switch clock mode
  const switchClock = () => {
    setTextTime(true);
    if (textTime) {
      if (clock1.current) {
        clock1.current.classList.toggle("hide");
      }
      if (clock2.current) {
        clock2.current.classList.toggle("hide");
      }
    }
  };

  return (
    <div>
      <img src={tvImage} alt="" className="overlay-television" />

      {/* enter your name screen */}
      <div ref={userName} className="overlay-television">
        <div className="overlap">
          <p>
            Hello Major. <br />
            <br />
            Please enter your name here.
          </p>
          <form action="">
            <input type="text" placeholder="Name" ref={usernameInput} />
            <button type="button" onClick={() => continueToWelcome()}>
              continue
            </button>
          </form>
        </div>
      </div>

      {/* welcome page */}
      <div ref={welcomePage} className="overlay-television hide">
        <div className="overlap">
          <h1 ref={usernameHead}>Welcome, Major {user}!</h1>
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
          </div>
        </div>
        {/* button div */}
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
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#notesModal"
          >
            Notes
          </button>
        </div>
        {/* choice buttons */}
        <div ref={choiceButtons} className="choice-btn-container hide">
          <button
            className="button"
            onClick={() => choicea(STORYLINE[lineNumber])}
          >
            A
          </button>
          <button
            className="button"
            onClick={() => choiceb(STORYLINE[lineNumber])}
          >
            B
          </button>
        </div>
      </div>

      {/* end screen */}
      <div ref={endScreen} className="overlay-television hide">
        <div className="end-screen">
          <h1>{win ? "you made it!" : "you failed..."}</h1>
          <p>scroll to the end to restart.</p>
          <p ref={clock1}>
            time: {hours < 10 ? "0" + hours : hours}:
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds} &nbsp;&nbsp;
            <span>
              <button onClick={() => switchClock()}>switch timer mode</button>
            </span>
          </p>
          <p ref={clock2} className="hide">
            time: {hours} H {minutes} M {seconds} S &nbsp;&nbsp;
            <span>
              <button onClick={() => switchClock()}>switch timer mode</button>
            </span>
          </p>
          <p>your choices:</p>
          <ul>
            {answer.map((picked) => {
              return <li key={answer.indexOf(picked)}>{picked}</li>;
            })}
          </ul>
          <p>score: {win ? answer.length : answer.length - 1}</p>
          <p className={win && "hide"}>
            mistake at: {answer[answer.length - 1]}
          </p>
          <button onClick={() => quit()}>Restart</button>
        </div>
      </div>

      {/* instruction/help modal */}
      <div
        className="modal fade"
        id="instructionModal"
        tabIndex="-1"
        aria-labelledby="instructionLabel"
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
                reading, click 'Next'. To stop the game, click 'Quit'. In order
                to help you make decisions, a notepad has been added. Click
                "notes" in order to access it, and after you finish typing your
                notes, make sure to press the "Save changes" button, or else
                your notes will be lost.
                <br />
                <br />
                This game is inspired by the real life case of Eileen Sarmenta
                in the Philippines. We have done our best to try and replicate
                the story in a respectful but thought provoking way so you, the
                major, can have an engaging experience of controlling the fate
                of a crime case. (P.S. Try not to check the Case Information
                Modal until you finish in order to not spoil the events.)
                <br />
                <br />
                The result of this case relies on you, Major.
              </p>
              <p>FAQs</p>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">yaya</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">yayaya</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">yayayaya</div>
                  </div>
                </div>
              </div>
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

      {/* Notes modal */}
      <div>
        <div
          className="modal fade"
          id="notesModal"
          tabIndex="-1"
          aria-labelledby="notesLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Major's notepad
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
                  Write notes here...there will be a lot to remember. Click save
                  changes in order to save your notes.
                </p>
                <form action="">
                  <textarea
                    ref={notepad}
                    name="notepad"
                    cols="55"
                    rows="10"
                    placeholder="Type your notes here..."
                  ></textarea>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => saveNotepad()}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Television;
