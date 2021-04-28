import React from 'react';
import styles from '../styles/Header.module.css';
import {useRouter} from 'next/router';

export const header = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <div onClick={()=> router.push('/')}>Home</div>
            <div onClick={()=> router.push('/sorter')}>Sorter</div>
            <div onClick={()=> router.push('/row')}>RoW</div>
        </div>
    )
}

export default header;
