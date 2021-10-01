import styled from 'styled-components';

export const Redirect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;

  a {
    padding: 0.5rem 1rem;
    background: var(--text);
    border-radius: 3px;
    color: var(--white);

    display: flex;
    align-items: center;

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 7px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;

  > main {
    width: 100%;
    min-height: 100vh;
    padding: 3rem 2rem;

    display: flex;
    justify-content: center;
  }
`;
