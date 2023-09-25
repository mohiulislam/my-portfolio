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
    <StyledWhereWorked id="experience" BtnIndex={BtnIndex}>
      <h5
        style={{
          color: "rgb(204,214,246)",
          fontSize: "15px",
          textAlign: "center",
          lineHeight: "25px",
        }}
      >
        Maximum below are just dummy text 😊.
        <br /> Please check my{" "}
        <a
          style={{ color: "yellow" }}
          href="https://docs.google.com/document/d/18ztBMDbymVVk2AqkBL1u33Ch1e8e49j8OsstFgd_biU"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>{" "}
        to see updated information.
      </h5>
      <h1>Where I’ve Worked</h1>
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
