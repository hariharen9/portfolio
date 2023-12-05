// import React from "react";

// function ResumeContent(props) {
//   return (
//     <div className="resume-item">
//       <h5 className={props.title ? "resume-title" : "resume-no-title"}>
//         {props.title}
//       </h5>
//       <p>
//         <em>{props.date}</em>
//       </p>
//       <ul>
//         {props.content.map((value, index) => (
//           <li key={index}> ‣ {value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ResumeContent;

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
      </div>
    </div>
  );
}

export default Resumecontent;
