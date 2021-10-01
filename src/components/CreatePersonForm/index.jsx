import { useState } from 'react';
import * as yup from 'yup';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

import { Container, Form } from './styles';
import { FormControl } from '../../styles/form';

let newProductSchema = yup.object().shape({
  name: yup.string().required('Título obrigatório'),
  gender: yup.string().required('Gênero obrigatório'),
});

export function CreatePersonForm() {
  const { handleUserSession } = useAuth();
  let history = useHistory();

  const [personForm, setPersonForm] = useState({
    name: '',
    gender: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setPersonForm({ ...personForm, [name]: value });
  }

  async function handleCreatePerson(e) {
    e.preventDefault();

    let formData = {
      name: personForm.name.trim(),
      gender: personForm.gender.trim(),
    };

    const isFormValid = await newProductSchema.isValid(formData);
    if (!isFormValid) return;

    try {
      await api
        .post('/users', JSON.stringify(formData))
        .then((res) => {
          handleUserSession(res.data.id);
        })
        .then(history.push('/dashboard'));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <h1>Acesse sua conta WOOF!</h1>

      <Form onSubmit={handleCreatePerson}>
        <FormControl>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={personForm.name}
          />
        </FormControl>

        <FormControl>
          <label>Gênero</label>
          <input
            type="text"
            name="gender"
            onChange={handleInputChange}
            value={personForm.gender}
          />
        </FormControl>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
