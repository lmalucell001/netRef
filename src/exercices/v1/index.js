import React, {Component} from 'react';
import styles from './Imageworker.module.css';
import style from './UploaderI.module.css'
import nalfgas from './mousqueton.jpg';


const Grille= () => {
const [preview, setPreview] = React.useState("");
    const [drop, setDrop] = React.useState(false);
  
    const handleEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("enter!");
    };
  
    const handleOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("over!");
    };
  
    const handleLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("leave!");
    };
  
    const handleUpload = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("drop!");
      setDrop(true);
  
      const [file] = e.target.files || e.dataTransfer.files;
  
      uploadFile(file);
    };
  
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
        <div 
        onDragEnter={(e) => handleEnter(e)}
        onDragLeave={(e) => handleLeave(e)}
        onDragOver={(e) => handleOver(e)}
        onDrop={(e) => handleUpload(e)}
        className={styles.frame}
        style={{ backgroundImage: `url(${preview})` }}>
        
        </div>

        <div className={styles.frame}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>
    </div>
    <div className={styles.Container2}>
        <div className={styles.frame1}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>

        <div className={styles.frame1}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>
    </div>
    <>
    <div className={style.uploadButton}>
            <button className={style.button}>Upload Here 
                <input
                  type="file"
                  className={style.uploadFile}
                  accept="image/*"
                  onChange={(e) => handleUpload(e)}
                />
              </button>

              
            </div>
    </>
</div>
  )
}

export default Grille;
