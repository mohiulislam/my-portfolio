import { StyledWorkDescription } from "./StyledComponent/StyledWorkDesciption";
import jobs from "../data/jobs";
function WorkDescription({company}) {
  return (
    <StyledWorkDescription key={Math.random()}>
      <h3>
        {jobs[company].title}
        <span> @ {jobs[company].company_name}</span>
      </h3>
      <h5>{jobs[company].range}</h5>
      {Object.values(jobs[company].p).map((val) => (
        <p key={Math.random()}>{val}</p>
      ))}
    </StyledWorkDescription>
  );
}
export default WorkDescription;