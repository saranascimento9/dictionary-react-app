import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <section className="col-4">
              <div className="row d-flex align-items-baseline">
                <div className="col">
                  <h2>{props.results.word}</h2>
                </div>
                <div className="col">
                  {props.results.phonetics.map(function (phonetic, index) {
                    return (
                      <div key={index}>
                        <Phonetic phonetic={phonetic} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          <div className="row">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <section className="col" key={index}>
                  <Meaning meaning={meaning} />
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
