import logoImg from '../../assets/logo.svg';

import { Container, Headline } from './styles';

export function Aside() {
  return (
    <Container>
      <img src={logoImg} alt="WOOF!" />

      <Headline>
        <h1>Seu amigão sempre saudável</h1>
        <p>
          Controle a vacinação do seu cachorro de forma organizada e acessível.
        </p>
      </Headline>

      <span>
        Esta obra está licenciada com uma Licença{' '}
        <a
          rel="noreferrer"
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
        >
          Creative Commons Atribuição 4.0 Internacional
        </a>
        .
      </span>
    </Container>
  );
}
