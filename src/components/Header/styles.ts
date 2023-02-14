import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #000000;
  position: sticky;
  top: 0;
  padding: 0.5rem;
`;

export const HeaderItems = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0;
  display: flex;

  .items {
    width: 100%;
    height: 2.5rem;
    display: flex;
    position: absolute;
    bottom: 0;
  }

  .pagesSection {
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    a {
      width: 200px;
      text-decoration: none;
      border: none;
      color: #fff;
      font-weight: 600;
      display: flex;
      justify-content: center;

      :hover {
        border-bottom: 3px solid #fff;
      }
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
