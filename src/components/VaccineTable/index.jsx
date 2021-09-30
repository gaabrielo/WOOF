import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { HiPencilAlt } from 'react-icons/hi';

import { Container, Table } from './styles.js';

export function VaccineTable() {
  return (
    <Container>
      <header>
        <div>
          <h1>Marley</h1>
          <p>Labrador</p>
        </div>
        <Link to="/dashboard/create">
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
          <tr>
            <td>Labyderm</td>
            <td>Raiva</td>
            <td style={{ color: 'var(--red)' }}>Não vacinado</td>
            <td>
              <button>
                <HiPencilAlt />
              </button>
            </td>
          </tr>
          <tr>
            <td>Biovet Vermivet</td>
            <td>Vermífugo</td>
            <td style={{ color: 'var(--green)' }}>Vacinado</td>
            <td>
              <button>
                <HiPencilAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
