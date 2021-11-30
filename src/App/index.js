import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import Grille from "../exercices/Imageworker";
import ContextsExercice from 'exercices/Contexts'
import Uploader from 'exercices/Uploader'
import Capture from "../exercices/cursorCoordinate";

function App() {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--coorX')
    console.log('color') },[]);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/first-component">
          <FirstComponentExercice />
        </Route>
        <Route exact path="/styling-components">
          <StylingComponentsExercice />
        </Route>
        <Route exact path="/contexts">
          <ContextsExercice />
        </Route>
        <Route exact path="/hooks">
          Hooks
        </Route>
        <Route exact path="/">
          <FirstComponentExercice />
        </Route>
        <Route exact path="/uploader">
          <Uploader />
        </Route>
        <Route exact path="/">
          404
        </Route>
        <Route exact path="/imageworker">
          <Grille />
          <button onClick={this.useEffect.bind(this)}>
              Button!
          </button>
          <Capture/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
