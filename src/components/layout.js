import React from "react"
import Navbar from "./navbar"
import "../../styles/style.css"

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  )
}
