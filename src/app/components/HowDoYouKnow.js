"use client"
import styles from './know.module.css';
import { FaBars } from 'react-icons/fa';

import { SiBlockchaindotcom } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { FaUserShield } from "react-icons/fa";
import { GrDocumentStore } from "react-icons/gr";

import { MdOutlineCreditScore } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";


export default function HowDoYouKnow() {
  return (
    <section className={styles.howSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
        One-stop for on-chain credit analytics
        </h2>
        {/*
          <p className={styles.subtitle}>We take care of storing your valuable documents</p>
        */}
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <MdOutlineCreditScore 
              style={{ fontSize:"50px", color:"green",
                textAlign:"center", marginLeft:"80px",marginBottom:"9px"}}
            />
            
         
            {/* <img src="/images/icon1.svg" alt="Icon 1" className={styles.icon} /> */}
            <h3 className={styles.cardTitle}>Credit Scoring</h3>
            <p className={styles.cardDescription}>
              The Cred Score quantifies probabilty of loan liquidation, 
              default or delinquency, but even 
              addresses without borrowing activity can be scored.
            </p>
          </div>
          <div className={styles.card}>
            <TbReport 
              style={{ fontSize: "50px", color:"green",
                textAlign: "center", marginLeft: "80px", marginBottom:"9px"}} />
            {/* <img src="/images/icon2.svg" alt="Icon 2" className={styles.icon} /> */}
            <h3 className={styles.cardTitle}>Credit Reporting
            </h3>
            <p className={styles.cardDescription}>
              Cred's Reports describe wallet composition across asset type, chain and protocol 
              and summarizes key lending data points including debt-to-collateral ratio.
            </p>
          </div>
          <div className={styles.card}>
            {/* <img src="/images/icon3.svg" alt="Icon 3" className={styles.icon} /> */}
            <MdMonitorHeart  style={{ fontSize: "50px", color:"green",
              textAlign: "center", marginLeft: "70px", marginBottom:'9px'}} />
            <h3 className={styles.cardTitle}>Credit Monitoring</h3>
            <p className={styles.cardDescription}>
              Get realtime updates from the latest block to stay informed about critial 
              credit events including large transactions and transfers.
            </p>
          </div>
          {/*
            <div className={styles.card}>
            <img src="/images/icon3.svg" alt="Icon 3" className={styles.icon} /> 
            <GrDocumentStore style={{ 
              fontSize: "50px", textAlign: "center", 
              marginLeft: "70px", marginBottom:'9px'}} 
            />
            <h3 className={styles.cardTitle}>Digital Credentialing</h3>
            <p className={styles.cardDescription}>
              Put trust on autopilot with secure digital verification
            </p>
          </div>
          */}
          
        </div>
      </div>
    </section>
  );
}

