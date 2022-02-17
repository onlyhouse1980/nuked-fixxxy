import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../over/[last_name].module.css'
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
     >
                   readOnly    </input>;
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
            name="junGOver" 
            id="gTJune2020"
            value="0" 
            readOnly>
        </input>}}

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



    
    
    
    
  return ( 

  
  
    
 <main style={{width: '100vw', height: '100vh', width: '100%' , marginTop:'10px', marginLeft:'0px', paddingBottom: '50px'}}>
  
      
        <Zoom top cascade>
          <div className={styles.title}>
          <h1 className={styles.pageheader}>👤 <em>{data.last_name}</em></h1>
          </div>
          <table className={styles.table}>
            <thead>
              <tr style={{ fontWeight:'900', fontSize:'30' }} className={styles.th2}>
                <td>
                <p style={{ fontWeight:'900' }} className={styles.th2}>Meter Serial</p> 
                </td>
                <td>
                <p style={{ fontWeight:'900' }} className={styles.th2}>#{data.meter_serialNum}</p>
                </td>
                <td>
                
                </td>
              </tr>
              <tr className={styles.th2}>
                <td>Billing Period</td>
                <td>Gallons Used</td>
                <td>Gallons Over</td>
                <td>Charge/Fee</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td3}><p className={styles.p}>June 2020</p>
                  <p style={{ fontSize: 9, width:'75px', color: 'white', margin: '-20px 0 0 10px', padding: 0, position: 'relative' }}>(6/11/20-8/10/20)</p></td>
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
                <td className={styles.td3}><p className={styles.p}>August 2020</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-40px 0 0 10px', paddingTop: '-10px' }}>(08/11-10/07)</p>
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
                <td className={styles.td3}><p className={styles.p}>December 2020</p>
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
                <td className={styles.td3}><p className={styles.p}>February 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>April 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>June 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>August 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>October 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>December 2021</p>
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
                <td className={styles.td3}><p className={styles.p}>Annual Fees</p>
                  <p style={{ fontSize: 9, width:'75px',  color: 'white', margin: '-20px 0 0 10px', padding: 0 }}>Membership</p></td>
                <td className={styles.td3}>
                <div style={{
                    display: 'hidden',
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
                  </div>
                </td>
                <td className={styles.td3}>
                <div style={{
                    display: 'hidden',
                    backgroundColor: 'transparent',
                    margin: '0 10px 0 10px',
                    width: '75px',
                    
                  }}
                    type="text"
                    name="utilized"
                    id="Annual"
                    value={0}
                    label="answers"
                    readOnly>
                  </div>
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
                    value={"$" + "500" + "." + "00"}
                    label="answers"
                    readOnly>
                  </input>
                </td>
              </tr>
             {/*  <tr style={{position: 'relative', height: '100px', margin: '3px 3px 3px 0', alignItems:'stretch',}}>
                <BuyButton style={{display: 'flex'}}/>
                <p style={{display: 'inline', fontSize: '24', fontWeight: '900', color:'black',  margin: '10px 10px 10px 10px', padding: 0 }}>Total Due</p>
                
                <input style={{display: 'inline', 
                  backgroundColor: 'bgColors.Blue', 
                  padding:'6px', 
                  margin:'0 20px 5px 10px', 
                  width: '75px'}}
                    type='text'
                    name="utilized"
                    id="anual"
                    
                    label="answers"
                    readOnly/>  
          </tr> */}
          
            </tbody>
          </table>


        </Zoom>

      

   <VideoBg /> 
      
</main>

                )}
