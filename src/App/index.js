import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";

// Exercices
import UploaderI from 'exercices/UploaderI'
import Storer from 'exercices/Storer'
import V1 from 'exercices/v1'
import V2 from 'exercices/v2'
import V3 from 'exercices/v3'
import Coor from '../cursorCoor';
import SetCadre from '../exercices/SetCadre';



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
        <Route exact path="/uploaderI">
          <UploaderI />
        </Route>
        <Route exact path="/storer">
          <Storer />
        </Route>
        <Route exact path="/v1">
          <V1 />
        </Route>
        <Route exact path="/v2">
          <V2 />
        </Route>
        <Route exact path="/v3">
          <V3 />
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
        <Route exact path="/setcadre">
          <SetCadre/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
