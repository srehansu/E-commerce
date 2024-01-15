import React from 'react';
import styled from 'styled-components';

const TopImageContainer = styled.div`
  text-align: center;
`;

const TopImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 49vh;
`;

const ContactUsContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the container takes at least the full viewport height */
`;

const ContactContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 300px; /* Adjust the max-width as needed */

  @media (max-width: 767px) {
    margin-top: 20px; /* Add some space between the form and contact info on mobile */
    align-items: center; /* Center items horizontally on mobile */
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 600px; /* Adjust the max-width as needed */
`;

const ContactForm = styled.form`
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const ContactUs = () => {
  return (
    <>
      <TopImageContainer>
        <TopImage src="https:images.jpg" />
      </TopImageContainer>

      <ContactUsContainer>
        <ContactContentContainer>
          <ContactFormContainer>
            <h1>Contact Us</h1>
            <ContactForm>
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject:</Label>
                <Input type="text" id="subject" name="subject" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message:</Label>
                <TextArea id="message" name="message" rows="4" required></TextArea>
              </FormGroup>

              <SubmitButton type="submit">Submit</SubmitButton>
            </ContactForm>
          </ContactFormContainer>

          <ContactInfoContainer>
            <h2>Email</h2>
            <p>srehansududul.barik.com</p>

            <h2>Phone Numbers</h2>
            <p>Main: +917608966282</p>
            <p>Support: +916370914550</p>

            <h2>Physical Address</h2>
            <p>B-6, Satya Nagar, Bhubaneswar</p>
          </ContactInfoContainer>
        </ContactContentContainer>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
