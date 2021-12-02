import React from 'react';
import style from './dropZone.module.css';

const DropZone = ( props ) => {
    
    console.log("jesuisla")
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
          props.addCard(`data:image/jpg;base64,${fileRes}`) 
          console.log(`data:image/jpg;base64,${fileRes}`);
        };
    
        reader.onerror = () => {
          console.log("There is a problem while uploading...");
        };
      }
  
  return (
    <div className={style.dropzone}
        onDragOver={(f) => handleOver(f)}
        onDrop={(f) => handleUpload(f)}
    >
      
    </div>
  )
}

export default DropZone