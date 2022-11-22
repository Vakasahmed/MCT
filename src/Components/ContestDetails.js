import React from "react";
import log1 from "../logo/log1.jpg";
import log2 from "../logo/logo2.jpg";

function ContestDetails({ data, idx }) {
  let seconds = data.duration;
  let days = Math.floor(seconds / (3600 * 24));
  let hours = Math.floor((seconds % (3600 * 24)) / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  return (
    <div className="display">
      <div className="left">
        <div className="name">
          <h1 className="h1"> ContestName:</h1>
          <h1> {data.name}</h1>
        </div>
        <p> Start_Time: {new Date(data.start_time).toLocaleString()}</p>
        <p> End_Time: {new Date(data.end_time).toLocaleString()}</p>
        <p> Duration: {`${days} days ${hours} hr ${mins} min & ${secs} sec`}</p>
      </div>
      <div>
        {idx % 2 === 0 ? (
          <img className="logo" src={log1} alt="logo" />
        ) : (
          <img className="logo" src={log2} alt="log1" />
        )}
      </div>
    </div>
  );
}

export default ContestDetails;
