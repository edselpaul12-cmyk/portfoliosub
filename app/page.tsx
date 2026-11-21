"use client";

import { useState, FormEvent,  } from "react";

export default function Home() {
  // this part is for the email that gets the messages from the contact form
  const myEmail = "edselpaul12@gmail.com";

  // this part is for the menu button on phones
  const [menuOpen, setMenuOpen] = useState(false);

  // this part is for what the visitor types in the contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // this part is for the current year in the footer
  const year = 2026;

  // this part is for the dark and light mode button
  function changeTheme() {
    document.body.classList.toggle("light");
  }

  // this part is for sending the contact form
  function sendMessage(event: FormEvent) {
    event.preventDefault();

    const subject = "Portfolio message from " + name;
    const body = message + "\n\nFrom: " + name + " (" + email + ")";

    window.location.href =
      "mailto:" + myEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  return (
    <>
      {/* this part is for the top bar (my name and the menu) */}
      <header className="navbar">
        <a className="logo" href="#home">Edsel Ortiz</a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* this part is for the dark and light mode button */}
        <button className="theme-btn" onClick={changeTheme}>Dark / Light</button>
        {/* this part is for the menu button that only shows on phones */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      </header>

      {/* this part is for the home section (my name, bio and photo) */}
      <section id="home" className="hero">
        <div className="card">
          <div>
            <h1>Edsel Paul Ortiz</h1>
            <p className="bio">
              Hi there! I&apos;m Edsel, 20 years old, a 2nd-year BSIT student at Holy Cross of Davao College in Davao City, Philippines. I run an online buy and sell service for gamers, including RMT, and I&apos;m learning JavaScript. I also do basic editing. Let&apos;s connect!
            </p>
            <div className="card-links">
              <a href="#contact">Email</a>
              <a href="#contact">Phone</a>
            </div>
          </div>
          <img className="photo" src="/profile.jpg" alt="" />
        </div>
      </section>

      {/* this part is for the about section */}
      <section id="about">
        <div className="wrap">
          <h2>About</h2>
          <p>
            I&apos;m a 2nd-year BSIT student at Holy Cross of Davao College, living in Davao City. I run an online buy and sell service for gaming, and I&apos;m learning JavaScript.
          </p>
          <div className="facts">
            <div className="fact"><span>Age</span>20</div>
            <div className="fact"><span>Course</span>BSIT</div>
            <div className="fact"><span>Location</span>Davao City, Philippines</div>
            <div className="fact"><span>Language</span>English</div>
            <div className="fact"><span>School</span>Holy Cross of Davao College</div>
          </div>
        </div>
      </section>

      {/* this part is for the resume section */}
      <section id="resume" className="alt">
        <div className="wrap">
          <h2>Resume</h2>

          {/* this part is for my education */}
          <h3>Education</h3>
          <div className="item">
            <p className="when">2nd year, ongoing</p>
            <div>
              <h4>Bachelor of Science in Information Technology (BSIT)</h4>
              <p className="sub">Holy Cross of Davao College</p>
            </div>
          </div>

          {/* this part is for my experience */}
          <h3>Experience</h3>
          <div className="item">
            <p className="when">Ongoing</p>
            <div>
              <h4>Online gaming buy and sell</h4>
              <p className="sub">Online seller, Middleman, RMT</p>
              <p>Online buy and sell service for gamers, including real money trading (RMT).</p>
            </div>
          </div>

          {/* this part is for my certificates */}
          <h3>Certifications</h3>
          <div className="item">
            <p className="when">23 May 2026</p>
            <div>
              <h4>JavaScript Essentials 1</h4>
              <p className="sub">Cisco Networking Academy with JS Institute</p>
            </div>
          </div>

          {/* this part is for my skills */}
          <h3>Skills</h3>
          <ul className="skills">
            <li>JavaScript</li>
            <li>HTML &amp; CSS</li>
            <li>Basic editing</li>
            <li>Reselling (buy low, sell high)</li>
            <li>Customer service</li>
            <li>Middleman (buyer and seller deals)</li>
            <li>RMT</li>
          </ul>

          {/* this part is for my projects */}
          <h3>Projects</h3>
        </div>
      </section>

      {/* this part is for the work section */}
      <section id="work">
        <div className="wrap">
          <h2>Work</h2>
          <div className="item">
            <p className="when">Ongoing</p>
            <div>
              <h4>Online gaming buy and sell</h4>
              <p className="sub">Online seller, Middleman, RMT</p>
              <p>
                I run an online buy and sell service for gamers. I buy gaming items at a low price and resell them for more, handle real money trading (RMT), and act as a middleman between buyers and sellers, helping both sides complete safe and smooth deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* this part is for the contact section */}
      <section id="contact" className="alt">
        <div className="wrap">
          <h2>Contact</h2>
          <p>Want to work together or just say hi? Reach me here.</p>
          <ul className="links">
            <li>Email: <a href="mailto:edselpaul12@gmail.com">edselpaul12@gmail.com</a></li>
            <li>Phone: 09690184435</li>
            <li>Facebook: <a href="https://www.facebook.com/profile.php?id=61581628923752" target="_blank">Edsel Paul Ortiz</a></li>
          </ul>
          {/* this part is for the contact form (it opens the email app when you click send) */}
          <form onSubmit={sendMessage}>
            <label>Your name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>Your email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </label>
            <button className="btn" type="submit">Send message</button>
          </form>
        </div>
      </section>

      {/* this part is for the footer */}
      <footer>&copy; {year} Edsel Paul Ortiz</footer>
    </>
  );
}