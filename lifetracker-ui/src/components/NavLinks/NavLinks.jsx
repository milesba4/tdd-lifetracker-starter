import * as React from "react"
import {Link } from "react-router-dom";

export default function NavLinks() {
    return(
        <div className="nav-links">
        <ul className="links">
        <li>
        <Link to="/activity"></Link>
        Activity
        </li>
        <li>
        <Link to="/exercise"> Exercise </Link>
        </li>
        <li>
        <Link to="/nutrition"> Nutrition</Link>
        </li>
        <li>
        <Link to="/sleep"> Sleep</Link>
        </li>
        <li>
        <Link to="/login"> Login </Link>
        </li>
        <li className="btn secondary">
          <a href="/register">Sign Up</a>
        </li>
      </ul>
    </div>



    )
}