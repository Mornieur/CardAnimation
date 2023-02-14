import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #000000;
  position: sticky;
  top: 0;
`;

export const HeaderItems = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0;
  display: flex;

  .items {
    width: 100%;
    height: 3rem;
    display: flex;
    position: absolute;
    bottom: 0;
  }

  .pagesSection {
    width: 50%;
    display: flex;
    justify-content: space-around;
    padding: 1rem;

    a {
      width: 200px;
      text-decoration: none;
      border: none;
      color: #fff;
      font-weight: 600;
    }
  }

  .searchSection {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: end;
    padding: 1rem;
  }
`;
