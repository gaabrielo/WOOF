import styled from 'styled-components';

export const FormControl = styled.div`
  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--subtitle);
  }

  input {
    border: 1px solid var(--linear-200);
    width: 100%;
    height: 2.5rem;
    line-height: 1.0625rem;
    padding: 0 1rem;
    background: transparent;
    outline: none;
    border-radius: 3px;

    color: var(--subtitle);
    font-weight: 400;
  }

  .inputLeftAddon input {
    width: 85%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .inputLeftAddon span {
    width: 15%;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--linear-200);
    border-right: 0;

    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    color: #979797;
    background: var(--linear-50);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & + div {
    margin-top: 1rem;
  }
`;
