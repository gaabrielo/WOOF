import { Aside } from '../../components/Aside';
import { CreatePersonForm } from '../../components/CreatePersonForm';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <aside>
        <Aside />
      </aside>

      <main>
        <CreatePersonForm />
      </main>
    </Container>
  );
}
