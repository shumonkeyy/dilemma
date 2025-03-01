import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dilemma.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home.
                </a>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="modal"
                data-bs-target="#case-info"
              >
                <a className="nav-link" href="#">
                  Case Information.
                </a>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="modal"
                data-bs-target="#moreModal"
              >
                <a
                  className="nav-link"
                  href="https://github.com/shumonkeyy/dilemma"
                  target="_blank"
                >
                  GitHub.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* case Info modal  */}
      <div
        className="modal fade"
        id="case-info"
        tabIndex="-1"
        aria-labelledby="caseInfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Case Information: Eileen Sarmenta
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
                "Please, you have taken everything from me. My shame, my honor,
                my dignity. But please, spare me my breath. It's the only thing
                I've got left." - Eileen Sarmenta
                <br />
                <br />
                The murder of Eileen Sarmenta and Allan Gomez took place on June
                28, 1993. As Allan and Eileen were about to go home, they were
                dragged out of their car by masked men then put into the back of
                a white van. They were taken to Mayor Antonio Sanchez, where
                Eileen was taken to the bedroom to be raped by the mayor while
                Allan was beat up by other police members, namely Luis, Rogelio
                "Boy", Deputy George, Vicenco and Zoilo. Pepito, the mayor's
                gardener, had joined during Allan's torture.
                <br />
                <br />
                After Eileen's assault was over, both of them were taken into
                separate vans, which is where Allan tried to resist against his
                drivers. This led him to get shot twice: once on the head, once
                on the back. His body was left near the University. Afterwards,
                they took Aileen to a remote area where everyone except Aurelio
                partcipated. Then, as Eileen pleaded for her life, Luis gagged
                Eileen then shot her with his rifle touching the birthmark on
                her cheek.
                <br />
                <br />
                Eventually, with the public and the police's investigation, all
                of them except Aurelio were sentenced to 7 reclusion perpetuas,
                (280 years, 40 years for each case of rape done to Eileen).
                <br />
                <br />
                We had chosen this story to make a interactive story out of as
                this highlighted a few major issues in our society: abuse of
                power from influential people and the common assault and
                degrading of women. However, due to the nature of this
                interactive story being a detective story, we were not able to
                focus as much on the emotional aspect of the case. Therefore, we
                have linked a Youtube podcast below done by the true crime
                podcast "Rotten Mango". The episode's description of the case,
                its details, and the emotional aspect is truly phenomenal, and
                we strongly recommend that you check it out.
              </p>
              <a href="https://youtu.be/BEwBdeQ4UQk">
                Click here to learn more.
              </a>
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

export default Navbar;
