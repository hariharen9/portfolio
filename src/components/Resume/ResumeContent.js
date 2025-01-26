import React from "react";

function Resumecontent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <div className="exp-content">
        <ul>
          {props.content.map((value, index) => (
            <li key={index}>
              {value instanceof Object && value.title ? (
                <Resumecontent {...value} />
              ) : (
                <span>‣ {value}</span>
              )}
            </li>
          ))}
        </ul>
        {/* Add link section here */}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link">
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

export default Resumecontent;
