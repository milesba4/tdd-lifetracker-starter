import * as React from "react";
import {Link } from "react-router-dom";
import NavLinks from "components/NavLinks/NavLinks";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="Navbar">
        <div class="content">
          <div class="logo">
            <Link to="/">
              <img
                src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
                alt="logo"
              ></img>
            </Link>
          </div>
          <NavLinks/>
        </div>
      </nav>
    </div>
  );
}
