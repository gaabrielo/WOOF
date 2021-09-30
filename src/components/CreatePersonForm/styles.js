import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    margin-bottom: 1.75rem;
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
