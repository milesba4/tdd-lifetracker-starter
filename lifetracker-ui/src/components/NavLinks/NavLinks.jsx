import * as React from "react"
import {Link } from "react-router-dom";

export default function NavLinks() {
    return(
        <div className="nav-links">
        <ul className="links">
        <li>
        <Link to="/activity"/>
        Activity
        </li>
        <li>
        <Link to="/exercise"/> Exercise
        </li>
        <li>
        <Link to="/nutrition"/> Nutrition
        </li>
        <li>
        <Link to="/sleep"/> Sleep
        </li>
        <li>
        <Link to="/login"/> Login
        </li>
        <li className="btn secondary">
          <a href="/register">Sign Up</a>
        </li>
      </ul>
    </div>



    )
}