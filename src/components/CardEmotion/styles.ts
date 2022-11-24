import styled from 'styled-components';

export const Container = styled.div`
  .card-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #980a0a;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    z-index: 999;
  }
h2 {
  font-size: 1.7rem;
  margin-top: 1rem;
  @media(max-width: 500px) {
      font-size: 1rem;
    }
}
p {
  margin-top: 1rem;
  @media(max-width: 660px) {
      font-size: 0.8rem;
    }
  @media(max-width: 500px) {
      font-size: 12px;
    }
}


  .card  {
    h2 {
        color: #ffbcbc
        
    }
 
   
  }

  .card p {
    
    max-width:640px;
    max-height: 10px;

    
  }
`;
