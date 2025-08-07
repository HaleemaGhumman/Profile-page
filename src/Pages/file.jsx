import React from "react";
import "./file.css";
import "./Services.css";

export default function Home() {
  return (
    <>
      {/* HOME WRAPPER */}
      <div className="home">
        {/* Profile Section */}
        <div className="home-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />
          <h4>Mehreen Noor</h4>
          <p className="text-justify">
            Expert Front-End Developer skilled in React, Next.js, and modern UI design with a focus on clean code and responsive layouts.
          </p>
        </div>

        {/* Info Section */}
        <div className="home-info">
          <div className="info-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
            />
            <div>
              <h4>Build Powerful UI with React.js</h4>
              <p><strong>May 29, 2013</strong></p>
              <p>
                React is a JavaScript library for building fast and interactive user interfaces...
              </p>
            </div>
          </div>

          <div className="info-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind CSS"
            />
            <div>
              <h4>Style Rapidly with Tailwind CSS</h4>
              <p><strong>Nov 1, 2017</strong></p>
              <p>
                Tailwind CSS is a utility-first CSS framework for building modern and responsive designs...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION BELOW HOME */}
      <div className="services-wrapper">
        {/* Left Side Box */}
        <div className="services-left">
          <div className="left-box">
            <img
             
            />
            <h3>My Services</h3>
            <p>
  I specialize in crafting clean, modern, and fully responsive websites. From intuitive UI/UX design to robust front-end development using React, HTML, CSS, and JavaScript — I deliver seamless digital experiences tailored to your needs.
</p>

             <h4>Expertise You Can Trust</h4>
            <p>
  I design and develop modern, user-friendly websites that work flawlessly across all devices. Using the latest tools like React, HTML, CSS, and JavaScript, I turn ideas into fast, interactive, and visually appealing web experiences.
</p>

          </div>
        </div>

        {/* Right Side Grid */}
        <div className="services-right">
          <div className="service-grid">
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png" alt="Design" />
              <p>Web Design</p>
            </div>
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Development" />
              <p>Front-End Dev</p>
            </div>
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" alt="Responsive" />
              <p>Responsive Sites</p>
            </div>
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/1006/1006360.png" alt="Optimization" />
              <p>Performance</p>
            </div>
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/2085/2085209.png" alt="SEO" />
              <p>SEO Basics</p>
            </div>
            <div className="service-item">
              <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Support" />
              <p>Support</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
