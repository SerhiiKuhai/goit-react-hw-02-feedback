import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  display: block;

  margin-top: 10px;

  color: rgb(0, 0, 0);
  background-color: rgb(172, 172, 172);

  border-radius: 4px;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.3);

  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgb(250, 250, 250);
    background-color: rgb(50, 40, 185);
    box-shadow: 6px 6px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;
