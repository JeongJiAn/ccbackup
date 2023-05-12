import React from 'react';
import Chart from './Dashboard_Chart';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../assets/css/Dashboard/Dashboard.module.css';

const Dashboard = () => {
    return(
        <div className={styles.dashboard_wrapper}>
            <Header />
            <div className={styles.dashboard_block_wrapper}>
                <Sidebar currentPage="dashboard"/>
                <div className={styles.dashboard_block}>
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;