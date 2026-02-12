import React from "react";
import { Link } from "react-router-dom";

export default function HeaderBar(props) {
  return (
    <nav className="navbar">
      <h2>{props.appName}</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/feedback">Reviews</Link>

        <button onClick={props.switchTheme}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
