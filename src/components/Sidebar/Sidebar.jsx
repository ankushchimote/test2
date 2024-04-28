import React from 'react'
import styles from "./Sidebar.module.css"
import { RxAvatar } from "react-icons/rx";
import { GiDatabase } from "react-icons/gi";
import { BsFunnel } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiReacthookform } from "react-icons/si";
import { HiOutlineEyeDropper } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa6";

function Sidebar() {
  return (

    <>
    <div className={styles.container}>
    
    <div className={styles.cont1}>
    <span className={styles.text}><b>Dashboard</b></span>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><RxAvatar/></span>
  <span className={styles.text1}>Patients</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><GiDatabase/></span>
  <span className={styles.text1}>HR</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><BsFunnel/></span>
  <span className={styles.text1}>Labs</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><GiShop/></span>
  <span className={styles.text1}>Pharma</span>
</button>
    </div>

    <div className={styles.cont1}>
    <span className={styles.text}><b>Processes</b></span>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><IoNewspaperOutline/></span>
  <span className={styles.text1}>Registration</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><SiReacthookform/></span>
  <span className={styles.text1}>Consultation</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><HiOutlineEyeDropper/></span>
  <span className={styles.text1}>Test & Report</span>
</button>
    <button className={styles.iconbutton}>
  <span className={styles.icon}><FaMoneyBillWave/></span>
  <span className={styles.text1}>Billing</span>
</button>
    </div>
    
    </div>
    </>
  )
}

export default Sidebar