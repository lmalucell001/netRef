import React from 'react';
import DropZone from './dropZone';
import styli from './dropZone.module.css';
//var localStorageKey = '_moodboard';

const Grille= () => {
const [cards, setCard] = React.useState([]);
const [drop, setDrop] = React.useState(false);
  const addCard =(img)=> {
    setCard([...cards, img])
    setDrop(true)
  }

  console.log(cards)

  return (
    <div className={styli.framer}>
      {!drop && (
        <h1>Drag and Drop Here</h1>
      )}
          <DropZone addCard={addCard} />
    {cards.map((card)=> (
      <div className={styli.frame} style={{ backgroundImage: `url(${card})` }}></div>
    ))}


    </div>

  )
}

export default Grille;
 