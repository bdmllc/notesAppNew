import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li>
          <Link to="/">Public Notes</Link>
        </li>
        <li>
          <Link to="/notes">Private Notes</Link>
        </li>
      </ul>
    </div>
  )
}
