import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>
        {props.phonetic.text}{" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
      </p>
    </div>
  );
}
