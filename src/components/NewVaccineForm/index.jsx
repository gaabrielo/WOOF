import { useState } from 'react';
import { Button } from '../Button';

import { FormControl } from '../../styles/form';
import { Container, Form, Status, StatusButton } from './styles.js';

export function NewVaccineForm() {
  const [vaccinated, setVaccinated] = useState(true);

  return (
    <Container>
      <h1>Nova vacinação</h1>

      <Form>
        <FormControl>
          <label>Vacina</label>
          <input type="text" />
        </FormControl>

        <FormControl>
          <label>Tipo</label>
          <input type="text" />
        </FormControl>

        <FormControl>
          <label>Situação</label>
          <Status>
            <StatusButton
              type="button"
              onClick={() => setVaccinated(true)}
              bg={vaccinated ? '#04d36166' : undefined}
              border={vaccinated ? '#04d361' : undefined}
            >
              Vacinado
            </StatusButton>

            <StatusButton
              type="button"
              onClick={() => setVaccinated(false)}
              bg={vaccinated ? undefined : '#ff1f2e66'}
              border={vaccinated ? undefined : '#ff1f2e'}
            >
              Não vacinado
            </StatusButton>
          </Status>
        </FormControl>

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
