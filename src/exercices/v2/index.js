import React from 'react';
import DropZone from './dropZone';
import styli from './dropZone.module.css';

const Grille= () => {
const [cards, setCard] = React.useState([]);
  const addCard =(img)=> {
    setCard([...cards, img])
  }

  console.log(cards)

  return (
    <div>
          <DropZone addCard={addCard} />
    {cards.map((card)=> (
      <div className={styli.frame} style={{ backgroundImage: `url(${card})` }}></div>
    ))}


    </div>

  )
}

export default Grille;
