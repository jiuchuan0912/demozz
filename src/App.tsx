import { Switch, Route } from '@modern-js/runtime/router';
import Demo1 from './demo1/container';
import Demo2 from './demo2/container';

import './App.css';
import '@arco-design/web-react/dist/css/arco.css';

const App = () => (
  <Switch>
    <Route path="/demo1">
      <Demo1 />
    </Route>
    <Route path="/demo2">
      <Demo2 />
    </Route>
  </Switch>
);

export default App;
