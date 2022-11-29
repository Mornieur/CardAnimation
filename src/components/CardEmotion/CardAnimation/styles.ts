import styled from 'styled-components';

interface ButtonIsOpen {
  boxShadow: any;
}

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  section {
    background-color: blue;
    width: 300px;
    height: 400px;
  }
  .card {
    height: 400px;
    width: 500px;
    /* width: 100%; */
    border-radius: 13px;
    box-shadow: 20px 40px 33px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    background-color: #7a7a7a;
    @media (max-width: 810px) {
      width: 480px;
    }
    @media (max-width: 660px) {
      width: 380px;
    }
    @media (max-width: 550px) {
      width: 280px;
    }
  }

  .image-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    height: 10rem;
    align-items: center;
    margin: 0 auto;
    background-image: linear-gradient(70deg, #020024, #696868);
    box-shadow: 10px 15px 15px 6px #020024;
    border-radius: 50%;
    font-size: 15vh;
    z-index: 9999;

    img {
      border-radius: 50%;
      z-index: 999;
    }
    div {
      margin-top: 1.2rem;
      .caracterImage {
        border-radius: 50%;
      }
    }
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: black;
    transform-origin: 0%;
  }
`;

export const ProgressBar = styled.div`
  position: relative;

  .pochitaResponsive {
    position: absolute;
    width: 5rem;
    height: 5rem;
    right: -5.1rem;
    @media (max-width: 500px) {
      width: 2.2rem;

      height: 2.2rem;
      right: -2.2rem;
      right: -2.2rem;
    }
  }
`;

export const DropDown = styled.div<ButtonIsOpen>`
  .box {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: white;
    margin: 0;
  }

  .menu {
    box-shadow: ${({ boxShadow }) =>
      boxShadow ? '20px 40px 33px rgba(0, 0, 0, 0.3)' : 'none'};
    width: 300px;
    width: 300px;
    height: 400px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #7a7a7a;
    height: 350px;
    /* box-shadow: 20px 40px 33px; */
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
