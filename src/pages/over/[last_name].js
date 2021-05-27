import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import VideoBg from '../../components/VideoBg'
import Zoom from 'react-reveal/Zoom';
import * as React from 'react';



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

export default function Over() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.last_name && `/api/overuse/${query.last_name}`,
    fetcher
  )
  if (error) return <div><p>Last Name not found. </p></div>
  if (!data) return <div>Loading...</div>
  
  
  
    
     
    function moreInfo(props) {
      let info1 = parseInt(document.getElementById("info1").value);
      let info2 = parseInt(document.getElementById("info2").value);
      var Answer = document.getElementById("Percent");
        Answer.value = (((info1 - info2) / 6000 ) * 1).toFixed(2);
      }
    function galOverApril() {
      if ((data.jun10_20-data.apr05_20)>6000) {
        return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="aprilUsed" 
          id="aprOver"
          value={(data.jun10_20-data.apr05_20)-6000}    
          readOnly>
        </input>;
      } else {
        return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="aprilUsed" 
          id="aprOver"
          value="0"    
          readOnly>
        </input>}}

    function galOverAprilFees() {
      let x = data.jun10_20-data.apr05_20
        if (x>6000 && x<10000) {
          return <input style={{backgroundColor: bgColors.Blue}} 
            type="number"
            name="greaterThan" 
            id="gTJune2020"
            value= {(((x)-6000)*.005).toFixed(2)}
            label="results" 
            readOnly>
          </input>;
        } else if (x>10000 && x<20000) {
          return <input style={{
              backgroundColor: bgColors.Blue}}
              type="number" 
              name="greaterThan" 
              id="gTJune2020t1"
              value={(((x-10000)*.01)+19.99).toFixed(2)}
              label="results" 
              readOnly>
          </input>;
          } else if (x>20000) {
            return <input style={{
                backgroundColor: bgColors.Blue}}
                type="number" 
                name="greaterThan" 
                id="gTJune2020t2"
                value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                label="results" 
                readOnly>
            </input>;
      } else {
        <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            name="aprGOver" 
            id="gTApril2020"
            value="0" 
            readOnly>
        </input>}}
      
      function galOverJune() {
        if ((data.aug10_20-data.jun10_20)>6000) {
          return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            min="0"
            name="utilized" 
            id="junOver"
            value={(data.aug10_20-data.jun10_20)-6000}   
            label="galOver" 
            readOnly>
          </input>;
        } else {
          return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            min="0"
            name="utilized" 
            id="junOver"
            value="0"   
            label="galOver" 
            readOnly>
          </input>}}
  
      function galOverJuneFees() {
        let x = data.aug10_20-data.jun10_20
          if (x>6000 && x<10000) {
            return <input style={{backgroundColor: bgColors.Blue}} 
              type="number"
              name="greaterThan" 
              id="gTJune2020"
              value= {(((x)-6000)*.005).toFixed(2)} 
              label="results" 
              readOnly>
            </input>;
          } else if (x>10000 && x<20000) {
            return <input style={{
                backgroundColor: bgColors.Blue}}
                type="number" 
                name="greaterThan" 
                id="gTJune2020t1"
                value={(((x-10000)*.01)+19.99).toFixed(2)}
                label="results" 
                readOnly>
            </input>;
            } else if (x>20000) {
              return <input style={{
                  backgroundColor: bgColors.Blue}}
                  type="number" 
                  name="greaterThan" 
                  id="gTJune2020t2"
                  value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                  label="results" 
                  readOnly>
              </input>;
        } else {
          <input style={{
              backgroundColor: bgColors.Blue}}
              type="number" 
              name="greaterThan" 
              id="gTJune2020"
              value="0"
              label="results" 
              readOnly>
          </input>}}

function galOverAugust() {
  if ((data.aug10_20-data.jun10_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="augOver"
      value={(data.oct07_20-data.aug10_20) - 6000}   
      label="galOver" 
      readOnly>
    </input>;
  } else {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="augOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverAugustFees() {
  let x = data.oct07_20-data.aug10_20
    if (x>6000 && x<10000) {
      return <input style={{backgroundColor: bgColors.Blue}} 
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
        backgroundColor: bgColors.Blue}}
        type="number" 
        name="greaterThan" 
        id="gTAugust2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

function galOverOctober() {
  if ((data.dec10_20-data.oct07_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="octOver"
      value={(data.dec10_20-data.oct07_20)-6000}   
      label="galOver" 
      readOnly>
    </input>;
  } else {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="octOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverOctoberFees() {
  let x = data.dec10_20-data.oct07_20
    if (x>6000 && x<10000) {
      return <input style={{backgroundColor: bgColors.Blue}} 
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
        backgroundColor: bgColors.Blue}}
        type="number" 
        name="greaterThan" 
        id="gTOctober2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

function galOverDecember() {
  if ((data.feb19_21-data.dec10_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="decOver"
      value={(data.feb19_21-data.dec10_20)-6000}   
      label="galOver" 
      readOnly>
    </input>;
  } else {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="decOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverDecemberFees() {
  let x = data.feb19_21-data.dec10_20
    if (x>6000 && x<10000) {
      return <input style={{backgroundColor: bgColors.Blue}} 
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
        backgroundColor: bgColors.Blue}}
        type="number" 
        name="greaterThan" 
        id="gTDecember2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

function galOverFebruary() {
  if ((data.apr05_21-data.feb19_21)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="febOver"
      value={(data.apr05_21-data.feb19_21)-6000}   
      label="galOver" 
      readOnly>
    </input>;
  } else {
    return <input style={{
      backgroundColor: bgColors.Blue}}
      type="number" 
      min="0"
      name="utilized" 
      id="febOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverFebruaryFees() {
  let x = data.apr05_21-data.feb19_21
    if (x>6000 && x<10000) {
      return <input style={{backgroundColor: bgColors.Blue}} 
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
          backgroundColor: bgColors.Blue}}
          type="number" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
            backgroundColor: bgColors.Blue}}
            type="number" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
        backgroundColor: bgColors.Blue}}
        type="number" 
        name="greaterThan" 
        id="gTFebruary2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

    
    

    //function daysInCycle() {
      //let now = new Date();
      //let acquired = new Date(this.dateAqquired);
      //let elapsed = now - acquired; //elapsed time in milliseconds
      //let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
     // return daysSinceAcquired;
    //}
    
  return ( 
  <>
    <Zoom top cascade>
    
    <table className={styles.table}>
      <thead>
        <tr className={styles.th2}>
          <th className={styles.th2}><h4><span>{data.last_name}</span><br /></h4></th>
          <th className={styles.th2}><h4><span>#{data.meter_serialNum}</span></h4></th>
        </tr>
        <tr className={styles.th2}>
          <td>Billing Period</td>
          <td>Gallons Used</td>
          <td>Gallons Over</td>
          Additional Fee
        </tr>
        
      </thead>
      <tbody>
        
        
        <tr>
          <td className={styles.td3}><p className={styles.p}>April 2020.</p></td>
          <td className={styles.td3}>
            <input style={{
              backgroundColor: bgColors.Blue}}
              type="number"
              min="0" 
              name="utilized" 
              id="april20201"
              value={data.jun10_20-data.apr05_20} 
              label="answers" 
              readOnly>
            </input>
          </td>
          <td className={styles.td3}>
            {galOverApril()}
          </td>
          <td className={styles.td3}>
            {galOverAprilFees()}           
          </td>
        </tr>
        <tr>  
          <td className={styles.td3}><p className={styles.p}>June 2020.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="June2020"
            value={data.aug10_20-data.jun10_20} 
            label="answers" 
            readOnly>
          </input>
          </td>
          <td className={styles.td3}>
            {galOverJune()}
          </td>
          <td className={styles.td3}>
            {galOverJuneFees()}
          </td>
        </tr>
        <tr>
          <td className={styles.td3}><p className={styles.p}>August 2020.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="August2020"
            value={data.oct07_20-data.aug10_20} 
            label="answers" 
            readOnly>
          </input>
          </td>
          <td className={styles.td3}>
            {galOverAugust()}
          </td>
          <td className={styles.td3}>
            {galOverAugustFees()}
          </td>
        </tr>
        <tr>
          <td className={styles.td3}><p className={styles.p}>October 2020.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="October2020"
            value={data.dec10_20-data.oct07_20} 
            label="answers" 
            readOnly>
          </input>
          </td>
          <td className={styles.td3}>
            {galOverOctober()}
          </td>
          <td className={styles.td3}>
            {galOverOctoberFees}           
          </td>
        </tr>
        <tr>
          <td className={styles.td3}><p className={styles.p}>December 2020.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="December2020"
            value={data.feb19_21-data.dec10_20} 
            label="answers" 
            readOnly>
          </input>
          </td>
          <td className={styles.td3}>
            {galOverDecember()}
          </td>
          <td className={styles.td3}>
            {galOverDecemberFees()}
          </td>
        </tr>
        <tr>
          <td className={styles.td3}><p className={styles.p}>February 2021.</p></td>
          <td className={styles.td3}>
          <input style={{
            backgroundColor: bgColors.Blue}}
            type="text" 
            name="utilized" 
            id="February2021"
            value={data.apr05_21-data.feb19_21} 
            label="answers" 
            readOnly
  >
          </input>
          </td>
          <td className={styles.td3}>
            {galOverFebruary()}
          </td>
          <td className={styles.td3}>
            {galOverFebruaryFees()}
          </td>
        </tr>
        
      </tbody>
    </table>
    
    
    </Zoom>

<VideoBg />


  



<style jsx>{`
        
        a {
          color: blue;
        }
      `}</style>
      </>
)};
