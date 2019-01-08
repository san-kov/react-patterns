import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: 0;
  background: ${props =>
    props.auth ? 'rgb(70, 134, 194)' : 'rgb(252, 92, 92);'};
  padding: 5px;
  margin: 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
    user-select: none;
  }
`;
const Button = props => {
  const { auth, children, onClick } = props;
  return (
    <ButtonWrapper onClick={onClick} auth={auth}>
      {children}
      {auth}
    </ButtonWrapper>
  );
};

export default Button;
