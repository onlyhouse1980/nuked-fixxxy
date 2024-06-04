import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../over/[last_name].module.css";
// import styles from '../../styles/globals.css'
import Zoom from "react-reveal";
import * as React from "react";
import BGBlack from "../../components/BGBlack";

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
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Over() {
  const { useState } = React;

  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.last_name && `/api/overuse/${query.last_name}`,
    fetcher
  );

  if (error) return <div>Last Name not found. </div>;
  if (!data) return <div>Loading...</div>;

  const arr = [data];
  console.log(arr.length);

  function moreInfo(props) {
    let info1 = parseInt(document.getElementById("info1").value);
    let info2 = parseInt(document.getElementById("info2").value);
    var Answer = document.getElementById("Percent");
    Answer.value = (((info1 - info2) / 6000) * 1).toFixed(2);
  }

  function galOverAugust() {
    if (data.oct07_20 - data.aug10_20 > 6000) {
      return;

      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="utilized"
        id="augOver1"
        value={data.oct07_20 - data.aug10_20 - 6000}
        label="galOver1"
        readOnly
      ></input>;
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="augOver2"
          value="0"
          label="galOver2"
          readOnly
        ></input>
      );
    }
  }

  function galOverAugustFees() {
    let x = data.oct07_20 - data.aug10_20;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTAugust2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverOctober() {
    if (data.dec10_20 - data.oct07_20 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="octOver"
          value={data.dec10_20 - data.oct07_20 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="octOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverOctoberFees() {
    let x = data.dec10_20 - data.oct07_20;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober2020"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober2020t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober2020t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTOctober2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverDecember() {
    if (data.feb19_21 - data.dec10_20 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="decOver"
          value={data.feb19_21 - data.dec10_20 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="decOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverDecemberFees() {
    let x = data.feb19_21 - data.dec10_20;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTDecember2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverFebruary() {
    if (data.apr05_21 - data.feb19_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="febOver"
          value={data.apr05_21 - data.feb19_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="febOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverFebruaryFees() {
    let x = data.apr05_21 - data.feb19_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2020t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTFebruary2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverApril21() {
    if (data.jun04_21 - data.apr05_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="aprOver"
          value={data.jun04_21 - data.apr05_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="aprOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverAprilFees21() {
    let x = data.jun04_21 - data.apr05_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2021"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2021t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2021t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTApril2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverJune21() {
    if (data.aug04_21 - data.jun04_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="junOver"
          value={data.aug04_21 - data.jun04_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="junOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverJuneFees21() {
    let x = data.aug04_21 - data.jun04_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune2021"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune0421t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTJune0421t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTJune2020"
        value="0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverAugust21() {
    if (data.oct03_21 - data.aug04_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="augOver"
          value={data.oct03_21 - data.aug04_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="augOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverAugustFees21() {
    let x = data.oct03_21 - data.aug04_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTAugust2021"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTAugust0421t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTAugust0421t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTAugust2021"
        value="$0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverOctober21() {
    if (data.dec03_21 - data.oct03_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="octOver"
          value={data.dec03_21 - data.oct03_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="octOver"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverOctoberFees21() {
    let x = data.dec03_21 - data.oct03_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober2021"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober0321t1"
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTOctober0321t2"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTOctober2021"
        value="$0"
        label="results"
        readOnly
      ></input>;
    }
  }

  function galOverDecember21() {
    if (data.feb04_22 - data.dec03_21 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="dec21Over"
          value={data.feb04_22 - data.dec03_21 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="dec21Over"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverDecemberFees21() {
    let x = data.feb04_22 - data.dec03_21;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTDecember2021"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTDecember2021"
          /*chech this one for error*/
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTDecember2021"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTDecember2021"
        value="$0"
        label="results"
        readOnly
      ></input>;
    }
  }

  // ****FEBRUARY******

  function galOverFebruary22() {
    if (data.apr07_22 - data.feb04_22 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="feb22Over"
          value={data.apr07_22 - data.feb04_22 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="feb22Over"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverFebruaryFees22() {
    let x = data.apr07_22 - data.feb04_22;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTFebruary2022"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTFebruary2022"
          /*chech this one for error*/
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTFebruary2022"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTFebruary2022"
        value="$0"
        label="results"
        readOnly
      ></input>;
    }
  }

  // ******APRIL******

  function galOverApril22() {
    if (data.jun07_22 - data.apr07_22 > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="apr22Over"
          value={data.jun07_22 - data.apr07_22 - 6000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="apr22Over"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverAprilFees22() {
    let x = data.jun07_22 - data.apr07_22;
    if (x > 6000 && x < 10000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2022"
          value={"$" + ((x - 6000) * 0.005).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 10000 && x < 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2022"
          /*chech this one for error*/
          value={"$" + ((x - 10000) * 0.01 + 19.99).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else if (x > 20000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="greaterThan"
          id="gTApril2022"
          value={"$" + ((x - 20000) * 0.025 + 19.99 + 99.98).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      <input
        style={{
          backgroundColor: bgColors.Blue,
          margin: "0 10px 0 10px",
          width: "75px",
        }}
        type="text"
        name="greaterThan"
        id="gTApril2022"
        value="$0"
        label="results"
        readOnly
      ></input>;
    }
  }

  // ******JUNE******

  function galOverJune22() {
    if (data.aug05_22 - data.jun07_22 > 8000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="apr22Over"
          value={data.aug05_22 - data.jun07_22 - 8000}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          name="utilized"
          id="apr22Over"
          value="0"
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function yearlyIncluded() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;

    let costFree = 48000;
    let rmn = costFree - a;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ******AUGUST*****

  function afterAugust() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let total2 = a + b;
    let costFree = 48000;
    let rmn = costFree - total2;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ******OCTOBER******

  function afterOctober() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let c = data.dec09_22 - data.oct07_22;
    let total2 = a + b + c;
    let costFree = 48000;
    let rmn = costFree - total2;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ****DECEMBER

  function afterDecember() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let c = data.dec09_22 - data.oct07_22;
    let d = data.feb04_23 - data.dec09_22;
    let total3 = a + b + c + d;
    let costFree = 48000;
    let rmn = costFree - total3;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ***FEBRUARY 2023***

  function afterFebruary() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let c = data.dec09_22 - data.oct07_22;
    let d = data.feb04_23 - data.dec09_22;
    let e = data.apr06_23 - data.feb04_23;
    let total4 = a + b + c + d + e;
    let costFree = 48000;
    let rmn = costFree - total4;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ***April 2023***

  function afterApril() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let c = data.dec09_22 - data.oct07_22;
    let d = data.feb04_23 - data.dec09_22;
    let e = data.apr06_23 - data.feb04_23;
    let f = data.jun05_23 - data.apr06_23;
    let total5 = a + b + c + d + e + f;
    let costFree = 48000;
    let rmn = costFree - total5;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ***June 2023***

  function afterJune23() {
    let g = data.aug02_23 - data.jun05_23;
    let total6 = g;
    let costFree = 6000;
    let rmn = costFree - total6;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  // ***August 2023***

  function afterAugust23() {
    let h = data.oct05_23 - data.aug02_23;
    let total7 = h;
    let costFree = 6000;
    let rmn = costFree - total7;

    if (rmn < 0) {
      return (
        <input
          style={{
            color: "red",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            color: "black",
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="number"
          name="utilized"
          id="yearOver"
          value={rmn}
          label="galOver"
          readOnly
        ></input>
      );
    }
  }

  function galOverFees22() {
    let a = data.aug05_22 - data.jun07_22;
    let b = data.oct07_22 - data.aug05_22;
    let c = data.dec09_22 - data.oct07_22;
    let d = data.feb04_23 - data.dec09_22;
    let e = data.apr6_23 - data.feb04_23;
    let totalYearUsed = a + b + c + d + e;
    let rmn = 48000 - totalYearUsed;

    if (rmn < 0) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTJune2022"
          /*chech this one for error*/
          value={"$" + (rmn * -1 * 0.025).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
    } else {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTJune2022"
          /*chech this one for error*/
          value={0}
          label="results"
          readOnly
        ></input>
      );
    }
  }

  
  function december2023() {
    let a = data.dec04_23 
    let b = data.oct05_23
    let c = a - b
     
    


    if (c > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTDecember2023"
          /*chech this one for error*/
          value={"$" + ((c - 6000) * 0.025).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
      } else {
        return (
          <input
            style={{
              backgroundColor: bgColors.Blue,
              margin: "0 10px 0 10px",
              width: "75px",
            }}
            type="text"
            display="none"
            name="greaterThan"
            id="gTDecember2023"
            /*chech this one for error*/
            value={0}
            label="results"
            readOnly
          ></input>
        );
    }
  }
  function February2024() {
    let a = data.feb02_24 
    let b = data.dec04_23
    let c = a - b
     
    


    if (c > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTFebruary2024"
          /*chech this one for error*/
          value={"$" + ((c - 6000) * 0.025).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
      } else {
        return (
          <input
            style={{
              backgroundColor: bgColors.Blue,
              margin: "0 10px 0 10px",
              width: "75px",
            }}
            type="text"
            display="none"
            name="greaterThan"
            id="gtFebruary2024"
            /*chech this one for error*/
            value={0}
            label="results"
            readOnly
          ></input>
        );
    }
  }

  function April2024() {
    let a = data.apr01_24 
    let b = data.feb02_24
    let c = a - b
     
    


    if (c > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTApril2024"
          /*chech this one for error*/
          value={"$" + ((c - 6000) * 0.025).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
      } else {
        return (
          <input
            style={{
              backgroundColor: bgColors.Blue,
              margin: "0 10px 0 10px",
              width: "75px",
            }}
            type="text"
            display="none"
            name="greaterThan"
            id="gtApril2024"
            /*chech this one for error*/
            value={0}
            label="results"
            readOnly
          ></input>
        );
    }
  }

  function June2024() {
    let a = data.jun01_24 
    let b = data.apr01_24
    let c = a - b
     
    


    if (c > 6000) {
      return (
        <input
          style={{
            backgroundColor: bgColors.Blue,
            margin: "0 10px 0 10px",
            width: "75px",
          }}
          type="text"
          display="none"
          name="greaterThan"
          id="gTJune2024"
          /*chech this one for error*/
          value={"$" + ((c - 6000) * 0.025).toFixed(2)}
          label="results"
          readOnly
        ></input>
      );
      } else {
        return (
          <input
            style={{
              backgroundColor: bgColors.Blue,
              margin: "0 10px 0 10px",
              width: "75px",
            }}
            type="text"
            display="none"
            name="greaterThan"
            id="gtJune2024"
            /*chech this one for error*/
            value={0}
            label="results"
            readOnly
          ></input>
        );
    }
  }



  return (
    // END OF FUNCTIONS BEGINNING OF PAGE DESIGN

    <main
      style={{
        width: "100vw",
        height: "100vh",
        width: "100%",
        marginTop: "10px",
        marginLeft: "0px",
        marginBottom: "100px",
        paddingBottom: "50px",
      }}
    >
      <Zoom top cascade>
        <div className={styles.title}>
          <h1 className={styles.pageheader}>
            👤 <em>{data.last_name}</em>
          </h1>
        </div>
        <div>
          {/* CUSTOMER INFO TABLE */}
          <table className={styles.table}>
            <thead>
              <tr
                style={{ fontWeight: "900", fontSize: "30" }}
                className={styles.th2}
              >
                <td>
                  <p style={{ fontWeight: "900" }} className={styles.th2}>
                    Mtr Sr Nr
                  </p>
                </td>
                <td>
                  <p style={{ fontWeight: "900" }} className={styles.th2}>
                    #{data.meter_serialNum}
                  </p>
                </td>
              </tr>
            </thead>
          </table>

          {/* START MONTHLY RATES */}
          <table className={styles.monthlyRate}>
            <thead>
              <tr>
                <td className={styles.td3}>
                  <p className={styles.newFee}>Bi Monthly Rates</p>
                </td>
              </tr>

              <tr className={styles.th2}>
                <td className={styles.newFee}>Billing Period</td>
                <td className={styles.newFee}>Gal Used</td>
                <td className={styles.newFee}>
                  Gal Over
                </td>
                <td className={styles.newFee}>
                  Charge/Fee
                </td>
              </tr>
            </thead>
            <tbody>

              {/* April 2024 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Apr 2024</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (4/1/24) - (6/1/24)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="April2024"
                    value={(data.jun01_24 - data.apr01_24 )}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="April2024"
                    value={(6000 - (data.jun01_24 - data.apr01_24))*-1}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{June2024()}</td>
              </tr>



              {/* February 2024 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Feb 2024</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (2/2/24) - (4/1/24)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2023"
                    value={(data.apr01_24 - data.feb02_24 )}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2024"
                    value={(6000 - (data.apr01_24 - data.feb02_24))*-1}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{April2024()}</td>
              </tr>

              {/* December 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Dec 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (12/4/23) - (2/2/24)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2023"
                    value={(data.feb02_24 - data.dec04_23 )}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2023"
                    value={(6000 - (data.feb02_24 - data.dec04_23))*-1}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{February2024()}</td>
              </tr>
              {/* OCTOBER 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Oct 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (10/5/23) - (12/4/23)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="October2023"
                    value={(data.dec04_23 - data.oct05_23)}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="October2023"
                    value={(6000 - (data.dec04_23 - data.oct05_23))*-1}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{december2023()}</td>
              </tr>
              <br></br>
            </tbody>  
          </table>

          {/* START NEW FEE TABLE HEADER */}
          <table>
            <thead>
              <tr>
                <td className={styles.td3}>
                  <p className={styles.newFee}>Special Fee Structure</p>
                </td>
              </tr>

              <tr className={styles.th2}>
                <td className={styles.newFee}>Billing Period</td>
                <td className={styles.newFee}>Gal Used</td>
                <td className={styles.newFee}>
                  Remaining<br></br>(of 6,000)
                </td>
              </tr>
            </thead>

            


            {/* START NEW FEE DATA */}
            <tbody>
              <tr>
                <td>--2023 Special Rates--</td>
              </tr>
              {/* AUGUST 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Aug 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (8/2/23) - (10/5/23)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="August2023"
                    value={data.oct05_23 - data.aug02_23}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterAugust23()}</td>
              </tr>

              {/* JUNE 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Jun 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (6/5/23-8/2/23)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2023"
                    value={data.aug02_23 - data.jun05_23}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterJune23()}</td>
              </tr>

              <tr>
                <td>
                  <b>--2022 Numbers--</b>
                </td>
              </tr>

              {/* APRIL 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Apr 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (04/06-06/05)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2023"
                    value={data.jun05_23 - data.apr06_23}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterApril()}</td>
              </tr>

              {/* FEBRUARY 2023 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Feb 2023</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (02/04-04/06)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2023"
                    value={data.apr06_23 - data.feb04_23}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterFebruary()}</td>
              </tr>

              {/* DECEMBER 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Dec 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (12/10-02/04)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2022"
                    value={data.feb04_23 - data.dec09_22}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterDecember()}</td>
              </tr>

              {/* OCTOBER 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Oct 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (10/07-12/09)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="October2022"
                    value={data.dec09_22 - data.oct07_22}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterOctober()}</td>
              </tr>

              {/* AUGUST 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Aug 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (8/05-10/07)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="August2022"
                    value={data.oct07_22 - data.aug05_22}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{afterAugust()}</td>
              </tr>

              {/* JUNE 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Jun 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (6/07-8/05)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="June2022"
                    value={data.aug05_22 - data.jun07_22}
                    label="answers"
                  ></input>
                </td>
                <td className={styles.td3}>{yearlyIncluded()}</td>
              </tr>

              {/* YEAR TOTAL */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.yearTotal}>Year Total</p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="yearTotal"
                    value={data.year_total}
                    label="answers"
                    readOnly
                  ></input>
                </td>
              </tr>

              {/* NEW BILLING CHARGES AND FEES */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Charges/Fees</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (6/7/22-6/6/23)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="fees"
                    id="2223"
                    /*chech this one for error*/
                    value={data.fees}
                    label="results"
                    readOnly
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>

          {/* START OLD BILLING TABLE HEADER */}
          <table className={styles.table2}>
            <thead>
              <tr>
                <td className={styles.td3}>
                  <p className={styles.oldFee}>Old Billing Structure</p>
                </td>
              </tr>
              <tr className={styles.th2}>
                <td className={styles.newFee}>Billing Period</td>
                <td className={styles.newFee}>Gal Used</td>
                <td className={styles.newFee}>Gal Over</td>
                <td className={styles.newFee}>Charge/Fee</td>
              </tr>
            </thead>

            {/* OLD BILLING DATA SECTION */}
            <tbody className={styles.tbody}>
              {/* APR 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Apr 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (04/08-6/07)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="April2022"
                    value={data.jun07_22 - data.apr07_22}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverApril22()}</td>
                <td className={styles.td3}>{galOverAprilFees22()}</td>
              </tr>

              {/* FEB 2022 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Feb 2022</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (02/05-4/07)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2022"
                    value={data.apr07_22 - data.feb04_22}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverFebruary22()}</td>
                <td className={styles.td3}>{galOverFebruaryFees22()}</td>
              </tr>

              {/* DEC 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Dec 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (12/03-02/04)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2021"
                    value={data.feb04_22 - data.dec03_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverDecember21()}</td>
                <td className={styles.td3}>{galOverDecemberFees21()}</td>
              </tr>

              {/* OCT 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Oct 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (10/03-12/03)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="October2021"
                    value={data.dec03_21 - data.oct03_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverOctober21()}</td>
                <td className={styles.td3}>{galOverOctoberFees21()}</td>
              </tr>

              {/* AUG 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Aug 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (08/04-10/03)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="August2021"
                    value={data.oct03_21 - data.aug04_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverAugust21()}</td>
                <td className={styles.td3}>{galOverAugustFees21()}</td>
              </tr>

              {/* JUN 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Jun 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (06/04-08/04)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="June2021"
                    value={data.aug04_21 - data.jun04_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverJune21()}</td>
                <td className={styles.td3}>{galOverJuneFees21()}</td>
              </tr>

              {/* APR 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Apr 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (04/05-06/04)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="April2021"
                    value={data.jun04_21 - data.apr05_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverApril21()}</td>
                <td className={styles.td3} name="fees">
                  {galOverAprilFees21()}
                </td>
              </tr>

              {/* FEB 2021 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Feb 2021</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (02/20-04/05)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="February2021"
                    value={data.apr05_21 - data.feb19_21}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverFebruary()}</td>
                <td className={styles.td3}>{galOverFebruaryFees()}</td>
              </tr>

              {/* DEC 2020 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Dec 2020</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (12/11-02/19)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="December2020"
                    value={data.feb19_21 - data.dec10_20}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverDecember()}</td>
                <td className={styles.td3}>{galOverDecemberFees()}</td>
              </tr>

              {/* OCT 2020 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Oct 2020</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      padding: 0,
                    }}
                  >
                    (10/07-12/10)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="October2020"
                    value={data.dec10_20 - data.oct07_20}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverOctober()}</td>
                <td className={styles.td3}>{galOverOctoberFees()}</td>
              </tr>

              {/* AUGUST 2020 */}
              <tr>
                <td className={styles.td3}>
                  <p className={styles.p}>Aug 2020</p>
                  <p
                    style={{
                      fontSize: 9,
                      width: "75px",
                      color: "white",
                      margin: "-20px 0 0 10px",
                      paddingTop: "-10px",
                    }}
                  >
                    (08/11-10/07)
                  </p>
                </td>
                <td className={styles.td3}>
                  <input
                    style={{
                      backgroundColor: bgColors.Blue,
                      margin: "0 10px 0 10px",
                      width: "75px",
                    }}
                    type="text"
                    name="utilized"
                    id="August2020"
                    value={data.oct07_20 - data.aug10_20}
                    label="answers"
                    readOnly
                  ></input>
                </td>
                <td className={styles.td3}>{galOverAugust()}</td>
                <td className={styles.td3}>{galOverAugustFees()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <BGBlack />
      </Zoom>
    </main>
  );
}
