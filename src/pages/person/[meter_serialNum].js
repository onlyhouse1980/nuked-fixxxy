import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import VideoBg from '../../components/VideoBg'
import Zoom from 'react-reveal/Zoom';

import { MDBBtn } from 'mdbreact';

<div suppressHydrationWarning={true}>
    { process.browser }
    </div>
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

export default function Person() {
  
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.meter_serialNum && `/api/people/${query.meter_serialNum}`,
    fetcher
  )
  if (error) return <div><p>Serial number not found. Please review <a href="/howtoreadmeter.pdf"><b>How to read your meter</b></a></p></div>
  if (!data) return <div>Loading...</div>

    function sayHi() {
              
      let info1 = parseInt(document.getElementById("info1").value);
      let info2 = parseInt(document.getElementById("info2").value);
      var Answer = document.getElementById("Answer");
        Answer.value = info1 - info2;
      }
    function moreInfo(props) {
      let info1 = parseInt(document.getElementById("info1").value);
      let info2 = parseInt(document.getElementById("info2").value);
      var Answer = document.getElementById("Percent");
        Answer.value = '%' + (((info1 - info2) / 6000 )*100).toFixed(2);
      }
        
    
  return ( 
    
  <>
    <Zoom top cascade>
    
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th2}><h4><span>Meter Serial # </span><br /></h4></th>
          <th className={styles.th2}><h4><span>{data.meter_serialNum}</span></h4></th>
        </tr>
        
      </thead>
      <tbody>
        
        <tr>
          <td className={styles.th}><p className={styles.p}>Enter reading from your meter in the box to the right.<br />(digits only - no, seperator eg. 1536987)<br /><br /> Then click the calculate button below that.*</p></td>
          <td className={styles.thInput}><input style={{
            backgroundColor: bgColors.Cyan }} type="text" id="info1" label="your reading" placeholder="Enter Your Reading" name="uInput"></input><br /><MDBBtn gradient="blue" onClick={() => {
            sayHi()
            moreInfo()
          }}
          
                 >Calculate</MDBBtn></td>
        </tr>
        <tr>
          <td className={styles.td3}>
          <p className={styles.p}></p>
          <p className={styles.p}>Last reading by Vendor - December 3rd, 2021</p>
          </td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}} 
              type="text" 
              id="info2" 
              label="December 3rd, 2021" 
              value={data.dec03_21} 
              readOnly />
            </td>
        </tr>
        <tr>
        <td className={styles.td3}><p className={styles.p}>Gallons used since December 3rd 2021.</p></td>
        <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="Answer" 
            label="answers" 
            readOnly>
          </input>
        </td>
        </tr>
        <tr>
          <td className={styles.td3}><p className={styles.p}>Total gallons used this billing period, last year.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="lastYear"
            value={data.dec10_20-data.oct07_20} 
            label="answers" 
            readOnly>
          </input>
          </td>
        </tr>
        
        <tr>
          <td className={styles.td3} function person>
          
          <p className={styles.p}>Percentage of two months allotment (6,000 gallons) used.<br /></p>
          </td>  
          <td className={styles.td3}>
            
            
          <input style={{
            backgroundColor: bgColors.Blue}} type="text" id="Percent" label="answers"  readOnly
            >
              
              </input> 
          
                  
                 
                 
          </td>
        </tr>
        <tr>
          <td className={styles.h5head}>
          <h5>*If you are having problems with the<br />form, we recommend reading "<a href="/howtoreadmeter.pdf">How to read your meter?</a>" </h5>
          
          </td>
          <td className={styles.td0}>
          
          </td>
        </tr>
      </tbody>
    </table>
    

    </Zoom>

<VideoBg />


  


<style jsx>{`
        
        a {
          color: teal;
        }
      `}</style>
      </>
)};
