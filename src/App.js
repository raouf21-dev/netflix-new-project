import react from 'react';
import { Switch, Route } from "react-router-dom";
import './css/App.css';
import Main from './pages/index';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
      <Route path="/choose-plan" component={ChoosePlan}/>
    </Switch>
  );
}

export default App;
