import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="social">
        <nav className="social-nav">
          <ul>
            <li>
              <a href="http://codepen.io/edwardwilson/">Codepen</a>
            </li>
            <li>
              <a href="https://github.com/eddiewilson">Github</a>
            </li>
            <li>
              <a href="https://www.behance.net/edward__wilson">Behance</a>
            </li>
            <li>
              <a href="https://dribbble.com/edward_wilson">Dribbble</a>
            </li>
            <li>
              <a href="https://www.instagram.com/edward_wilson/">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/Edward___Wilson">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-info">
        <p>
          If you’d like to have a chat about a project, job opportunity or just
          some friendly advice. Please get in touch, let's have a coffee and
          talk.
        </p>
        <ul>
          <li className="email">+44 (0) 7974 419 892</li>
          <li className="email">hello@edwardwilson.co</li>
        </ul>
      </div>
    </div>
    {/* © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> */}
  </footer>
)

export default Footer
