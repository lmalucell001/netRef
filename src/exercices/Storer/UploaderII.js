import React from 'react'
import styles from './UploaderII.module.css'
const Upload = () => {
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
      <>
        <div
          onDragEnter={(e) => handleEnter(e)}
          onDragLeave={(e) => handleLeave(e)}
          onDragOver={(e) => handleOver(e)}
          onDrop={(e) => handleUpload(e)}
          
          className={styles.upload}
          style={{ backgroundImage: `url(${preview})` }}
        >
          <form class="my-form">
            {!drop && (
                   <p>Drag and Drop image here</p>
            )}
       
            <div className={styles.uploadButton}>
            <button className={styles.button}>Upload Here 
                <input
                  type="file"
                  className={styles.uploadFile}
                  accept="image/*"
                  onChange={(e) => handleUpload(e)}
                />
              </button>

              
            </div>
          </form>
        </div>
      </>
    );
  };
  export default Upload

  