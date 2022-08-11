import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../over/[last_name].module.css'
// import styles from '../../styles/globals.css'
// import Zoom from 'react-reveal';
import * as React from 'react';

import BGBlack from '../../components/BGBlack';



var bgColors = { "Default": "#81b71a",
"Blue": "#00B1E1",
"Cyan": "#37BC9B",
"Green": "#8CC152",
"Red": "#E9573F",
"Yellow": "#F6BB42",
};
const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data 
}

export default function Countdown() {
    const { useState } = React;
    
    const { query } = useRouter()
    const { data, error } = useSWR(
      () => query.last_name && `/api/overuse/${query.last_name}`,
      fetcher
    )
  
    if (error) return <div>Last Name not found. </div>
    if (!data) return <div>Loading...</div>
  
  
      
      function moreInfo(props) {
        let info1 = parseInt(document.getElementById("info1").value);
        let info2 = parseInt(document.getElementById("info2").value);
        var Answer = document.getElementById("Percent");
          Answer.value = (((info1 - info2) / 6000 ) * 1).toFixed(2);
        }

        function galOverJune22() {
            if ((data.aug05_22 - data.jun07_22 )>8000) {
              return <input style={{
                      backgroundColor: bgColors.Blue,
                      margin: '0 10px 0 10px',
                      width: '75px',
                    }}
                type="text" 
                
                name="utilized" 
                id="apr22Over"
                value={(data.aug05_22 - data.jun07_22 )-8000}   
                label="galOver" 
                readOnly>
              </input>;
            } else {
              return <input style={{
                      backgroundColor: bgColors.Blue,
                      margin: '0 10px 0 10px',
                      width: '75px',
                    }}
                type="text" 
                
                name="utilized" 
                id="apr22Over"
                value="0"   
                label="galOver" 
                readOnly>
              </input>}}
          
          


function remainingJune() {
  let a = data.aug05_22 - data.jun07_22 
    let rmn = (48000-a)
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTJune2022"
        value= {rmn} 
        label="results" 
        readOnly>
      </input>;}
              return(
                <main style={{width: '100vw', height: '100vh', width: '100%' , marginTop:'10px', marginLeft:'0px', marginBottom:'100px', paddingBottom: '50px'}}>
  
      
        {/* <Zoom top cascade> */}
          <div className={styles.title}>
          <h1 className={styles.pageheader}>👤 <em>{data.last_name}</em></h1>
          </div>
          <table className={styles.table}>
            <thead>
              <tr style={{ fontWeight:'900', fontSize:'30' }} className={styles.th2}>
                <td>
                <p style={{ fontWeight:'900' }} className={styles.th2}>Mtr Sr Nr</p> 
                </td>
                <td>
                <p style={{ fontWeight:'900' }} className={styles.th2}>#{data.meter_serialNum}</p>
                </td>
                <td>
                
                </td>
              </tr>
              <tr className={styles.th2}>
                <td>Billing Period</td>
                <td>Gal Used</td>
                <td>Gal Rmn</td>
                
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td className={styles.td3}><p className={styles.p}>June 2022</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', paddingTop: '-10px' }}>(06/22-08/22)</p>
                </td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="June2022"
                    value={data.aug05_22 - data.jun07_22}
                    label="answers"
                    readOnly>

                  </input>
                </td>
                
                <td className={styles.td3}>
                {remainingJune()}
                </td>
                
                </tr>
                
          
          </tbody>
        </table>


      {

    

 <BGBlack /> 
    
      }</main>
    )}