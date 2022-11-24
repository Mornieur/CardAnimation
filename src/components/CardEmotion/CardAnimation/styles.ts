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
    cursor: pointer;
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
  height: 1.8rem;
  margin-top: 0.7rem;
}

`

export const ProgressBar = styled.div`
position: relative;

.pochita {

  width: 3rem;
  height: 3rem;
  position: absolute;
  right: -3rem;
  top: -1rem;
}
`