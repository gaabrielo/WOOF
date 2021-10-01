import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';

import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { HiPencilAlt } from 'react-icons/hi';
import { IoPawSharp } from 'react-icons/io5';

import { Container, Table, DogTable, Redirect } from './styles.js';

export function VaccineTable() {
  const { user } = useAuth();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/dogs?owner_id=${user}`);

      setDogs(response.data);
    }

    getData();
  }, [user]);

  return (
    <Container>
      {dogs.length > 0 ? (
        dogs.map((dog) => (
          <DogTable key={dog.id}>
            <header>
              <div>
                <h1>{dog.name}</h1>
                <p>{dog.breed}</p>
              </div>
              <Link to={`/dashboard/create?di=${dog.id}`}>
                <BiPlus />
                Cadastrar vacina
              </Link>
            </header>

            <Table>
              <thead>
                <tr>
                  <th>Vacina</th>
                  <th>Tipo</th>
                  <th>Situação</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {dog.vaccines?.map((vaccine) => {
                  return (
                    <tr key={vaccine.id}>
                      <td>{vaccine.name}</td>
                      <td>{vaccine.type}</td>
                      <td
                        style={{
                          color: `${
                            vaccine.status ? 'var(--green)' : 'var(--red)'
                          }`,
                        }}
                      >
                        {vaccine.status ? 'Vacinado' : 'Não vacinado'}
                      </td>
                      <td>
                        <button>
                          <HiPencilAlt />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </DogTable>
        ))
      ) : (
        <Redirect>
          <Link to="/dashboard/newDog">
            <IoPawSharp />
            Cadastre seu primeiro dog
          </Link>
        </Redirect>
      )}
    </Container>
  );
}
