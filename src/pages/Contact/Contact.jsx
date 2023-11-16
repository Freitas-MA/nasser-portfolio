import React from "react";
import {
  ContactSection,
  FormContainer,
  LeftSide,
  RightSide,
} from "./Contact.style";
import { Background } from "../../components/index";
import { Form } from "../../components/index";

import { contatoProfile } from "../../Objects.API/Contato.Maps";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  const {
    title,
    message,
    message2,
    email,
    telefone,
    instagram,
    facebook,
    descriptionForm,
  } = contatoProfile;

  return (
    <ContactSection>
      <Background />
      <FormContainer>
        <LeftSide>
          <div>
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{email}</p>
          </div>
          <div>
            <h2>Telefone</h2>
            <p>{telefone}</p>
          </div>
          <div id="socialIcons">
            <SocialIcon
              url="https://www.instagram.com/space_nasser/"
              target="_blank"
              style={{
                height: 25,
                width: 25,
                margin: 5,
                filter: "grayscale(100%)",
              }}
            />
            <SocialIcon
              url="https://www.facebook.com/space.nasser"
              target="_blank"
              style={{
                height: 25,
                width: 25,
                margin: 5,
                filter: "grayscale(100%)",
              }}
            />
            <SocialIcon
              url="https://t.me/space_nasser"
              target="_blank"
              style={{
                height: 25,
                width: 25,
                margin: 5,
                filter: "grayscale(100%)",
              }}
            />
          </div>
        </LeftSide>
        {/*!! TODO Fix all the StyledComponents  */}
        <RightSide>
          <div className="form-message">
            <h2>{message2}</h2>
            <p>{descriptionForm}</p>
          </div>
          <Form className='form-field'/>
        </RightSide>
      </FormContainer>
    </ContactSection>
  );
}
