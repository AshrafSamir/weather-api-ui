import React from "react";
import "./footer.css";
import me from "../../assets/meForWeb.png";

function footer() {
  return (
    <div className="footer section-padding">
      <div className="footer__container-line"></div>
      <p>Created by </p>
      <h1>Ashraf Samir Ali</h1>
      <div className="footer__contact-row">
        <img src={me} alt="me" />
        <p>
          Contact me: <span id="mail">ashrafsamer423@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
export default footer;
