import React from 'react';
import DropZone from './dropZone';
import style from './dropZone.module.css';



const Grille= () => {
  const [cards, setCard] = React.useState([]);
  const [drop, setDrop] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  //localStorage.clear()
  console.log("drop", drop)

  if (localStorage.getItem('Moodboard') && first===true) { 
    console.log("RESTAURE========================================")
    console.log("cards",cards)
    let cache = JSON.parse(localStorage.getItem('Moodboard'))
    console.log("cache",cache)
    console.log("first", first)
    console.log("drop", drop)
    setCard(cache)
    setFirst(false)
    setDrop(true)
  }

  const addCard =(img)=> {
    setCard([...cards, img])
    setFirst(false)
    setDrop(true)
    console.log("drop", drop)
  }
  React.useEffect(() => {    
    localStorage.setItem( 'Moodboard' , JSON.stringify(cards) )
    console.log("cards",cards)
    let cache = cards
    console.log("cache",cache)
    console.log("drop", drop)
  });
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
 