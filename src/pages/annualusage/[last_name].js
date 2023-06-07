import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../over/[last_name].module.css'
// import styles from '../../styles/globals.css'
import Zoom from 'react-reveal';
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




export default function Over() {
  const { useState } = React;
  
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.last_name && `/api/annualuse/${query.last_name}`,
    fetcher
  )

  if (error) return <div>Last Name not found. </div>
  if (!data) return <div>Loading...</div>

  
  const arr =[ data ]
console.log(arr.length)



    function moreInfo(props) {
      let info1 = parseInt(document.getElementById("info1").value);
      let info2 = parseInt(document.getElementById("info2").value);
      var Answer = document.getElementById("Percent");
        Answer.value = (((info1 - info2) / 6000 ) * 1).toFixed(2);
      }

      function afterApril() {
        let a = data.budget
                    let b = data.jun_22
                    let c = data.aug_22
                    let d = data.oct_22
                    let e = data.dec_22
                    let f = data.feb_23
                    let g = data.apr_23
                    let rmn = ( a - b - c - d - e - f - g )
      
        if(rmn < 0) {
      
          return <input style={{
            color: 'red',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
      </input>
      
        } else {
          return <input style={{
            color: 'black',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
      </input>
        }
           }


      function afterFebruary() {
        let a = data.budget
        let b = data.jun_22
        let c = data.aug_22
        let d = data.oct_22
        let e = data.dec_22
        let f = data.feb_23
        
        let rmn = ( a - b - c - d - e - f  )
      
        if(rmn < 0) {
      
          return <input style={{
            color: 'red',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
      </input>
      
        } else {
          return <input style={{
            color: 'black',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
      </input>
        }
           }

           function afterDecember() {
            let a = data.budget
            let b = data.jun_22
            let c = data.aug_22
            let d = data.oct_22
            let e = data.dec_22
            let rmn = ( a - b - c - d - e )
          
            if(rmn < 0) {
          
              return <input style={{
                color: 'red',
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }} 
                    type="number" 
                    name="utilized" 
                    id="yearOver"
                    value={ rmn }   
                    label="galOver" 
              readOnly>
          </input>
          
            } else {
              return <input style={{
                color: 'black',
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }} 
                    type="number" 
                    name="utilized" 
                    id="yearOver"
                    value={ rmn }   
                    label="galOver" 
              readOnly>
          </input>
            }
               }

               function afterOctober() {
                let a = data.budget
                    let b = data.jun_22
                    let c = data.aug_22
                    let d = data.oct_22
                    let rmn = ( a - b - c - d )
                if(rmn < 0) {
                    return <input style={{
                    color: 'red',
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }} 
                        type="number" 
                        name="utilized" 
                        id="yearOver"
                        value={ rmn }   
                        label="galOver" 
                  readOnly>
              </input>
              
                } else {
                  return <input style={{
                    color: 'black',
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }} 
                        type="number" 
                        name="utilized" 
                        id="yearOver"
                        value={ rmn }   
                        label="galOver" 
                  readOnly>
              </input>
                }
                   }

                   function afterAugust() {
                    let a = data.budget
                    let b = data.jun_22
                    let c = data.aug_22
        
        let rmn = ( a - b - c )
                    if(rmn < 0) {
                  
                      return <input style={{
                        color: 'red',
                        backgroundColor: bgColors.Blue,
                        margin: '0 10px 0 10px',
                        width: '75px',
                      }} 
                            type="number" 
                            name="utilized" 
                            id="yearOver"
                            value={ rmn }   
                            label="galOver" 
                      readOnly>
                  </input>
                  
                    } else {
                      return <input style={{
                        color: 'black',
                        backgroundColor: bgColors.Blue,
                        margin: '0 10px 0 10px',
                        width: '75px',
                      }} 
                            type="number" 
                            name="utilized" 
                            id="yearOver"
                            value={ rmn }   
                            label="galOver" 
                      readOnly>
                  </input>
                    }
                       }


      function afterJune() {
        let a = data.budget
        let b = data.jun_22
        
        let rmn = ( a - b)

        if(rmn < 0) {
      
          return <input style={{
            color: 'red',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
    </input>

        } else {
          return <input style={{
            color: 'black',
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }} 
                type="number" 
                name="utilized" 
                id="yearOver"
                value={ rmn }   
                label="galOver" 
          readOnly>
    </input>
        }
           }

     return (


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
                <p className={styles.newFee}>New Fee Structure</p>
              </td>
            </tr>

            <tr className={styles.th2}>
              <td className={styles.newFee}>Billing Period</td>
              <td className={styles.newFee}>Gal Used</td>
              <td className={styles.newFee}>Remaining<br></br>(of 48,000)</td>
            </tr>
          </thead>

          {/* START NEW FEE DATA */}
          <tbody>
          
{/* APRIL 2023 */}

          <tr>
              <td className={styles.td3}><p className={styles.p}>Apr 2023</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(04/06 - 06/06)</p>
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
                    value={data.apr_23}  
                    label="answers"
                    readOnly>
                </input>
              </td>
              <td className={styles.td3}>
                  {afterApril()}
              </td>
            </tr>

          {/* FEBRUARY 2023 */}
          <tr>
              <td className={styles.td3}><p className={styles.p}>Feb 2023</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(02/04 - 04/06)</p>
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
                    value={data.feb_23}  
                    label="answers"
                    readOnly>
                </input>
              </td>
              <td className={styles.td3}>
                  {afterFebruary()}
              </td>
            </tr>

            {/* DECEMBER 2022 */}
            <tr>
              <td className={styles.td3}><p className={styles.p}>Dec 2022</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(12/10-02/04)</p>
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
                    value={data.dec_22}  
                    label="answers"
                    readOnly>
                </input>
              </td>
              <td className={styles.td3}>
                  {afterDecember()}
              </td>
            </tr>
            <React.StrictMode>
            {/* OCTOBER 2022 */}
            <tr>
              <td className={styles.td3}><p className={styles.p}>Oct 2022</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/07-12/09)</p></td>
              <td className={styles.td3}> 
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="October2022"
                  value={data.oct_22 }  
                  label="answers"
                  readOnly>
              </input>
              </td>
              <td className={styles.td3}>
                {afterOctober()}
              </td>
            </tr>
            </React.StrictMode>
            {/* AUGUST 2022 */}
            <tr>
              <td className={styles.td3}><p className={styles.p}>Aug 2022</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(8/05-10/07)</p></td>
              <td className={styles.td3}>
              <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                  type="text"
                  name="utilized"
                  id="August2022"
                  value={data.aug_22}
                  label="answers"
                  readOnly>
              </input>
              </td>
              <td className={styles.td3}>
                {afterAugust()}
              </td>
            </tr>

            {/* JUNE 2022 */}
            <tr>
              <td className={styles.td3}><p className={styles.p}>Jun 2022</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(6/07-8/05)</p></td>
              <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="June2022"
                    value={data.jun_22 }
                    label="answers">
                </input>
              </td>
              <td className={styles.td3}>
                {afterJune()}
              </td>
            </tr>

            {/* YEAR TOTAL */}
            <tr>
              <td className={styles.td3}>
                <p className={styles.yearTotal}>Year Total</p>
              </td>
              <td className={styles.td3}>
                <input style={{ fontStyle: 'italic', fontWeight: 'bold', backgroundColor: bgColors.Blue, margin: '0 10px 0 10px', width: '75px', }} type="text" name="utilized" id="yearTotal" value={data.year_total} label="answers" readOnly></input>
              </td>
            </tr>

            {/* NEW BILLING CHARGES AND FEES */}
            <tr>
              <td className={styles.td3}><p className={styles.p}>Charges/Fees</p>
                <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(6/7/22-6/6/23)</p>
              </td>
              <td className={styles.td3}>
                {data.fees}
              </td>
            </tr>
          </tbody>
        </table>

        
      
      </div>
      <BGBlack /> 
    </Zoom>  
  </main> )}
