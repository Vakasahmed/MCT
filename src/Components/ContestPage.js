import React from "react";

function ContestPage({ singlePage }) {
  console.log(singlePage);

  return (
    <div className="singlepage">
      <div className="nav"> 
        <h1>WELCOME TO CONTEST PAGE</h1>
      </div>
    <div className="table_parent">
    <table>
        <thead>
          <tr>
            <th>Contest Name</th>
            <th>Site Name</th>
            <th>Contest Start_Time</th>
            <th>Contest End_Time</th>
            <th>Contest Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singlePage.name}</td>
            <td>{singlePage.site}</td>
            <td>{new Date(singlePage.start_time).toLocaleString()}</td>
            <td>{new Date(singlePage.end_time).toLocaleString()}</td>
            <td>
              <a id="a" href={singlePage.url} target="_black">
                <button>Click to play contest</button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ContestPage;
