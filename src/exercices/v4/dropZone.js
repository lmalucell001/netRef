import React, { useState } from 'react';
import style from './dropZone.module.css';


const DropZone = ( props ) => {

        /*const [numero, setNumero] = useState('');
        const [top, setTop] = useState('');
        const [left, setLeft] = useState('');
        const [pict, setPict] = useState('');*/
/*
        const handle = () => {
          localStorage.setItem('Numero', numero);
          localStorage.setItem('Top', top);
          localStorage.setItem('Left', left);
          localStorage.setItem('Pict', pict);
        };*/
        /*
        const remove = () => {
          localStorage.removeItem('Numero');
          localStorage.removeItem('Top');
          localStorage.removeItem('Left');
          localStorage.removeItem('Pict');
        };*/

        const handleOver = (f) => {
          f.preventDefault();
          f.stopPropagation();
          console.log("over!");
        }; 
  
    
      const handleUpload = (f) => {
        f.preventDefault();
        f.stopPropagation();
        console.log("drop!");
        
    
        const [file] = f.target.files || f.dataTransfer.files;
    
        uploadFile(file);
      };
      function uploadFile(file) { 
        const reader = new FileReader();
        reader.readAsBinaryString(file);
    
        reader.onload = () => {
          // this is the base64 data
          const fileRes = btoa(reader.result);
          props.addCard(`data:image/jpg;base64,${fileRes}`);
          console.log(`data:image/jpg;base64,${fileRes}`);
        };
    
        reader.onerror = () => {
          console.log("There is a problem while uploading...");
        };
      }
  
  return (
    <>
    <div className={style.dropzone}
        onDragOver={(f) => handleOver(f)}
        onDrop={(f) => handleUpload(f)}
    >
    </div>
    <div>
      <>
    <div className={style.uploadButton}>
            <button className={style.button}>Upload new file here 
                <input
                  type="file"
                  className={style.uploadFile}
                  accept="image/*"
                  onChange={(f) => handleUpload(f)}
                />
              </button>

              
            </div>
            </>
      </div>
      </>
  )
}

export default DropZone