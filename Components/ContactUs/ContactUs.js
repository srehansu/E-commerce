import React from 'react'; // Import Link if you are using React Router
import styled from 'styled-components';

const TopImageContainer = styled.div`
  text-align: center;
`;

const TopImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 90vh;
`;

const ContactUsContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 90vh; /* Ensures the container takes at least the full viewport height */
`;

const ContactContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: -1rem;
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
  margin-right: 10px; /* Add margin to the right of the existing button */

  &:hover {
    background-color: #2980b9; /* Change hover color as needed */
  }
`;



const StylishButton = styled.button`
background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #2980b9; /* Change hover color as needed */
  }
`;

const ContactUs = () => {
  return (
    <>
      <TopImageContainer>
        <TopImage
          src="https://media.istockphoto.com/id/1091858450/photo/contact-us-sign-on-a-wooden-desk.jpg?s=612x612&w=0&k=20&c=Ff4enIFR2WC0QCa_CSB0RHHaNJI-t64Pa6XBuNdfux4="
          alt="Contact Us"
        />
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
              {/* StylishButton added here */}
              <StylishButton>
                {/* Use Link if you are using React Router */}
                {/* <Link to="/Delivery">Go to Delivery</Link> */}
                {/* Use anchor tag for navigation if not using React Router */}
                <a href="/Delivery" style={{ textDecoration: 'none', color: 'white' }}>Go to Delivery</a>              </StylishButton>
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
