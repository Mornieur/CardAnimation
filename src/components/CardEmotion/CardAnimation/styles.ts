import styled from "styled-components";

export const Container = styled.div`
  .card {
    height: 400px;
    width: 700px;
    border-radius: 13px;
    box-shadow: 20px 40px 33px rgba(0, 0, 0, 0.3);
    padding: 2rem;
    background-color: #7a7a7a;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    height: 10rem;
    align-items: center;
    margin: 0 auto;
    background-image: linear-gradient(70deg, #020024 , #696868);
    box-shadow: 10px 15px 15px 6px #020024;
    border-radius: 50%;
    font-size: 15vh;

    img {
      border-radius: 50%;
     
    }
    div {
      margin-top: 1.2rem;
      .caracterImage {
        border-radius: 50%;
      }
    }
  }
`