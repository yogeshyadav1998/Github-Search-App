import React from 'react';
import axios from 'axios';
import styles from  "./../styles/Row.module.css";
import Particles from 'react-particles-js';
import Header from '../components/header';
import { Card } from 'antd';
const { Meta } = Card;


const row = (props) => {
    return (
        <div className="page-container">
            <Particles
            params={{
                particles:{
                  number:{
                    value:30,
                    density:{
                      enable:true,
                      value_area:900
                    }
                  },
                  shape:{
                    type: "circle",
                    stroke:{
                      width: 5,
                      color:"rgb(201, 83, 47)" 
                    }
                  }
                }
              }}
            />
            <div className={styles.repoOfWeek}>
                <Header/>
                <h1 className={styles.mainHeading}>Repository Of The Week</h1>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                >
                    <Meta title={props.repo.name} description={props.repo.full_name} />
                </Card>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext =>{
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    const res = await axios.get('https://api.github.com/search/repositories?q=created:">2021-03-28"&sort=stars&order=desc');
    const repo = res.data.items[0];

    return {
        props: {
            repo
        }
    }

}

export default row;
