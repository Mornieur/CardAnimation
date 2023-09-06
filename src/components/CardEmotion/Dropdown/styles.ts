import styled from 'styled-components';

export const DropDown = styled.div`
  max-width: 31rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .box {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
    margin: 0;
  }

  .menu {
    max-width: 31rem;
    width: 100%;
    height: 400px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #7a7a7a;
    height: 340px;
  }

  li {
    color: #fff;
    display: block;
    display: flex;
    overflow-y: scroll;

    .titleName {
      padding: 5px;
    }
    .name {
      padding: 5px;
    }
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 10px;
  }

  button {
    -webkit-appearance: button;
    background: #7a7a7a;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button path {
    fill: #fff;
  }

  input {
    accent-color: white;
  }

  label {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
`;
