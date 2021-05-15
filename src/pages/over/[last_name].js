import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import Link from 'next/link';
import VideoBg from '../../components/VideoBg'
import Zoom from 'react-reveal/Zoom';
import * as React from 'react';
import { MDBBtn } from 'mdbreact';
import { Component } from 'react';


class App extends Component {
  state = {
    data: [last_name
      // ...
    ]
  };

  render () {
    return (
      <LiveBarChart
        data={this.state.data}
      />
    )
  }
}




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
  
  
    class FlipExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = { show: false };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({ show: !this.state.show });
    }}
    
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
        Answer.value = (((info1 - info2) / 6000 ) * 100).toFixed(0)+"%";
      }
    function myFunction() {
      var age, voteable;
      age = document.getElementById("age").value;
      voteable = (age < 6000) ? "no ":"yes, ";
      document.getElementById("demo").innerHTML = voteable + " additional charges.";
      }
    
    
  return ( 
  <>
    <Zoom top cascade>
    
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th2}><h4><span>Last Name </span><br /></h4></th>
          <th className={styles.th2}><h4><span>{data.last_name}</span></h4></th>
        </tr>
        
      </thead>
      <tbody>
        
        
        <tr>
          <td className={styles.td3}><p className={styles.p}>April 2020.</p></td>
          <td className={styles.td3}>
            <input style={{
              backgroundColor: bgColors.Blue}}
              type="text" 
              name="utilized" 
              id="april2020"
              value={data.jun10_20-data.apr05_20} 
              label="answers" 
              readOnly>
            </input>
          </td>
          <td className={styles.td3rd}>
            <input style={{
              backgroundColor: bgColors.Blue}}
              type="text" 
              name="greaterThan" 
              id="gTApril2020"
              value={data.jun10_20-data.apr05_20} 
              label="answers" 
              readOnly>
            </input>
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
            onBlur="this.type=''; this.lastValue=this.value; this.value=this.value==''?'':(+this.value).toLocaleString()"
            readOnly>
          </input>
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
            onBlur="this.type=''; this.lastValue=this.value; this.value=this.value==''?'':(+this.value).toLocaleString()">
          </input>
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