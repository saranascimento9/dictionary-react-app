import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>

        {props.phonetic.text}
      </p>
    </div>
  );
}
