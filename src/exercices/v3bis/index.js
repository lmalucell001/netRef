import React from 'react';
import DropZone, {handleUpload} from './dropZone';
import styli from './dropZone.module.css';
//import style from './responsive.css';
//var localStorageKey = '_moodboard';

const Grille= () => {
const [cards, setCard] = React.useState([]);
const [drop, setDrop] = React.useState(false);
  const addCard =(img)=> {
    setCard([...cards, img])
    setDrop(true)
  }

  /**window.addEventListener("resize", updateDimensions)
  const updateDimensions = () => {
    const width = window.innerWidth
    console.log(width)
  }**/

  console.log(cards)

  return (
    <div>
    <div className={styli.frameholder}>
      {!drop && (
        <h1>Drag and Drop Here</h1>
      )}
          <DropZone addCard={addCard} />  
          <div className={styli.framer}>  
      {cards.map((card)=> (
        <div className={styli.frame} style={{ backgroundImage: `url(${card})` }}></div>
      ))}
  
    </div>
    </div>
    <>
    <div className={styli.uploadButton}>
            <button className={styli.button}>Upload new file here 
                <input
                  type="file"
                  className={styli.uploadFile}
                  accept="image/*"
                  onChange={(e) => DropZone.handleUpload(e)}
                />
              </button>

              
            </div></>
    </div>

  )
}

export default Grille;
 