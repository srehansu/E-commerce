import React from 'react';
import styled from 'styled-components';

// Styled components
const AboutContainer = styled.div`
  text-align: center;
  padding: 10rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;



const AboutPage = () => {
  return (
    <>
      <AboutContainer>
        <SectionTitle>About Us</SectionTitle>

        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </AboutText>

        {/* Additional sections or content as needed */}
      </AboutContainer>
    </>
  );
};

export default AboutPage;
