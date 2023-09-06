import styled, { css } from 'styled-components';

interface ContainerProps {
  centralizeSectionOnScroll?: boolean | null;
}

export const Container = styled.div<ContainerProps>`
  background-color: var(--darkRed-color);

  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;
