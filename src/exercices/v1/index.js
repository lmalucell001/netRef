import React, {Component} from 'react';
import styles from './Imageworker.module.css';
import style from './UploaderI.module.css'
import nalfgas from './mousqueton.jpg';


const Grille= () => {
const [preview, setPreview] = React.useState("");
const [preview1, setPreview1] = React.useState("");
    const [drop, setDrop] = React.useState(false);
  
    const handleOver = (f) => {
      f.preventDefault();
      f.stopPropagation();
      console.log("over!");
    };

  
    const handleUpload = (f) => {
      f.preventDefault();
      f.stopPropagation();
      console.log("drop!");
      setDrop(true);
  
      const [file] = f.target.files || f.dataTransfer.files;
  
      uploadFile(file);
    };

    const handleOver1 = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("over!");
    };

    const handleUpload1 = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop!");
      setDrop(true);
  
      const [file] = e.target.files || e.dataTransfer.files;
  
      uploadFile1(file);
    };
  
    function uploadFile1(file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
  
      reader.onload = () => {
        // this is the base64 data
        const fileRes = btoa(reader.result);
        console.log(`data:image/jpg;base64,${fileRes}`);
        setPreview1(`data:image/jpg;base64,${fileRes}`);
      };
  
      reader.onerror = () => {
        console.log("There is a problem while uploading...");
      };
    }
    function uploadFile(file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
  
      reader.onload = () => {
        // this is the base64 data
        const fileRes = btoa(reader.result);
        console.log(`data:image/jpg;base64,${fileRes}`);
        setPreview(`data:image/jpg;base64,${fileRes}`);
      };
  
      reader.onerror = () => {
        console.log("There is a problem while uploading...");
      };
    }
  
 
  return (
<div className={styles.container}>

    <div className={styles.subContainer}>
    <>
        <div 
        onDragOver={(f) => handleOver(f)}
        onDrop={(f) => handleUpload(f)}
        className={styles.frame}
        style={{ backgroundImage: `url(${preview})` }}>
        <form class="my-form">
            {!drop && (
                   <p>Drag and Drop image here</p>
            )}
          </form>
        </div>
        </>
        <>
        <div 
        onDragOver={(f) => handleOver(f)}
        onDrop={(f) => handleUpload(f)}
        className={styles.frame}
        style={{ backgroundImage: `url(${preview})` }}>
        <form class="my-form">
            {!drop && (
                   <p>Drag and Drop image here</p>
            )}
          </form>
        </div>
        </>

    </div>
    <div className={styles.Container2}>
       <>
        <div 
        onDragOver={(e) => handleOver1(e)}
        onDrop={(e) => handleUpload1(e)}
        className={styles.frame}
        style={{ backgroundImage: `url(${preview1})` }}>
        <form class="my-form">
            {!drop && (
                   <p>Drag and Drop image here</p>
            )}
          </form>
        </div>
        </>

        <>
        <div 
        onDragOver={(e) => handleOver1(e)}
        onDrop={(e) => handleUpload1(e)}
        className={styles.frame}
        style={{ backgroundImage: `url(${preview1})` }}>
        <form class="my-form">
            {!drop && (
                   <p>Drag and Drop image here</p>
            )}
          </form>
        </div>
        </>
    </div>
    <>
    <div className={style.uploadButton}>
            <button className={style.button}>Upload new file here 
                <input
                  type="file"
                  className={style.uploadFile}
                  accept="image/*"
                  onChange={(e) => handleUpload(e)}
                />
              </button>

              
            </div></>
    
</div>
  )
}

export default Grille;
