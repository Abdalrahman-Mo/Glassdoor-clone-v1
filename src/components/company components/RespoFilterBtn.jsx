// import { useState } from "react";
const RespoFilterBtn = ({ clicked }) => {
  return (
    <>
      <div className="compFilter-btn" onClick={() => clicked()}>
        <i className="uil uil-filter"></i>
        Filter
      </div>
    </>
  );
};

export default RespoFilterBtn;
