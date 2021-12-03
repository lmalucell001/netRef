import React from 'react';
import DropZone from './dropZone';
import style from './dropZone.module.css';
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
    <div>
    <div className={style.frameholder}>
      {!drop && (
        <h1>Drag and Drop Here</h1>
      )}
          <DropZone addCard={addCard} />  
          <div className={style.framer}>  
      {cards.map((card)=> (
        <div className={style.frame}> 
          <img src={card} width="300px" alt=""/>
        </div>
      ))}
  
    </div>
    </div>
    
    </div>

  )
}

export default Grille;
 