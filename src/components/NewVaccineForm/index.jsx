import { useState, useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../Button';

import { FormControl } from '../../styles/form';
import { Container, Form, Status, StatusButton } from './styles.js';

export function NewVaccineForm() {
  const { user } = useAuth();
  const { search } = useLocation();
  let history = useHistory();

  const [vaccinated, setVaccinated] = useState(true);
  const [vaccineForm, setVaccineForm] = useState({
    name: '',
    type: '',
  });
  const [dogId, setDogId] = useState(null);

  useEffect(() => {
    setDogId(new URLSearchParams(search).get('di'));
  }, [search]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setVaccineForm({ ...vaccineForm, [name]: value });
  }

  async function handleSubmitDog(e) {
    e.preventDefault();

    try {
      const response = await api.get(`/dogs/${dogId}`);
      const vaccinesList = response.data.vaccines;

      let vaccinesFormatted = [...vaccinesList];

      vaccinesFormatted.push({
        name: vaccineForm.name,
        type: vaccineForm.type,
        status: vaccinated,
        id: uuidv4(),
      });

      api.put(`/dogs/${dogId}`, {
        ...response.data,
        vaccines: vaccinesFormatted,
      });

      history.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  }

  if (!user) return <Link to="/">Faça login</Link>;
  return (
    <Container>
      <h1>Nova vacinação</h1>

      <Form onSubmit={handleSubmitDog}>
        <FormControl>
          <label>Vacina</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </FormControl>

        <FormControl>
          <label>Tipo</label>
          <input type="text" name="type" onChange={handleInputChange} />
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
