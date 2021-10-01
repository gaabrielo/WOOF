import React, { useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { FormControl } from '../../styles/form';
import { Button } from '../Button';

import { Container, Form } from './styles';

export function NewDogForm() {
  const { user } = useAuth();
  let history = useHistory();

  const [dogForm, setDogForm] = useState({
    name: '',
    breed: '',
    gender: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDogForm({ ...dogForm, [name]: value });
  }

  function handleSubmitDog(e) {
    e.preventDefault();

    try {
      const dogData = {
        owner_id: user,
        name: dogForm.name,
        breed: dogForm.breed,
        gender: dogForm.gender,
        vaccines: [],
      };

      api.post('/dogs', dogData).then((res) => {
        console.log(res);

        history.push('/dashboard');
      });
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) return <Link to="/">Faça login</Link>;
  return (
    <Container>
      <h1>Cadastrar dog</h1>

      <Form onSubmit={handleSubmitDog}>
        <FormControl>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={dogForm.name}
          />
        </FormControl>

        <FormControl>
          <label htmlFor="breed">Raça</label>
          <input
            type="text"
            id="breed"
            name="breed"
            onChange={handleInputChange}
            value={dogForm.breed}
          />
        </FormControl>

        <FormControl>
          <label htmlFor="gender">Gênero</label>
          <input
            type="text"
            id="gender"
            name="gender"
            onChange={handleInputChange}
            value={dogForm.gender}
          />
        </FormControl>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
