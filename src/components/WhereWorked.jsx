import { useRef } from "react";
import { useState } from "react";
import { StyledWhereWorked } from "./StyledComponent/StyledWhereWorked";
import WorkDescription from "./WorkDescription";

function WhereWorked() {
  const ref = useRef();
  const [BtnIndex, setBtnIndex] = useState(0);

  function responderChangeStatus(tbtn) {
    ref.current.childNodes.forEach((btn) => {
      btn.classList.remove("active");
    });
    tbtn.classList.add("active");
  }
  const [Company, setCompany] = useState("Upstatement");

  return (
    <StyledWhereWorked BtnIndex={BtnIndex}>
      <h1>
        <span>0.2</span> Where I’ve Worked
      </h1>
      <div>
        <div ref={ref}>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText);
              setBtnIndex(0);
              responderChangeStatus(e.target);
            }}
          >
            Upstatement
          </button>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText + "P");
              setBtnIndex(1);
              responderChangeStatus(e.target);
            }}
          >
            Scout
          </button>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText);
              setBtnIndex(2);
              responderChangeStatus(e.target);
            }}
          >
            Apple
          </button>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText);
              setBtnIndex(3);
              responderChangeStatus(e.target);
            }}
          >
            Scout
          </button>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText);
              setBtnIndex(4);
              responderChangeStatus(e.target);
            }}
          >
            Starry
          </button>
          <button
            onClick={(e) => {
              setCompany(e.target.innerText);
              setBtnIndex(5);
              responderChangeStatus(e.target);
            }}
          >
            MullenLowe
          </button>
          <span></span>
        </div>
        <WorkDescription company={Company} />
      </div>
    </StyledWhereWorked>
  );
}

export default WhereWorked;
