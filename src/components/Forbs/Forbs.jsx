import React from 'react'
import styles from "./Forbs.module.css"
import { IoIosPeople } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";

function Forb() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.box1}>
            <div className={styles.text}>
                <h4>Consultant Count</h4>
                <p className={styles.pp}>90/900</p>
                <p>Today/Period</p>
            </div>
                <IoIosPeople className={styles.crkle1} />
        </div>
        <div className={styles.box2}>
        <div className={styles.text}>
                <h4>Consultations</h4>
                <p className={styles.pp}>90/900</p>
                <p>Today/Period</p>
            </div>
                <FaFileWaveform className={styles.crkle2} />

        </div>
        <div className={styles.box3}>
        <div className={styles.text}>
                <h4>Labs</h4>
                <p className={styles.pp}>90/900</p>
                <p>Today/Period</p>
            </div>
                <FaMoneyBill className={styles.crkle3} />

        </div>
        <div className={styles.box4}>
        <div className={styles.text}>
                <h4>DietPlans</h4>
                <p className={styles.pp}>90/900</p>
                <p>Today/Period</p>
            </div>
                <FaMoneyCheckDollar className={styles.crkle4} />

        </div>
    </div>

    </>
  )
}

export default Forb