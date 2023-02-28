import React from 'react'
import { ButtonContainer, HorizontalRule, InputContainer, MainContainer, StyledButton, StyledInput, WelcomeText } from './auth.styles';

const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
}

const SignUp = () => {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <HorizontalRule />
    </MainContainer>
  )
}

export default SignUp