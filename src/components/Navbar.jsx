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
