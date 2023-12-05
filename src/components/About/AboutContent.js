import React from "react";

function AboutContent(props) {
  let contentText = "";
  if (props.content && props.content.length > 0) {
    contentText = props.content.map((value, index) => {
      if (index === props.content.length - 1) {
        return value; // Don't add '‣' for the last item
      }
      return `${value} ‣ `;
    });
  }

  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <div className="source-item">
      {props.content && props.content.length > 0 && ( // Check if content exists and is not empty
        <p>{contentText}</p>
      )}
      </div>
    </div>
  );
}

export default AboutContent;
