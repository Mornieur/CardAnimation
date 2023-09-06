import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--darkRed-color);
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.7rem;
    margin-top: 1rem;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  p {
    margin-top: 1rem;
    @media (max-width: 660px) {
      font-size: 0.8rem;
    }
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  .card {
    h2 {
      color: #ffbcbc;
    }
  }

  .card p {
    max-width: 640px;
    max-height: 10px;
  }
`;

export const ProfileContainer = styled.article`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  background-color: #980a0a;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  z-index: 999;
  flex-direction: column;
`;

export const CardProfile = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
