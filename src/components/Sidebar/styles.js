import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  padding: 3rem 2rem;
  max-width: min-content;
  height: 100%;
  background: var(--yellow);

  flex-direction: column;
  justify-content: space-between;

  > nav {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    a {
      font-size: 0;
      width: min-content;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
