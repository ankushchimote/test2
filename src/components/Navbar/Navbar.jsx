import React from 'react'
import styles from "./Navbar.module.css"
import { RxAvatar } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

function Navbar() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.cont1}>
       <div >
        <button type='button' className={styles.patient}>
          Patient<FaAngleDown className={styles.dwn}/>
        </button>
       </div>
        <div >
          <input type="search" placeholder='Search...'className={styles.inputSearch} />
        </div>
          <span className={styles.magni}><SlMagnifier /></span>
          <button type='button' className={styles.add}> + Add New</button>
         <div className={styles.notify}>
             <IoIosNotifications  className={styles.bale}/>
            <RxAvatar className={styles.avat}/>
            
         </div>
      </div>
    </div>
    </>
  )
}

export default Navbar

