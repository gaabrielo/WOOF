import { Switch, Route } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { VaccineTable } from '../../components/VaccineTable';
import { NewVaccineForm } from '../../components/NewVaccineForm';
import { Profile } from '../../components/Profile';
import { NewDogForm } from '../../components/NewDogForm';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import { Container, Redirect } from './styles.js';

export function Dashboard() {
  const { user } = useAuth();

  if (!user)
    return (
      <Redirect>
        <Link to="/">
          <HiArrowLeft />
          Faça login
        </Link>
      </Redirect>
    );
  return (
    <Container>
      <div>
        <Sidebar />
      </div>
      <main>
        <Switch>
          <Route path="/dashboard/create" component={NewVaccineForm} />
          <Route path="/dashboard/me" component={Profile} />
          <Route path="/dashboard/newDog" component={NewDogForm} />
          <Route path="/dashboard" component={VaccineTable} />
        </Switch>
      </main>
    </Container>
  );
}
