import * as React from "react"
import {Link } from "react-router-dom";

export default function NavLinks() {
    return(
        <div className="nav-links">
        <ul className="links">
        <li>
        <Link to="/activity">  Activity</Link>
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
          <Link to="/register">Sign Up </Link>
        </li>
      </ul>
    </div>



    )
}