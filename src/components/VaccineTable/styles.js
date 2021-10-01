import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 67.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      padding-right: 1rem;
    }

    h1 {
      font-size: 1.95rem;
      font-weight: 500;
      align-self: flex-end;
    }

    p {
      font-weight: 400;
      font-size: 0.95rem;
      color: var(--subtitle);
    }

    a {
      height: 2.5rem;
      display: flex;
      align-items: center;
      background: var(--text);
      color: var(--white);
      padding: 0.5rem 1rem;
      font-size: 1;
      font-weight: 500;
      border-radius: 3px;

      svg {
        margin-right: 7px;
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
`;

export const DogTable = styled.div`
  width: 100%;

  & + & {
    margin-top: 3rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 2rem;

  th,
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--linear-50);
  }

  th {
    color: var(--subtitle);
    text-transform: uppercase;
    font-size: 0.75rem;
    text-align: left;
  }

  th:last-of-type {
    width: 2rem;
  }

  td:nth-child(2) {
    color: var(--subtitle);
  }

  td {
    font-size: 0.875rem;

    button {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--background);
      border: 1px solid var(--linear-100);
      border-radius: 0.5rem;

      transition: filter 0.2s;
      color: var(--subtitle);

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;

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
