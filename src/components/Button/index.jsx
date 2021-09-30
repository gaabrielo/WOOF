import { Container } from './styles.js';

export function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
