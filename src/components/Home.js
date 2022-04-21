import React from "react";
import styled from "styled-components";
import Section from "./Section";


function Home() {
  return (
    <Container>
    
      <Section
        title="Model S"
        backgroundImage="model-s.jpg"
        description="Order Online for Touchless Delivery "
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model Y"
        backgroundImage="model-y.jpg"
        description="Order Online for Touchless Delivery "
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model 3"
        backgroundImage="model-3.jpg"
        description="Order Online for Touchless Delivery "
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model X"
        backgroundImage="model-x.jpg"
        description="Order Online for Touchless Delivery "
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panel In America"
        backgroundImage="solar-panel.jpg"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar for New Roofs"
        backgroundImage="solar-roof.jpg"
        description="Solar Roof Costs less than a New Roof plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        description=""
        leftBtnText="Shop Now"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100 vh;
`;
