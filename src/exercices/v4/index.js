import React from 'react';
import DropZone from './dropZone';
import style from './dropZone.module.css';



const Grille= () => {
  const [cards, setCard] = React.useState([]);
  const [drop, setDrop] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  //localStorage.clear()


  React.useEffect(() => {    
    console.log("EFFECTTTTTTTTTTTTTTTTTTTTTTTT")
    console.log("SAVE========================================")
    localStorage.setItem( 'Moodboard' , cards )
    console.log("cards",cards)
    let cache = [localStorage.getItem('Moodboard')]
    console.log("cache",cache)
  });


  if (localStorage.getItem('Moodboard') && first==true) { 
    console.log("RESTAURE========================================")
    console.log("cards",cards)
    //debugger
    let cache = localStorage.getItem('Moodboard')
    console.log("cache",cache)
    console.log("first", first)
    setCard(cache)
    setFirst(false)
    setDrop(true)
  }

  const addCard =(img)=> {
    setCard([...cards, img])
    // localStorage.setItem( 'Moodboard' , `${cards}`)
    // console.log("cards",cards)
    // localStorage.setItem( 'Moodboard' , cards )
    // let cache = localStorage.getItem('Moodboard')
    // console.log("cache",cache)
    // console.log("first", first)
    setFirst(false)
    setDrop(true)
  }
  // console.log("c'est integrer au back?" , localStorage.getItem('Moodboard'))
  // console.log("ca rentre?" , `${cards}`)
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
 