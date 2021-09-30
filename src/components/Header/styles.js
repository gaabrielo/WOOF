import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 5rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoWrapper {
    padding-right: 1rem;
  }

  button {
    border: 0;
    background: transparent;
    font-size: 0;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  ul {
    display: flex;
    gap: 5rem;

    li {
      list-style-type: none;

      a {
        text-transform: uppercase;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 760px) {
    justify-content: flex-start;

    nav {
      display: none;
    }

    .logoWrapper {
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 761px) {
    button {
      display: none;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 2.25rem;

  svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
