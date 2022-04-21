import React from "react";
import "../css/Contact.css";
import { GoMail, GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="container mt-3">
      <div className="card p-3 mb-3 main-body">
        <div className="banner bg-warning">
          <h1>Hello, Welcome to our Contact Page!</h1>
          <div>
            <h3>Developers : </h3>
          </div>
        </div>
        <div className="d-flex  mt-3">
          {/* <img className="mr-3" src={me} alt="Developer" /> */}
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Harsh Singh</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:hmsingh_b20@it.vjti.ac.in"
            >
              <h5>{<GoMail />} : hmsingh_b20@it.vjti.ac.in</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="https://www.github.com/harsh7578"
            >
              <h5>{<GoMarkGithub />} : harsh7578</h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="www.linkedin.com/in/harsh-singh-31b28420a"
            >
              <h5>{<GrLinkedin />} : Harsh Singh</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex  mt-3">
          {/* <img className="mr-3" src={ayush} alt="Developer" /> */}
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Manthan Dhole</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:mgdhole_b20@it.vjti.ac.in"
            >
              <h5>{<GoMail />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GoMarkGithub />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GrLinkedin />} : Manthan Dhole</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex  mt-3">
          {/* <img className="mr-3" src={priyam} alt="Developer" /> */}
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Deepti Agrawal</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:"
            >
              <h5>{<GoMail />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GoMarkGithub />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GrLinkedin />} :Deepti Agrawal</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              
            </p>
          </div>
          
        </div>
        <div className="d-flex  mt-3">
          {/* <img className="mr-3" src={ayush} alt="Developer" /> */}
          <div className="justifyparent">
            <div className="d-flex container-fluid justify-content-center">
              <h3>Tanavi Bote</h3>
            </div>
            <br />
            <br />
            <h4>Contact Me :</h4>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="mailto:tabote_b20@it.vjti.ac.in"
            >
              <h5>{<GoMail />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GoMarkGithub />} : </h5>
            </a>
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href="/"
            >
              <h5>{<GrLinkedin />} : Tanavi Bote</h5>
            </a>
            <div className="margin">
              <h4>Technologies Used : </h4>
              <ul className="skill">
                <li>Html</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <h4>About Me :</h4>
            <p className="contentjustify">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
