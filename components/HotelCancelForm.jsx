'use client'

import styled from 'styled-components';

const FormContainer = styled.div`
background: rgb(53,109,198);
background: linear-gradient(90deg, rgba(53,109,198,1) 49%, rgba(0,178,214,1) 99%);
color: white;
  padding: 50px;
  max-width: 90%;
  margin: 50px auto;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: black;
`;

const HotelCancelForm = () => {
  return (
    <FormContainer className=''>
      <div className="flex text-4xl font-semibold pb-10 justify-center">PREDICT HOTEL CANCELLATION</div>
      <FormGrid>
        <FormGroup>
          <Label>Label 1</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 2</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 3</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 4</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 5</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 6</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 7</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
        <FormGroup>
          <Label>Label 8</Label>
          <Input type="text" placeholder="Enter text or numbers" />
        </FormGroup>
        <FormGroup>
          <Label>Label 9</Label>
          <Input type="text" placeholder="Enter text or numbers"/>
        </FormGroup>
      </FormGrid>
    </FormContainer>
  );
};

export default HotelCancelForm;
