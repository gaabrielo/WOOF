import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  > aside {
    flex: 1;
  }

  > main {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
`;
