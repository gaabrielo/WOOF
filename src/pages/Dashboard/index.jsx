import { Switch, Route } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { VaccineTable } from '../../components/VaccineTable';
import { NewVaccineForm } from '../../components/NewVaccineForm';
import { Profile } from '../../components/Profile';
import { NewDogForm } from '../../components/NewDogForm';

import { Container } from './styles.js';

export function Dashboard() {
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
