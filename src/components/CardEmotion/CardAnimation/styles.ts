import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 999px) {
    flex-direction: column;
  }

  section {
    width: 300px;
    height: 400px;
  }

  .card {
    height: 400px;
    max-width: 500px;
    width: 100%;
    border-radius: 13px;
    padding: 2rem;
    background-color: #7a7a7a;
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
