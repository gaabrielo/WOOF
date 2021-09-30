import styled from 'styled-components';

export const Container = styled.span`
  font-size: ${(props) => (!!props.size ? props.size : '1.5rem')};
  font-weight: 700;
  font-style: italic;
`;
