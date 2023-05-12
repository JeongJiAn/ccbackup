import React from 'react';
import styles from '../../assets/css/Bin/Bin_Filelist.module.css';
import RestoreIcon from '../../assets/image/restoreicon.png';
import DeleteIcon from '../../assets/image/deleteicon.png';

const FileListHeader = () => {
    return(
        <div className={styles.filelist_header_wrapper}>
            <div className={styles.header_directory_title_wrapper}>
                Bin
            </div>
            <div className={styles.header_button_wrapper}>
                <button
                    className={styles.header_button}>
                    <div className={styles.header_button_image_wrapper}>
                        <img src={RestoreIcon} className={styles.header_button_image}/>
                    </div>
                    <div className={styles.header_button_title_wrapper}>
                        Restore
                    </div>
                </button>
                <button
                    className={styles.header_button}>
                    <div className={styles.header_button_image_wrapper}>
                        <img src={DeleteIcon} className={styles.header_button_image} />
                    </div>
                    <div className={styles.header_button_title_wrapper}>
                        Delete
                    </div>
                </button>
            </div>
        </div>
    )
}

const FileList = () => {
    return(
        <div className={styles.filelist_wrapper}>
            <FileListHeader />
        </div>
    )
}

export default FileList;