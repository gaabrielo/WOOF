import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    margin-bottom: 1.75rem;

    h1 {
      display: block;
      width: 100%;
      font-size: 1.5rem;
      font-weight: 400;
      text-align: left;
      padding-right: 1rem;
    }

    button {
      height: fit-content;
      font-size: 1rem;
      background: transparent;
      border: 0;
      align-self: flex-end;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  button {
    width: 100%;
    height: 2.5rem;
    background: var(--text);
    text-transform: uppercase;
    border: 0;
    color: var(--white);
    font-size: 0.9rem;
    border-radius: 3px;
    margin-top: 1.75rem;
  }
`;

export const UncontrolledForm = styled.div`
  width: 100%;

  .uncontrolled-input {
    display: flex;
    align-items: center;

    width: 100%;
    border: 1px solid var(--linear-200);
    height: 2.5rem;
    line-height: 1.0625rem;
    padding: 0 1rem;
    background: transparent;
    outline: none;
    border-radius: 3px;

    color: var(--subtitle);
    font-weight: 400;
  }
`;
