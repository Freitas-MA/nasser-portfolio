import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";

const JsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .field {
    position: relative;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #e2e8f0;
    background-color: #f7fafc;

    .label {
      position: absolute;
      top: -20px;
      display: flex;
      background-color: #f7fafc;
      border-radius: 0.25rem;
      padding: 0 0.25rem;
      font-size: 1rem;
      font-weight: 500;
      color: #4a5568;
      transition: all 0.2s ease-in-out;
      transform-origin: top left;
      transform: translateY(0.5rem);
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: none;
      background-color: transparent;
      resize: none;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #e2e8f0;
        + .label {
          transform: translateY(0);
          font-size: 0.5rem;
          color: #2d3748;
        }
      }
    }

    textarea {
      height: 6rem;
    }
  }

  /* .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1rem;

    & > #buttonSubmit {
      width: 60px;
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.1);
      }
    }
  } */

  .default {
    background-color: #ffffff9d;
    color: #4a5568;
    border: 1px solid #e2e8f0;

    &:hover {
      background-color: #e2e8f0;
    }
  }

  .success {
    background-color: #9ae6b4;
    color: #2d3748;
    border: 1px solid #9ae6b4;

    &:hover {
      background-color: #68d391;
    }
  }

  .error {
    background-color: #feb2b2;
    color: #9b2c2c;
    border: 1px solid #feb2b2;

    &:hover {
      background-color: #fc8181;
    }
  }

  & > #buttonSubmit {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    color: #1f1e1e;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 2px 2px #e2e8f0;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

const Form = () => {
  const form = useRef();
  const [buttonState, setButtonState] = useState("Enviar");
  const [buttonColor, setButtonColor] = useState("default");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState("Enviando...");
    setButtonColor("default");

    emailjs
      .sendForm(
        "service_wwi1rpl",
        "template_s98aedq",
        form.current,
        "7gWXP-x0bIE2F4Bkr"
      )
      .then((result) => {
        console.log(result.text);
        setButtonState("Mensagem enviada!");
        setButtonColor("success");
        form.current.reset();
        setTimeout(() => {
          setButtonState("Enviar");
          setButtonColor("default");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.text);
        setButtonState("Error: Tente novamente mais tarde!");
        setButtonColor("error");
        setTimeout(() => {
          setButtonState("Send");
          setButtonColor("default");
        }, 2000);
      });
  };

  return (
    <JsFormContainer ref={form} onSubmit={sendEmail}>
      <div className="field input-box">
        <label className='label' htmlFor="from_name">Nome</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          required
        />
      </div>
      <div className="field input-box">
        <label className='label' htmlFor="reply_to">Email</label>
        <input
          type="text"
          name="reply_to"
          id="reply_to"
        required
        />
      </div>
      <div className="field">
        <input
          type="hidden"
          name="to_name"
          id="to_name"
          value="Marcos Freitas"
          required
        />
      </div>
      <div className="field input-box message-box">
        <label className='label' htmlFor="message">Mensagem</label>
        <textarea
          className="input-box message-box"
          type="text"
          name="message"
          id="message"
          required
        ></textarea>
      </div>
      <div className="button" />
      <input
        id="buttonSubmit"
        type="submit"
        value={buttonState}
        className={`${buttonState.toLowerCase()} ${buttonColor}`}
      />
    </JsFormContainer>
  );
};

export default Form;
