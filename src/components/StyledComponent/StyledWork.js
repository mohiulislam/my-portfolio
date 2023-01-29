import styled from "styled-components";

export const StyledWork = styled.div`
  h1 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;
    color: var(--lightest-slate);
    line-height: 1.1;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    ::before {
      content: "01.";
      position: relative;
      margin-right: 10px;
      color: var(--green);
      font-family: monospace;
      font-size: clamp(12px, 3vw, 16px);
    }
    ::after {
      content: "";
      display: block;
      height: 1px;
      width: auto;
      flex-grow: 1;
      margin-left: 20px;
      background-color: var(--lightest-navy);
      right: 0;
    }
  }
`;