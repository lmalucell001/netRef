import React, { useState } from 'react';
import style from './dropZone.module.css';


const DropZone = ( props ) => {


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
    
        uploadFile(file, f);
      };
      function uploadFile(file, f) { 
        const reader = new FileReader();
        reader.readAsBinaryString(file);
    
        reader.onload = () => {
          // this is the base64 data
          const fileRes = btoa(reader.result);
          props.addCard(`data:image/jpg;base64,${fileRes}`, f);
          // props.onMouseDown(f);
          console.log("dans dropzone", `data:image/jpg;base64,${fileRes}`);
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