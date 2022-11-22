import React, { useContext, useState } from "react";
import details from "../Context";
import ContestDetails from "./ContestDetails";
import ContestPage from "./ContestPage";

const Contest = () => {
  const data = useContext(details);
  const [singlePage, setSinglePage] = useState([]);

  const [click, setClick] = useState(true);

  const handleChange = (e) => {
    setClick(false);
    setSinglePage(e);
  };
  return click ? (
    <div className="contest">
      <div>
        <h2 className="h2">WELCOME TO CODING CONTEST PLATFORM</h2>
      </div>
      <div>
        {data.map((e, i) => {
          return (
            <div onClick={() => handleChange(e)} className="card" key={i}>
              <ContestDetails idx={i} data={e} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <ContestPage singlePage={singlePage} />
  );
};

export default Contest;
