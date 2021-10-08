import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../person/[meter_serialNum].module.css'
import Zoom from 'react-reveal/Zoom';
import * as React from 'react';
import VideoBg from '../../components/VideoBg';


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
  if (error) return <div>Last Name not found. </div>
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
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
          type="text"
          width="5" 
          name="aprilUsed" 
          id="aprOver"
          value={(data.jun10_20-data.apr05_20)-6000}    
          readOnly>
        </input>;
      } else {
        return <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
          type="text" 
          name="aprilUsed" 
          id="aprOver"
          value="0"    
          readOnly>
        </input>}}

    function galOverAprilFees() {
      let x = data.jun10_20-data.apr05_20
        if (x>6000 && x<10000) {
          return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
            type="text"
            name="greaterThan" 
            id="gTApril2020"
            value= {(((x)-6000)*.005).toFixed(2)}
            label="results" 
            readOnly>
          </input>;
        } else if (x>10000 && x<20000) {
          return <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
              type="text" 
              name="greaterThan" 
              id="gTApril2020t1"
              value={(((x-10000)*.01)+19.99).toFixed(2)}
              label="results" 
              readOnly>
          </input>;
          } else if (x>20000) {
            return <input style={{
              backgroundColor: bgColors.Blue,
              margin: '0 10px 0 10px',
              width: '75px',
            }}
                type="text" 
                name="greaterThan" 
                id="gTApril2020t2"
                value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                label="results" 
                readOnly>
            </input>;
      } else {
        <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="aprGOver" 
            id="gTApril2020"
            value="0" 
            readOnly>
        </input>}}
      
      function galOverJune() {
        if ((data.aug10_20-data.jun10_20)>6000) {
          return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
            type="text" 
            min="0"
            name="utilized" 
            id="junOver"
            value={(data.aug10_20-data.jun10_20)-6000}   
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
            min="0"
            name="utilized" 
            id="junOver"
            value="0"   
            label="galOver" 
            readOnly>
          </input>}}
  
      function galOverJuneFees20() {
        let x = data.aug10_20-data.jun10_20
        if (x>6000 && x<10000) {
          return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
            type="text"
            name="greaterThan" 
            id="gTJune2020"
            value= {(((x)-6000)*.005).toFixed(2)}
            label="results" 
            readOnly>
          </input>;
        } else if (x>10000 && x<20000) {
          return <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
              type="text" 
              name="greaterThan" 
              id="gTJune2020t1"
              value={(((x-10000)*.01)+19.99).toFixed(2)}
              label="results" 
              readOnly>
          </input>;
          } else if (x>20000) {
            return <input style={{
              backgroundColor: bgColors.Blue,
              margin: '0 10px 0 10px',
              width: '75px',
            }}
                type="text" 
                name="greaterThan" 
                id="gTJune2020t2"
                value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                label="results" 
                readOnly>
            </input>;
      } else {
        <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="junGOver" 
            id="gTJune2020"
            value="0" 
            readOnly>
        </input>}}

function galOverAugust() {
  if ((data.aug10_20-data.oct07_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
      min="0"
      name="utilized" 
      id="augOver1"
      value={(data.aug10_20-data.oct07_20) - 6000}   
      label="galOver1" 
      readOnly>
    </input>;
  } else {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
      min="0"
      name="utilized" 
      id="augOver2"
      value="0"   
      label="galOver2" 
      readOnly>
    </input>}}

function galOverAugustFees() {
  let x = data.oct07_20-data.aug10_20
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }} 
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
        type="text" 
        name="greaterThan" 
        id="gTAugust2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

function galOverOctober() {
  if ((data.dec10_20-data.oct07_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
      min="0"
      name="utilized" 
      id="octOver"
      value={(data.dec10_20-data.oct07_20)-6000}   
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
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="number"
      name="greaterThan" 
      id="gTOctober2020"
      value= {(((x)-6000)*.005).toFixed(2)} 
      label="results" 
      readOnly>
    </input>;
  } else if (x>10000 && x<20000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
        type="text" 
        name="greaterThan" 
        id="gTOctober2020t1"
        value={(((x-10000)*.01)+19.99).toFixed(2)}
        label="results" 
        readOnly>
    </input>;
    } else if (x>20000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          name="greaterThan" 
          id="gTOctober2020t2"
          value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
} else {
  <input style={{
    backgroundColor: bgColors.Blue,
    margin: '0 10px 0 10px',
    width: '75px',
  }}
      type="text" 
      name="greaterThan" 
      id="gTOctober2020"
      value="0"
      label="results" 
      readOnly>
  </input>}}

function galOverDecember() {
  if ((data.feb19_21-data.dec10_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
      min="0"
      name="utilized" 
      id="decOver"
      value={(data.feb19_21-data.dec10_20)-6000}   
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
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
        type="text" 
        name="greaterThan" 
        id="gTDecember2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

function galOverFebruary() {
  if ((data.apr05_21-data.feb19_21)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
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
      type="text" 
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
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="number"
        name="greaterThan" 
        id="gTJune2020"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          name="greaterThan" 
          id="gTJune2020t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return<input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="greaterThan" 
            id="gTJune2020t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
        type="text" 
        name="greaterThan" 
        id="gTFebruary2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

    function galOverApril21() {
      if ((data.jun04_21-data.apr05_21)>6000) {
        return <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
          type="text" 
          min="0"
          name="utilized" 
          id="aprOver"
          value={(data.jun04_21-data.apr05_21)-6000}   
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
          min="0"
          name="utilized" 
          id="aprOver"
          value="0"   
          label="galOver" 
          readOnly>
        </input>}}
    
    function galOverAprilFees21() {
      let x = data.jun04_21-data.apr05_21
        if (x>6000 && x<10000) {
          return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
            type="number"
            name="greaterThan" 
            id="gTApril2021"
            value= {(((x)-6000)*.005).toFixed(2)} 
            label="results" 
            readOnly>
          </input>;
        } else if (x>10000 && x<20000) {
          return <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
              type="text" 
              name="greaterThan" 
              id="gTApril2021t1"
              value={(((x-10000)*.01)+19.99).toFixed(2)}
              label="results" 
              readOnly>
          </input>;
          } else if (x>20000) {
            return <input style={{
              backgroundColor: bgColors.Blue,
              margin: '0 10px 0 10px',
              width: '75px',
            }}
                type="text" 
                name="greaterThan" 
                id="gTApril2021t2"
                value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                label="results" 
                readOnly>
            </input>;
      } else {
        <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="greaterThan" 
            id="gTApril2020"
            value="0"
            label="results" 
            readOnly>
        </input>}}
        function galOverJune21() {
          if ((data.aug04_21 - data.jun04_21)>6000) {
            return <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
              type="text" 
              min="0"
              name="utilized" 
              id="junOver"
              value={(data.aug04_21 - data.jun04_21)-6000}   
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
              min="0"
              name="utilized" 
              id="junOver"
              value="0"   
              label="galOver" 
              readOnly>
            </input>}}
        
        function galOverJuneFees21() {
          let x = data.aug04_21 - data.jun04_21
            if (x>6000 && x<10000) {
              return <input style={{
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }}
                type="number"
                name="greaterThan" 
                id="gTJune2021"
                value= {(((x)-6000)*.005).toFixed(2)} 
                label="results" 
                readOnly>
              </input>;
            } else if (x>10000 && x<20000) {
              return <input style={{
                backgroundColor: bgColors.Blue,
                margin: '0 10px 0 10px',
                width: '75px',
              }}
                  type="text" 
                  name="greaterThan" 
                  id="gTJune0421t1"
                  value={(((x-10000)*.01)+19.99).toFixed(2)}
                  label="results" 
                  readOnly>
              </input>;
              } else if (x>20000) {
                return <input style={{
                  backgroundColor: bgColors.Blue,
                  margin: '0 10px 0 10px',
                  width: '75px',
                }}
                    type="text" 
                    name="greaterThan" 
                    id="gTJune0421t2"
                    value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
                    label="results" 
                    readOnly>
                </input>;
          } else {
            <input style={{
              backgroundColor: bgColors.Blue,
              margin: '0 10px 0 10px',
              width: '75px',
            }}
                type="text" 
                name="greaterThan" 
                id="gTJune2020"
                value="0"
                label="results" 
                readOnly>
            </input>}}

function galOverAug21over() {
  if ((data.oct03_21 - data.aug04_21)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      min="0"
      name="utilized" 
      id="augOver"
      value={(data.oct03_21 - data.aug04_21)-6000}   
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
      min="0"
      name="utilized" 
      id="augOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverAugFees21() {
  let x = data.oct03_21 - data.aug04_21
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="number"
        name="greaterThan" 
        id="gTAug2021"
        value= {(((x)-6000)*.005).toFixed(2)} 
        label="results" 
        readOnly>
      </input>;
    } else if (x>10000 && x<20000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          name="greaterThan" 
          id="gTaug21t1"
          value={(((x-10000)*.01)+19.99).toFixed(2)}
          label="results" 
          readOnly>
      </input>;
      } else if (x>20000) {
        return <input style={{
          backgroundColor: bgColors.Blue,
          margin: '0 10px 0 10px',
          width: '75px',
        }}
            type="text" 
            name="greaterThan" 
            id="gTAug0421t2"
            value={(((x-20000)*.025)+19.99+99.98).toFixed(2)}
            label="results" 
            readOnly>
        </input>;
  } else {
    <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
        type="text" 
        name="greaterThan" 
        id="gTAug2020"
        value="0"
        label="results" 
        readOnly>
    </input>}}

    

    function daysInCycle() {
      let now = new Date();
      let acquired = new Date(this.dateAqquired);
      let elapsed = now - acquired; //elapsed time in milliseconds
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
     return daysSinceAcquired;
    }
    const router = useRouter();

  return ( 
 <main style={{position:'absolute', top:'0', left:'0',marginTop:'90px',marginLeft:'0', width: '99%', height: '100vh', width: '100%', overage:'hidden'}}>
  <><>
        <Zoom top cascade>
          {/* <div classname={styles.title}>
          <h1 className={styles.pageheader}>👤 <em>{router.query.name} Account</em></h1>
          </div> */}
          <table className={styles.table}>
            <thead>
              <tr className={styles.th2}>{data.last_name}<br />
                <td />
                <td />
                <td>
                  <th className={styles.th2}>#{data.meter_serialNum}</th>
                </td>
              </tr>
              <tr className={styles.th2}>
                <td>Billing Period</td>
                <td>Gallons Used</td>
                <td>Gallons Over</td>
                <td>Additional Fee</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td3}><p className={styles.p}>June 2020</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0, position: 'relative' }}>(6/11/20-8/10/20)</p></td>
                <td className={styles.td3}>
                  <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="June2020"
                    value={data.aug10_20 - data.jun10_20}
                    label="answers"
                    readOnly>
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverJune()}
                </td>
                <td className={styles.td3}>
                  {galOverJuneFees20()}
                </td>
              </tr>
              <tr>
                <td className={styles.td3}><p className={styles.p}>August 2020</p><br />
                  <p style={{ fontSize: 9, color: 'white', margin: '-40px 0 0 10px', paddingTop: '-10px' }}>(8/11/20-10/7/20)</p>
                </td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="August2020"
                    value={data.oct07_20 - data.aug10_20}
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
                <td className={styles.td3}><p className={styles.p}>October 2020</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/7/20-12/10/20)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="October2020"
                    value={data.dec10_20 - data.oct07_20}
                    label="answers"
                    readOnly>
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverOctober()}
                </td>
                <td className={styles.td3}>
                  {galOverOctoberFees()}
                </td>
              </tr>
              <tr>
                <td className={styles.td3}><p className={styles.p}>December 2020</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(12/11/20-02/19/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="December2020"
                    value={data.feb19_21 - data.dec10_20}
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
                <td className={styles.td3}><p className={styles.p}>February 2021</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(02/20/21-04/05/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="February2021"
                    value={data.apr05_21 - data.feb19_21}
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

              <tr>
                <td className={styles.td3}><p className={styles.p}>April 2021</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(04/05/21-06/04/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="April2021"
                    value={data.jun04_21 - data.apr05_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverApril21()}
                </td>
                <td className={styles.td3}>
                  {galOverAprilFees21()}
                </td>
              </tr>

              <tr>
                <td className={styles.td3}><p className={styles.p}>June 2021</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(06/04/21 - 08/04/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="June2021"
                    value={data.aug04_21 - data.jun04_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverJune21()}
                </td>
                <td className={styles.td3}>
                  {galOverJuneFees21()}
                </td>
              </tr>

              <tr>
                <td className={styles.td3}><p className={styles.p}>August 2021</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(08/05/21 - 10/04/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="Aug2021"
                    value={data.aug04_21 - data.jun04_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverAug21over()}
                </td>
                <td className={styles.td3}>
                  {galOverAugFees21()}
                </td>
              </tr>

              {/* <tr>
                <td className={styles.td3}><p className={styles.p}>Annual Fees</p>
                  <p style={{ fontSize: 9, color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(06/04/21 - 08/04/21)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="Annual"
                    value={0}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="Annual"
                    value={0}
                    label="answers"
                    readOnly>
                  </input>
                </td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="Annual"
                    value={"500" + "." + "00"}
                    label="answers"
                    readOnly>
                  </input>
                </td>
              </tr> */}
              
              {/* <tr style={{position: 'relative', height: '100px', margin: '3px 3px 3px 0', alignItems:'baseline',}}>
                <BuyButton style={{display: 'inline'}}/>
                <p style={{display: 'inline', fontSize: 24, fontWeight: '900', color:'black',  margin: '10px 10px 10px 10px', padding: 0 }}>Total Due</p>
                <input style={{display: 'inline', backgroundColor: 'bgColors.Blue', padding:'6px', margin:'0 20px 5px 10px', width: '75px'}}
                      type='text'
                      value={0}
                      name="utilized"
                      id="Annual"
                      label="answers"
                      readOnly/>  
          </tr> */}
            </tbody>
          </table>


        </Zoom>

      

    </><VideoBg />
      </>
</main>
)};
