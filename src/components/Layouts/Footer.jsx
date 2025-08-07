
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-tables">
        <table>
          <thead>
            <tr><th>Sr#</th><th>Name</th><th>Address</th><th>Country</th><th>Contact</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Ali</td><td>Kashmir Road</td><td>GRW Pakistan</td><td>0300‑0506611</td></tr>
            <tr><td>2</td><td>Hassan</td><td>City Housing</td><td>GRW Pakistan</td><td>0301‑0506612</td></tr>
            <tr><td>3</td><td>Sarim</td><td>Bahria Town</td><td>LHR Pakistan</td><td>0302‑0506613</td></tr>
            <tr><td>4</td><td>Ibrahim</td><td>Johar Town</td><td>LHR Pakistan</td><td>0303‑0506623</td></tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr><th>Sr#</th><th>Name</th><th>Address</th><th>Country</th><th>Contact</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Ali</td><td>Kashmir Road</td><td>GRW Pakistan</td><td>0300‑0506611</td></tr>
            <tr><td>2</td><td>Hassan</td><td>City Housing</td><td>GRW Pakistan</td><td>0301‑0506612</td></tr>
            <tr><td>3</td><td>Sarim</td><td>Bahria Town</td><td>LHR Pakistan</td><td>0302‑0506613</td></tr>
            <tr><td>4</td><td>Ibrahim</td><td>Johar Town</td><td>LHR Pakistan</td><td>0303‑0506623</td></tr>
          </tbody>
        </table>
      </div>
      <div className="footer-bottom">
        <div className="about">
          <h4>About Us</h4>
        <p>Creative front-end developer crafting modern and responsive web experiences with clean, effective code.</p>

          <div className="social">
            <FaFacebookF /><FaTwitter /><FaInstagram />
          </div>
        </div>
        <div className="address" style={{ marginLeft: "20px" }}>
  <h4>Address</h4>
  <p>Gujranwala Pakistan</p>
  <p>+92‑3771230228</p>
<p style={{ paddingRight: "10px" }}>xyz@gmail.com</p>


</div>

        <div className="contact-form">
          <h4>Contact Us</h4>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </div>
      </div>
    </footer>
  );
}
