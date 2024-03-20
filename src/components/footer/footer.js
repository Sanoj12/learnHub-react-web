import React from "react";
import "./footer.css";
import footer from '../../assets/img/footer.png'
function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-wrapper">


{/*  first div    */}
          <div className="footer-box">
            <div className="logo-img">
               <img src={footer} alt=""/>

            </div>
            <h2>LearnHub</h2>

            <p>Education is the key to unlocking the world, a passport to freedom.</p>

        </div>



  {/* second div */}
          <div className="footer-box">
            <h4 className="footer_title"> Company</h4>
            <ul className="footer_links">
                <li>
                <a href="/courses">Our Program</a>
                </li>

                <li>
                <a href="/services">Our Plan</a>
                </li>

                <li>
                  <a href="/">Become a Member</a>
                </li>

            </ul>

          </div>

     {/* third div */}
          <div className="footer-box">

          <h4 className="footer_title"> Links</h4>
            <ul className="footer_links">
                <li>
                <a href="/about-us">About</a>
                </li>

                <li>
                <a href="/">Contant-Us</a>
                </li>

                <li>
                <a href="/">Support</a>
                </li>

            </ul>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
