import { Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
