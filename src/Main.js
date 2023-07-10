import React, { useState } from "react";
import DATA from "./data.json";
import DATA2 from "./MainData.json";
import "./App.css";
import Des from "./Des";
import ReactSwitch from "react-switch";

function Main() {
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

  // two
  const [arr1, setArr1] = useState([
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

  // two
  const filteredData2 = DATA2.filter((food) =>
    food.name.toLowerCase().includes(val.toLowerCase())
  );
  const filteredDataVeg2 = filteredData2.filter((food) =>
    food.cat.includes("VEG")
  );
  const filteredBIRYANI = filteredData2.filter((food) =>
    food.TYPE.includes("BIRYANI")
  );

  // one
  const handleToggle = (index) => {
    const newArr = [...arr];
    newArr[index] = !newArr[index];
    setArr(newArr);
  };

  // two
  const handleToggle1 = (index1) => {
    const newArr1 = [...arr1];
    newArr1[index1] = !newArr1[index1];
    setArr1(newArr1);
  };

  // switch function
  const handleChanger = (val) => {
    setChecked(val);
    setVeg(!veg);
  };

  return (
    <div>
      <h1 className="Logo">LOGO</h1>
      <input
        className="form__input"
        name="name"
        id="name"
        type="text"
        placeholder="Search Food"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      {filteredData.length !== 0 ? (
        <div className="flex-container">
          <div className="flex-item-left">
            <ReactSwitch
              checked={checked}
              onChange={handleChanger}
              className="ToggleSwitch"
            />
          </div>
          <div class="flex-item-right"> &nbsp; Veg Only</div>
        </div>
      ) : (
        <div className="Noitem">
          We are sorry😔, item not found !
          <br />
          Explore recommended items
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      {/* one1 */}
      {veg === true && filteredData.length > 0 && filteredSTAT.length > 0 && (
        <h2>Starters</h2>
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
        filteredDataVeg.length > 0 && <h2>Starters</h2>}
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
      <div>
        {/* two1 */}
        {veg === true &&
          filteredData2.length > 0 &&
          filteredBIRYANI.length > 0 && <h2>Biriyanis</h2>}
        {veg === true &&
          filteredData2.length > 0 &&
          filteredData2.map((food, index1) => (
            <div className="row">
              <div key={food.id} className="column">
                <div className="card">
                  <div class="flex-container1">
                    <div class="flex-item-left1">
                      <img src={food.UR} alt={food.name} className="img1" />
                      <br />
                      <h3 className="FoodName">{food.name}</h3>

                      <p className="Price">₹{food.PRICE}</p>

                      {arr1[index1] ? (
                        <button
                          onClick={() => handleToggle1(index1)}
                          className="button1">
                          Less
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggle1(index1)}
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

                  {arr1[index1] && (
                    <div>
                      <hr />
                      <p className="FOODDES">{food.DES}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

        {/* two2 */}
        {veg === false &&
          filteredData2.length > 0 &&
          filteredBIRYANI.length > 0 &&
          filteredDataVeg2.length > 0 && <h2>Biriyanis</h2>}
        {veg === false &&
          filteredData2.length > 0 &&
          filteredDataVeg2.map((food, index1) => (
            <div className="row">
              <div key={food.id} className="column">
                <div className="card">
                  <div class="flex-container1">
                    <div class="flex-item-left1">
                      <img src={food.UR} alt={food.name} className="img1" />
                      <br />
                      <h3 className="FoodName">{food.name}</h3>

                      <p className="Price">₹{food.PRICE}</p>

                      {arr1[index1] ? (
                        <button
                          onClick={() => handleToggle1(index1)}
                          className="button1">
                          Less
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggle1(index1)}
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

                  {arr1[index1] && (
                    <div>
                      <hr />
                      <p className="FOODDES">{food.DES}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {filteredData.length === 0 && <Des />}
    </div>
  );
}

export default Main;
