import React, { useState } from "react";

export default function TextEditor(props) {

  const [text, setText] = useState("");

  // Handle text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Clear text
  const clearText = () => {
    setText("");
  };

  return (
    <div className="container">

      {/* Title */}
      <h2>{props.heading}</h2>

      {/* Text Area */}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
      ></textarea>

      {/* Summary Section */}
      <div className="summary">

        <h3>Your text summary</h3>

        <p>
          {text.trim() === ""
            ? "0 words and 0 characters"
            : `${text.split(/\s+/).filter(Boolean).length} words and ${text.length} characters`}
        </p>

        <button onClick={clearText}>
          clear draft
        </button>

      </div>

    </div>
  );
}

