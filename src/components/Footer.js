import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-cmaiz.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "11em", height: "5em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-6 is-offset-1">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Acerca de Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Publicaciones
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact" >
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-6 social">
                <br />
                <a title="facebook" href="https://www.facebook.com/cmaiz.mx">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/cmaiz.mx/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
            <section style={{paddingBottom: "0.75em", lineBreak: "break"}}>
            © {new Date().getFullYear()}, Cmaiz
                <br />
              Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a><br />
                Icons & images made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br />
                Website by <a href="https://github.com/criptochairo" title="GithubProfile">Criptochairo</a>
              </section>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
