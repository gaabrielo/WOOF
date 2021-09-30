import React from 'react';
import { FormControl } from '../../styles/form';
import { Button } from '../Button';

import { Container, Form } from './styles';

export function NewDogForm() {
  return (
    <Container>
      <h1>Cadastrar dog</h1>

      <Form>
        <FormControl>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />
        </FormControl>

        <FormControl>
          <label htmlFor="breed">Raça</label>
          <input type="text" id="breed" />
        </FormControl>

        <FormControl>
          <label htmlFor="gender">Gênero</label>
          <input type="text" id="gender" />
        </FormControl>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
