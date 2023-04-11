import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { headerFont, primaryColor, secondaryColor } from "../../variables";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  height: 248px;
  text-align: center;
  padding: 40px 0 60px;

  @media (max-width: 590px) {
    height: fit-content;
  }
`;

const Header = styled.h2`
  font-family: ${headerFont};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  width: 500px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 590px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: fit-content;
  }
`;

const NameEmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const ContactInput = styled.input`
  width: 210px;
  border: 1px solid ${primaryColor};
  padding: 12px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0;
  }
`;

const ContactMessage = styled.textarea`
  display: block;
  width: 475px;
  margin-top: 20px;
  padding: 12px;
  font-size: 0.9rem;
  border: 1px solid ${primaryColor};

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0;
  }

  @media (max-width: 590px) {
    width: 378px;
  }

  @media (max-width: 420px) {
    width: 210px;
    margin: 20px auto;
  }
`;

const ContactButton = styled.button`
  background-color: white;
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  padding: 12px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: ${secondaryColor};
    color: white;
  }

  &:active {
    background-color: ${primaryColor};
  }
`;

const SuccessMessage = styled.span`
  color: ${secondaryColor};
  font-size: 1.2rem;
  font-weight: 700;
`;

const LoadingIndicator = styled(CircularProgress)``;

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const formRef = useRef();

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
      }, 5000);
    }
  }, [sent]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1j0ki7a",
        "template_78hs4yi",
        formRef.current,
        "t0fNxTIt8BroiNQ_1"
      )
      .then(
        (result) => {
          setSuccessMessage("Thank you! Your message has been sent!");
          setLoading(false);
          setSent(true);
          setFormData({ user_name: "", user_email: "", user_message: "" });
        },
        (error) => {
          setSuccessMessage(error.text);
        }
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Header>Let's Achieve Success Together</Header>
      {sent ? (
        <SuccessMessage>{successMessage}</SuccessMessage>
      ) : (
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <NameEmailContainer>
            <ContactInput
              placeholder="Your name"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              disabled={loading}
            />
            <ContactInput
              placeholder="Your email"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              disabled={loading}
            />
          </NameEmailContainer>
          {loading && (
            <LoadingIndicator
              sx={{ color: "#5B38E3" }}
            />
          )}
          <ContactMessage
            placeholder="Your message"
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            disabled={loading}
          />
          {!loading && (
            <ContactButton
              type="submit"
              disabled={
                formData.user_name === "" ||
                formData.user_name === "" ||
                formData.user_message === ""
              }
            >
              Contact Me
            </ContactButton>
          )}
        </ContactForm>
      )}
    </Container>
  );
};
