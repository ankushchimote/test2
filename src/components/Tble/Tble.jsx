import React from 'react'
import styles from "./Tble.module.css"
import { RiArrowGoForwardFill } from "react-icons/ri";
import { IoArrowDown } from "react-icons/io5";

function Tble() {
  return (
    <>
    <div className={styles.container}>
        
        <div className={styles.back}>
          <h4 className={styles.h3}>Consultants</h4>
          <RiArrowGoForwardFill className={styles.icon1}/>
          <IoArrowDown className={styles.icon2}/>
          </div>

        <div>
        <table>
  <thead>
    <tr>
      <th>NAME</th>
      <th>PATIENT COUNT</th>
      <th>LABS</th>
      <th>DIET PLAN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Smith</td>
      <td>12</td>
      <td>34</td>
      <td>56</td>
    </tr>
    <tr>
      <td>Rahul Dravid</td>
      <td>78</td>
      <td>45</td>
      <td>98</td>
    </tr>
    <tr>
      <td>John Cena</td>
      <td>32</td>
      <td>16</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Rohit Sharma</td>
      <td>65</td>
      <td>23</td>
      <td>37</td>
    </tr>
    <tr>
      <td>Paul Walker</td>
      <td>63</td>
      <td>66</td>
      <td>78</td>
    </tr>
    <tr>
      <td>Realme 5</td>
      <td>64</td>
      <td>12</td>
      <td>94</td>
    </tr>
    
    
  </tbody>
</table>
        </div>
    </div>
    </>
  )
}

export default Tble




