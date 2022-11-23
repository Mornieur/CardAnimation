import styled from 'styled-components';

export const Container = styled.div`
  .card-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #5dafb8;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .card {
    height: 400px;
    width: 700px;
    border-radius: 13px;
    box-shadow: 20px 40px 33px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    background-color: #75b2c5;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    height: 10rem;
    align-items: center;
    margin: 0 auto;
    background-image: linear-gradient(70deg, RoyalBlue, DarkTurquoise);
    box-shadow: 10px 15px 15px 6px #3891b4;
    border-radius: 50%;
    font-size: 15vh;
    div {
      margin-top: 1.2rem;
      .caracterImage {
        border-radius: 50%;
      }
    }
  }

  .card h2 {
    font-size: 5vh;
  }

  .card p {
    font-size: 3vh;
    /* color: var(--yellow-600); */
  }
`;
