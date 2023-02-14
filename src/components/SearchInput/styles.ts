import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 340px;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 20px;

  background: #f6f6f6;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.13);

  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 50%);
    border-color: rgba(223, 225, 229, 0);
    cursor: pointer;
  }

  svg {
    width: 1.3rem;
    height: 1.3rem;
    color: #aaaaac;
  }

  input {
    height: 2.2rem;
    margin-left: 5px;
    width: 100%;
    color: #fff;
    background: transparent;
    border-radius: 10px;
    padding: 0.5rem;

    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    &:hover {
      cursor: pointer;
    }

    &::placeholder {
      color: #969696;
      font-size: 0.9rem;
      font-weight: 400;
      padding-left: 0.5rem;
    }
  }
`;
