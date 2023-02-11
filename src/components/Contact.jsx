import React from "react";
import Button from "./Button";
import { StyledContact } from "./StyledComponent/StyledContact";

function Contact() {
  return (
    <StyledContact id="contact">
      <h5>04. What’s Next?</h5>
      <h2>Get In Touch</h2>
      <p>
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <Button padding="20px">Say Hello</Button>
    </StyledContact>
  );
}

export default Contact;
