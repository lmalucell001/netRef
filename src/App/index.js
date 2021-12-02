import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import Grille from "../exercices/Imageworker";
import ContextsExercice from 'exercices/Contexts'
import Uploader from 'exercices/Uploader'
import Coor from '../cursorCoor';

function App() {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color-logo')
    console.log(color)
  },[]);

  function setColor(color){
    document.documentElement.style.setProperty('--color-logo', color)
  }
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
         {/*<Grille /> */}
          <Coor/>
          <p>
            <button onClick={() => setColor('orange')}>orange</button>
            <button onClick={() => setColor('blueviolet')}>violet</button>
          </p>
          
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
