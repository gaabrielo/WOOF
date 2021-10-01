import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

import { FormControl } from '../../styles/form';
import { Container, Form, UncontrolledForm } from './styles.js';

export function Profile() {
  const { user } = useAuth();

  const [userData, setUserData] = useState({ name: '', gender: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user)
      try {
        async function getPersonData() {
          const response = await api.get(`/users/${user}`);
          console.log(response);

          const newUserData = {
            name: response.data.name,
            gender: response.data.gender,
          };

          setUserData(newUserData);
        }

        getPersonData();
      } catch (e) {
        console.log(e);
      }
  }, [user]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();

    try {
      const newUserData = {
        name: userData.name,
        gender: userData.gender,
      };

      await api.put(`/users/${user}`, newUserData);

      setIsEditing(false);
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) return <Link to="/">Faça login</Link>;
  return (
    <Container>
      <header>
        <h1>Configurações de conta</h1>
        <button type="button" onClick={handleEdit}>
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
      </header>

      {isEditing ? (
        <Form onSubmit={handleSubmitEdit}>
          <FormControl>
            <label>Nome</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={userData.name}
            />
          </FormControl>

          <FormControl>
            <label>Gênero</label>
            <input
              type="text"
              name="gender"
              onChange={handleInputChange}
              value={userData.gender}
            />
          </FormControl>

          <button type="submit">Enviar</button>
        </Form>
      ) : (
        <UncontrolledForm>
          <FormControl>
            <label>Nome</label>
            <div className="uncontrolled-input">
              <span>{userData.name}</span>
            </div>
          </FormControl>

          <FormControl>
            <label>Gênero</label>
            <div className="uncontrolled-input">
              <span>{userData.gender}</span>
            </div>
          </FormControl>
        </UncontrolledForm>
      )}
    </Container>
  );
}
