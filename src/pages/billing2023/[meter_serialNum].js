import { useRouter } from "next/router";
import useSWR from "swr";
import styles from '../over/[last_name].module.css'
import Zoom from "react-reveal/Zoom";
import React, { useState } from "react";

import { MDBBtn } from "mdbreact";

<div suppressHydrationWarning={true}>{process.browser}</div>;
var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42",
};
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Response not ok');
  }
  const data = await res.json();
  return data;
};

export default function Person() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.meter_serialNum && `/api/people/${query.meter_serialNum}`,
    fetcher
  );
  if (error)
    return (
      <div>
        <p>
          Serial number not found. Please review{" "}
          <a href="/howtoreadmeter.pdf">
            <b>How to read your meter</b>
          </a>
        </p>
      </div>
    );
  if (!data) return <div>Loading...</div>;
    
  
  const arr =[ data ]

  console.log(arr.length)

return(

// END OF FUNCTIONS BEGINNING OF PAGE DESIGN

  <main style={{width: '100vw', height: '100vh', width: '100%' , marginTop:'10px', marginLeft:'0px', marginBottom:'100px', paddingBottom: '50px'}}>
  <Zoom top cascade>
    <div className={styles.title}>
      <h1 className={styles.pageheader}>👤 <em>{data.last_name}</em></h1>
    </div>
    <div>
      {/* CUSTOMER INFO TABLE */}
      <table className={styles.table}>
        <thead>
          <tr style={{ fontWeight:'900', fontSize:'30' }} className={styles.th2}>
            <td>
              <p style={{ fontWeight:'900' }} className={styles.th2}>Mtr Sr Nr</p> 
            </td>
            <td>
              <p style={{ fontWeight:'900' }} className={styles.th2}>#{data.meter_serialNum}</p>
            </td>
          </tr>
        </thead>
      </table>

      {/* START NEW FEE TABLE HEADER */}
      <table>
        <thead>
          <tr>
            < td className={styles.td3}>
              <p className={styles.newFee}>Billing late 2023</p>
            </td>
          </tr>

          <tr className={styles.th2}>
            <td className={styles.newFee}></td>
            <td className={styles.newFee}>Gal Used</td>
            {/* <td className={styles.newFee}>Remaining<br></br>(of 48,000)</td> */}
          </tr>
        </thead>

        {/* START NEW FEE DATA */}
        <tbody>

{/* OCTOBER 2023 */}

<tr>
            <td className={styles.td3}><p className={styles.p}>Oct 2023</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/06/23-12/06/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="Oct2023"
                  value={ data.dec05_23 - data.oct05_23 }  
                  label="answers"
                  readOnly>
              </input>
            </td>
            
          </tr>

{/* AUGUST 2023 */}

<tr>
            <td className={styles.td3}><p className={styles.p}>Aug 2023</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(8/2/23-10/06/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="Aug2023"
                  value={ data.oct05_23 -data.aug02_23 }  
                  label="answers"
                  readOnly>
              </input>
            </td>
            
          </tr>

{/* JUNE 2023 */}

<tr>
            <td className={styles.td3}><p className={styles.p}>Jun 2023</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(6/5/23-8/2/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="June2023"
                  value={data.aug02_23 - data.jun05_23 }  
                  label="answers"
                  readOnly>
              </input>
            </td>
            
          </tr>

{/* APRIL 2023 */}

        <tr>
            <td className={styles.td3}><p className={styles.p}>Apr 2023</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(4/6/23-6/5/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="April2023"
                  value={data.jun05_23 - data.apr06_23}  
                  label="answers"
                  readOnly>
              </input>
            </td>
            {/* <td className={styles.td3}>
                {afterApril()}
            </td> */}
          </tr>

        {/* FEBRUARY 2023 */}
        <tr>
            <td className={styles.td3}><p className={styles.p}>Feb 2023</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(2/4/23-4/6/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="February2023"
                  value={data.apr06_23 - data.feb04_23 }  
                  label="answers"
                  readOnly>
              </input>
            </td>
            {/* <td className={styles.td3}>
                {afterFebruary()}
            </td> */}
          </tr>

          {/* DECEMBER 2022 */}
          <tr>
            <td className={styles.td3}><p className={styles.p}>Dec 2022</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(12/10/22-2/4/23)</p>
            </td>
            <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="December2022"
                  value={data.feb04_23 - data.dec09_22}  
                  label="answers"
                  readOnly>
              </input>
            </td>
            {/* <td className={styles.td3}>
                {afterDecember()}
            </td> */}
          </tr>
          <React.StrictMode>
          {/* OCTOBER 2022 */}
          <tr>
            <td className={styles.td3}><p className={styles.p}>Oct 2022</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/7/22-12/9/22)</p></td>
            <td className={styles.td3}> 
            <input style={{
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }}
                type="text"
                name="utilized"
                id="October2022"
                value={data.dec09_22 - data.oct07_22}  
                label="answers"
                readOnly>
            </input>
            </td>
            {/* <td className={styles.td3}>
              {afterOctober()}
            </td> */}
          </tr>
          </React.StrictMode>
          {/* AUGUST 2022 */}
          <tr>
            <td className={styles.td3}><p className={styles.p}>Aug 2022</p>
              <p style={{ whiteSpace:'nowrap',  fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(8/5/22-10/7/22)</p></td>
            <td className={styles.td3}>
            <input style={{
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }}
                type="text"
                name="utilized"
                id="August2022"
                value={data.oct07_22 - data.aug05_22}
                label="answers"
                readOnly>
            </input>
            </td>
            {/* <td className={styles.td3}>
              {afterAugust()}
            </td> */}
          </tr>

          {/* JUNE 2022 */}
          <tr>
            <td className={styles.td3}><p className={styles.p}>Jun 2022</p>
              <p style={{ whiteSpace:'nowrap', fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(6/7/22-8/5/22)</p></td>
            <td className={styles.td3}>
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="June2022"
                  value={data.aug05_22 - data.jun07_22 }
                  label="answers">
              </input>
            </td>
            {/* <td className={styles.td3}>
              {afterJune()}
            </td> */}
          </tr>

          {/* YEAR TOTAL */}
          {/* <tr>
            <td className={styles.td3}>
              <p className={styles.yearTotal}>Year Total</p>
            </td>
            <td className={styles.td3}>
              <input style={{ fontStyle: 'italic', fontWeight: 'bold', backgroundColor: bgColors.Blue, margin: '0 10px 0 10px', width: '75px', }} type="text" name="utilized" id="yearTotal" value={data.year_total} label="answers" readOnly></input>
            </td>
          </tr> */}

          {/* NEW BILLING CHARGES AND FEES */}
          {/* <tr>
            <td className={styles.td3}><p className={styles.p}>Charges/Fees</p>
              <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(6/7/22-6/6/23)</p>
            </td>
            <td className={styles.td3}>
              {data.fees}
            </td>
          </tr> */}
        </tbody>
      </table>

      
    
    </div>
     
  </Zoom>  
</main> 

)

}
