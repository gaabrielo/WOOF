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
    padding-right: 1rem;

    margin-bottom: 1.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  > button {
    margin-top: 1.75rem;
  }
`;

export const Status = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StatusButton = styled.button`
  flex: 1;
  height: 2.5rem;
  border-radius: 3px;
  font-weight: 400;
  font-size: 0.85rem;

  background: ${(props) => props.bg ?? 'var(--background)'};
  border: 1px solid ${(props) => props.border ?? 'var(--linear-200)'};
`;
