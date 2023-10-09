import { ContactSection, FormContainer, LeftSide, RightSide } from "./Contact.style";
import { Background } from "../../components/index";
import { Form } from "../../components/index";

import React from "react";



export default function Contact() {
  return (
    <ContactSection>
      <Background />
        <FormContainer>
          <LeftSide>
            <div>
              <h2>Form Title</h2>
              <p>Form description goes here</p>
            </div>
            <div>
              <h2>Form Title</h2>
              <p>Form description goes here</p>
            </div>
            <div>
              <h2>Form Title</h2>
              <p>Form description goes here</p>
            </div>
          </LeftSide>
          <RightSide>
            <div>
              <h2>Form Title</h2>
              <p>Form description goes here</p>
            </div>
            <Form />
          </RightSide>
        </FormContainer>
    </ContactSection>
  );
}
