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


export default function Over() {
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

function galOverAugust() {
  if ((data.oct07_20-data.aug10_20)>6000) {
    return <input style={{
      backgroundColor: bgColors.Blue,
      margin: '0 10px 0 10px',
      width: '75px',
    }}
      type="text" 
      
      name="utilized" 
      id="augOver1"
      value={(data.oct07_20-data.aug10_20) - 6000}   
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
        type="text"
        name="greaterThan" 
        id="gTJune2020"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
      type="text"
      name="greaterThan" 
      id="gTOctober2020"
      value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
        value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
          value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
        type="text"
        name="greaterThan" 
        id="gTJune2020"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
      
      name="utilized" 
      id="febOver"
      value={(data.apr05_21-data.feb19_21)-6000}   
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
        type="text"
        name="greaterThan" 
        id="gTJune2020"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
            type="text"
            name="greaterThan" 
            id="gTApril2021"
            value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
              value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
                value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
                type="text"
                name="greaterThan" 
                id="gTJune2021"
                value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
                  value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
                    value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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


function galOverAugust21() {
  if ((data.oct03_21 - data.aug04_21)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      
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
      
      name="utilized" 
      id="augOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverAugustFees21() {
  let x = data.oct03_21 - data.aug04_21
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTAugust2021"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          id="gTAugust0421t1"
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            id="gTAugust0421t2"
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
        id="gTAugust2021"
        value="$0"
        label="results" 
        readOnly>
    </input>}}

function galOverOctober21() {
  if ((data.dec03_21 - data.oct03_21)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      
      name="utilized" 
      id="octOver"
      value={(data.dec03_21 - data.oct03_21)-6000}   
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
      id="octOver"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverOctoberFees21() {
  let x = data.dec03_21 - data.oct03_21
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTOctober2021"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          id="gTOctober0321t1"
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            id="gTOctober0321t2"
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
        id="gTOctober2021"
        value="$0"
        label="results" 
        readOnly>
    </input>}}


function galOverDecember21() {
  if ((data.feb04_22 - data.dec03_21)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      
      name="utilized" 
      id="dec21Over"
      value={(data.feb04_22 - data.dec03_21)-6000}   
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
      id="dec21Over"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverDecemberFees21() {
  let x = data.feb04_22 - data.dec03_21
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTDecember2021"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          id="gTDecember2021"
          /*chech this one for error*/
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            id="gTDecember2021"
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
        id="gTDecember2021"
        value="$0"
        label="results" 
        readOnly>
    </input>}}


// ****FEBRUARY****** 


function galOverFebruary22() {
  if ((data.apr07_22 - data.feb04_22)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      name="utilized" 
      id="feb22Over"
      value={(data.apr07_22 - data.feb04_22)-6000}   
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
      id="feb22Over"
      value="0"   
      label="galOver" 
      readOnly>
    </input>}}

function galOverFebruaryFees22() {
  let x = data.apr07_22 - data.feb04_22
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTFebruary2022"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          id="gTFebruary2022"
          /*chech this one for error*/
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            id="gTFebruary2022"
            value={"$" + (((x-20000)*.025)+19.99+99.98).toFixed(2)}
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
        id="gTFebruary2022"
        value="$0"
        label="results" 
        readOnly>
    </input>}}


    // ******APRIL******
    
function galOverApril22() {
  if ((data.jun07_22 - data.apr07_22)>6000) {
    return <input style={{
            backgroundColor: bgColors.Blue,
            margin: '0 10px 0 10px',
            width: '75px',
          }}
      type="text" 
      
      name="utilized" 
      id="apr22Over"
      value={(data.jun07_22 - data.apr07_22)-6000}   
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

function galOverAprilFees22() {
  let x = data.jun07_22 - data.apr07_22
    if (x>6000 && x<10000) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTApril2022"
        value= {"$" + (((x)-6000)*.005).toFixed(2)} 
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
          id="gTApril2022"
          /*chech this one for error*/
          value={"$" + (((x-10000)*.01)+19.99).toFixed(2)}
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
            id="gTApril2022"
            value={"$" + (((x-20000)*.025) +19.99 +99.98 ).toFixed(2)}
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
        id="gTApril2022"
        value="$0"
        label="results" 
        readOnly>
    </input>}}

// ******JUNE******

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

function remainingJune22() {
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
      </input>;

  }
   function galOverFees22() {
    let a = data.aug05_22 - data.jun07_22 
    let rmn = (48000-a)
    if (rmn<0) {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
        type="text"
        name="greaterThan" 
        id="gTJune2022"
        value= {"$" + ((rmn*-1)*.025).toFixed(2)} 
         
        readOnly>
      </input>;
    } else {
      return <input style={{
        backgroundColor: bgColors.Blue,
        margin: '0 10px 0 10px',
        width: '75px',
      }}
          type="text" 
          display="none"
          name="greaterThan" 
          id="gTJune2022"
          /*chech this one for error*/
          value={0}
          label="results" 
          readOnly>
      </input>;
      } 
    
    }

    
     
return (
  
  
    
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
                <td>Gal Over</td>
                <td>Charge/Fee</td>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td className={styles.td3}><p className={styles.p}>Aug 2020</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', paddingTop: '-10px' }}>(08/11-10/07)</p>
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
                <td className={styles.td3}><p className={styles.p}>Oct 2020</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/07-12/10)</p></td>
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
                <td className={styles.td3}><p className={styles.p}>Dec 2020</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(12/11-02/19)</p></td>
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
                <td className={styles.td3}><p className={styles.p}>Feb 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(02/20-04/05)</p></td>
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
                <td className={styles.td3}><p className={styles.p}>Apr 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(04/05-06/04)</p></td>
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
                <td className={styles.td3} name='fees'>
                  {galOverAprilFees21()}
                </td>
              </tr>

              <tr>
                <td className={styles.td3}><p className={styles.p}>Jun 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(06/04-08/04)</p></td>
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
                <td className={styles.td3}><p className={styles.p}>Aug 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(08/04-10/03)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="August2021"
                    value={data.oct03_21 - data.aug04_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverAugust21()}
                </td>
                <td className={styles.td3}>
                  {galOverAugustFees21()}
                </td>
              </tr>

              <tr>
                <td className={styles.td3}><p className={styles.p}>Oct 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(10/03-12/03)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="October2021"
                    value={data.dec03_21 - data.oct03_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverOctober21()}
                </td>
                <td className={styles.td3}>
                  {galOverOctoberFees21()}
                </td>
              </tr>
              <tr>
                <td className={styles.td3}><p className={styles.p}>Dec 2021</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(12/03-02/04)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="December2021"
                    value={data.feb04_22 - data.dec03_21}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverDecember21()}
                </td>
                <td className={styles.td3}>
                  {galOverDecemberFees21()}
                </td>
              </tr>
              <tr>
                <td className={styles.td3}><p className={styles.p}>Feb 2022</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(02/05-4/07)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="February2022"
                    value={data.apr07_22 - data.feb04_22}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverFebruary22()}
                </td>
                <td className={styles.td3}>
                  {galOverFebruaryFees22()}
                </td>
              </tr>

              <tr>
                <td className={styles.td3}><p className={styles.p}>Apr 2022</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>(04/08-6/07)</p></td>
                <td className={styles.td3}>
                <input style={{
                    backgroundColor: bgColors.Blue,
                    margin: '0 10px 0 10px',
                    width: '75px',
                  }}
                    type="text"
                    name="utilized"
                    id="April2022"
                    value={data.jun07_22 - data.apr07_22}
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {galOverApril22()}
                </td>
                <td className={styles.td3}>
                  {galOverAprilFees22()}
                </td>
                </tr>
                </tbody>
                </table>
                <br>
                </br>
                <br>
                </br>
                <table className={styles.table}>
                  <thead>
                  <tr>
                
                <td className={styles.td3}>
                  <p>New Fee Structure</p>
                </td>
              </tr>
                  <tr className={styles.th2}>
                <td>Billing Period</td>
                <td>Gal Used</td>
                <td>Remaining<br></br>(of 48,000)</td>
                
              </tr>
            </thead>
                  <tbody>

                
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
                    value={data.aug05_22 - data.jun07_22 }
                    label="answers"
                    readOnly
                  >
                  </input>
                </td>
                <td className={styles.td3}>
                  {remainingJune22()}
                </td>
                </tr>
                <br></br>

                <tr>
                <td className={styles.td3}>
                  <p>Charges/Fees</p>
                </td>
                <td className={styles.td3}>
                  {galOverFees22()}
                </td>
                
              </tr>
              

              
          
            </tbody>
          </table>


        

      

   <BGBlack /> 
      
        </main>
)}
