import React from 'react'
import styles from "./Consultants.module.css"
import { IoIosPeople } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

function Consultants() {
  return (
    <>
    <div className={styles.container1}>
    <IoIosPeople className={styles.icon1}/> <span className={styles.name1}>Consultants</span>
    </div>

    <div className={styles.container2}>
      <span className={styles.fiter}>Filter</span>
      <button type='button' className={styles.range}> <span className={styles.sRange}>Select Range <FaAngleDown className={styles.down}/></span></button>
      <input type="radio" className={styles.radio}/><span className={styles.text2}>Summary</span>
      <input type="radio" className={styles.radio}/><span className={styles.text2}>Branch Wise</span>
    </div>
    </>
  )
}

export default Consultants