import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import ContextsExercice from 'exercices/Contexts'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/first-component">
          <FirstComponentExercice />
        </Route>
        <Route path="/styling-components">
          <StylingComponentsExercice />
        </Route>
        <Route path="/contexts">
          <ContextsExercice />
        </Route>
        <Route path="/">
          <FirstComponentExercice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
