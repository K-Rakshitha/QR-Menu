import React, { useState } from "react";
import DATA from "./Rec.json";

import "./App.css";

import ReactSwitch from "react-switch";

function Des() {
  const [val, setVal] = useState("");
  const [veg, setVeg] = useState(true);

  // toggle switch
  const [checked, setChecked] = useState(false);

  // one
  const [arr, setArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // one
  const filteredData = DATA.filter((food) =>
    food.name.toLowerCase().includes(val.toLowerCase())
  );
  const filteredDataVeg = filteredData.filter((food) =>
    food.cat.includes("VEG")
  );
  const filteredSTAT = filteredData.filter((food) =>
    food.TYPE.includes("START")
  );

  // one
  const handleToggle = (index) => {
    const newArr = [...arr];
    newArr[index] = !newArr[index];
    setArr(newArr);
  };

  // switch function
  const handleChanger = (val) => {
    setChecked(val);
    setVeg(!veg);
  };

  return (
    <div>
      <div class="flex-container">
        <div class="flex-item-left">
          <ReactSwitch
            checked={checked}
            onChange={handleChanger}
            className="ToggleSwitch"
          />
        </div>
        <div class="flex-item-right"> &nbsp; Veg Only</div>
      </div>

      <br />
      <br />

      {/* one1 */}
      {veg === true && filteredData.length > 0 && filteredSTAT.length > 0 && (
        <h2>Recommended Items</h2>
      )}
      {veg === true &&
        filteredData.length > 0 &&
        filteredData.map((food, index) => (
          <div className="row">
            <div key={food.id} className="column">
              <div className="card">
                <div class="flex-container1">
                  <div class="flex-item-left1">
                    <img src={food.UR} alt={food.name} className="img1" />
                    <br />
                    <h3 className="FoodName">{food.name}</h3>

                    <p className="Price">₹{food.PRICE}</p>

                    {arr[index] ? (
                      <button
                        onClick={() => handleToggle(index)}
                        className="button1">
                        Less
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggle(index)}
                        className="button1">
                        More
                      </button>
                    )}
                  </div>
                  <div class="flex-item-right1">
                    {" "}
                    <img src={food.UR1} alt={food.name} className="img2" />
                  </div>
                </div>

                {arr[index] && (
                  <div>
                    <hr />
                    <p className="FOODDES">{food.DES}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      {/* one2 */}
      {veg === false &&
        filteredData.length > 0 &&
        filteredSTAT.length > 0 &&
        filteredDataVeg.length > 0 && <h2>Recommended Items</h2>}
      {veg === false &&
        filteredData.length > 0 &&
        filteredDataVeg.map((food, index) => (
          <div className="row">
            <div key={food.id} className="column">
              <div className="card">
                <div class="flex-container1">
                  <div class="flex-item-left1">
                    <img src={food.UR} alt={food.name} className="img1" />
                    <br />
                    <h3 className="FoodName">{food.name}</h3>

                    <p className="Price">₹{food.PRICE}</p>

                    {arr[index] ? (
                      <button
                        onClick={() => handleToggle(index)}
                        className="button1">
                        Less
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggle(index)}
                        className="button1">
                        More
                      </button>
                    )}
                  </div>
                  <div class="flex-item-right1">
                    {" "}
                    <img src={food.UR1} alt={food.name} className="img2" />
                  </div>
                </div>

                {arr[index] && (
                  <div className="moreless">
                    <hr />
                    <p className="FOODDES">{food.DES}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      <div></div>
    </div>
  );
}

export default Des;
