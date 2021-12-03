import React from 'react';
import DropZone from './dropZone';
import style from './dropZone.module.css';



const Grille= () => {
   const [cards, setCard] = React.useState([]);
  const [drop, setDrop] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  const [album, setAlbum] = React.useState([]);
//   const [itop, setItop] = React.useState(["500"])
//   const [ileft, setIleft] = React.useState(["500"])
//   const [cadres, setCadres] = React.useState(["0"])
//   const [number, setNumber] = React.useState(1)
  var dragging = new Boolean(false)
  localStorage.clear()
  console.log("drop", drop)

  const photoMovable = {
    img : "" ,
    itop : 700,
    ileft : 600
  }

  console.log("left", photoMovable.ileft, "top", photoMovable.itop)

  console.log("photoMovable", photoMovable)

  if (localStorage.getItem('Moodboard') && first===true) { 
    let cache = JSON.parse(localStorage.getItem('Moodboard'))
    // console.log("cards",cards)
    // console.log("cache",cache)
    // console.log("first", first)
    // console.log("drop", drop)
    setAlbum(cache)
    setFirst(false)
    setDrop(true)
    console.log("left", photoMovable.ileft, "top", photoMovable.itop)
  }

   const addCard =(img, e)=> {
//     setNumber(prevNumber => prevNumber + 1)
//     setCadres([...cadres, number.toString()])
//     //up are the new ones
console.log("left", photoMovable.ileft, "top", photoMovable.itop)
    photoMovable.img = img;

    
    photoMovable.itop = e.clientY;
    photoMovable.ileft = e.clientX;
    setAlbum([...album, photoMovable]);
    setFirst(false)
    setDrop(true)
    console.log("drop", drop)
    console.log("left", photoMovable.ileft, "top", photoMovable.itop)
  }

  React.useEffect(() => {    
    localStorage.setItem( 'Moodboard' , JSON.stringify(album) )
    console.log("album",album)
    let cache = album
    console.log("cache", cache)
    console.log("drop", drop)
  })
  
  // const ondragStart = () => {
  //   dragging = true;
  // }
  // const ondragging = (i,e) => {
  //     if (dragging) {
  //         let g = e.clientX
  //         let k = e.clientY
  //         g = g-75
  //         k = k-75
  //         photoMovable.ileft = g.toString()
  //         photoMovable.itop = k.toString()
  //     }
  // }
  // const ondragEnd = () => {
  //     dragging = false;
  // }

  // const onMouseDown = (e) => {
  //     let Y = e.clientY;
  //     let X = e.clientX;
  //     Y = Y-75;
  //     X = X-75;
  //     photoMovable.itop = [...photoMovable.itop, Y.toString()]
  //     photoMovable.ileft = [...photoMovable.ileft, X.toString()]
  //     console.log(photoMovable.itop)
      // console.log(e.clientX + " et " + e.clientY)
      // console.log(ileft + " et " + itop)

      // document.documentElement.style.setProperty('--coorX', e.clientX - 50 + "px")
      // document.documentElement.style.setProperty('--coorY', e.clientY - 50 + "px")
  // }
  // function removeDummy() {
  //   if (cadres.length === 1) {
  //       setCadres(["0"])
  //   }
  //   else {
  //       cadres.pop();
  //       ileft.pop();
  //       itop.pop();
  //       setNumber(prevNumber => prevNumber - 1)
  //       // console.log(cadres)
  //       if (number < 0) {
  //           setNumber(0)
  //       }
  //   }

    // console.log(itop);
    // console.log(cadres);
//}

// const rizète = () => {
//     setCadres(["0"])
//     setNumber(1)
//     setIleft(["500"])
//     setItop(["500"])
// }
console.log("left", photoMovable.ileft, "top", photoMovable.itop)
;
   return (
     <div>
       
       {/* <button onClick={removeDummy}>enlever la dernière div</button> <button onClick={rizète}>reset</button>
             <div
//                 onMouseDown={onMouseDown}
//                 style={{ height: "100vh", width: "100%" }}
            >
                 {/* <img src={logo} alt="pas là" width="100px" style={{ position: "absolute", top: itop + "px", left: ileft + "px" }} /> 
             </div> */}
       <div className={style.frameholder} 
       style={{ height: "100vh", width: "100%" }}>
         {!drop && (
           <h1>Drag and Drop Here</h1>
         )}
           <DropZone addCard={addCard} />  
         <div className={style.framer}>
         {/* <div >
       <img src={photoMovable.img} alt="photomovable" width="100px" height ="300px" style={{ position: "absolute", top: photoMovable.top + "px", left: photoMovable.left + "px" }} />
       </div>  */}
             {album.map((photoMovable)=> (
            <div className={style.frame} 
          // onMouseDown={ondragStart} 
          // onMouseMove={(e) => ondragging(photoMovable, e)} 
          // onMouseUp={ondragEnd} 
          style={{ 
            position: "absolute", 
            top: `${photoMovable.itop}` + "px", 
            left: `${photoMovable.ileft}` + "px",
          }} 
              > 
             <img src={photoMovable.img} width="300px" alt=""/>
           </div>
           ))}
      
         </div>
       </div>
    
     </div>

   )
 }

export default Grille;

// // let itop = "100";
// // let ileft = "200";

// // const SetCadre = () => {

// //     // const [indiceDivSelected, setIndiceDivSelected] = React.useState(0)
    

// //     const addCadres = () => {
// //         setNumber(prevNumber => prevNumber + 1)
// //         // console.log(number)
// //         setCadres([...cadres, number.toString()])
// //         // console.log("addca", cadres)
// //     }
    
// //     // const onClickDiv = (i) => {
// //     //     alert( "DIV CURRENT NUM="+i)
// //     //     setIndiceDivSelected(i)
// //     // }
    

    

// //     f

// //     console.log(cadro)


// //     return (
// //         <div>
            
// //             <div>{cadres.map((cadre) => (
// //             <div 
              

// //               </div>
// //             ))}
// //             </div>

// //         </div>
// //     );

// // }

// // export default SetCadre;