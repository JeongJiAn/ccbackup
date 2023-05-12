import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FileList from './Bin_Filelist';
import FileInfo from './Bin_Fileinfo';
import styles from '../../assets/css/Bin/Bin.module.css';

const Bin = () => {
    return(
        <div className={styles.bin_wrapper}>
            <Header />
            <div className={styles.bin_block_wrapper}>
                <Sidebar currentPage="bin"/>
                <div className={styles.bin_block}>
                    <FileList />
                    <FileInfo />
                </div>
            </div>
        </div>
    )
}

export default Bin;