import { useState } from "react";
import "./country.css";
import PropTypes from "prop-types";

const Country = ({ country, handleVisitedCountries }) => {
  // console.log(country);
  const {
    name: { common },
    flags: { png },
    population,
    region,
  } = country;
  // const { common, official } = name;
  // const{png,svg}=flags;
  // console.log(name, flags, population, region);
  const [clicked, setClicked] = useState(false);
  const handleOnClickBtn = () => {
    setClicked(!clicked);
    // console.log(clicked);
  };

  return (
    <>
      <div className={clicked ? "container" : "country-container"}>
        <h3 style={{ color: clicked && "blue" }}>
          {clicked ? `Welcome ${common}` : common ? common : "Not available"}
        </h3>
        <img className="flag-image" src={png ? png : "Not available"} alt="" />
        <p>
          <small>{population ? population : "Not available"}</small>
        </p>
        <p>
          <small className={clicked ? "region" : ""}>
            {region ? region : "Not available"}
          </small>
        </p>
        <div>
          <button
            style={{ backgroundColor: clicked && "blue" }}
            onClick={() => {
              handleOnClickBtn();
              handleVisitedCountries(country);
            }}
            className="card-btn"
          >
            {clicked ? "visited" : "Let's go"}
          </button>
        </div>
      </div>
    </>
  );
};

Country.propTypes = {
  country: PropTypes.object,
  handleVisitedCountries: PropTypes.func,
};

export default Country;
