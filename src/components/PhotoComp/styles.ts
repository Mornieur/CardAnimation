import styled from 'styled-components';

export const Container = styled.div`
  width: min(100%, 27.25rem);
  height: 100%;
  position: relative;
  text-align: center;

  img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 100%;
  }

  p {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--white);
    text-align: center;
    font-size: var(--highDesk-font);
  }

  
`;
