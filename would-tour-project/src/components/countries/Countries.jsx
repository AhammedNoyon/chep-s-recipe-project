import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./countries.css";
// import "./country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  // console.log(countries);
  const [visitedCountries, setVisitedCountries] = useState([]);

  console.log(visitedCountries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    console.log(visitedCountries);
  };
  return (
    <>
      {/* visited country  */}
      <div className="visited-container">
        {visitedCountries.map((visitedCountry, index) => {
          return (
            <div className="visited-card" key={index}>
              <h3>{visitedCountry?.name?.common}</h3>
              <div className="visited-flag-img">
                <img
                  className="flag-image"
                  src={visitedCountry?.flags?.png}
                  alt=""
                />
              </div>
              <p>
                <small>{visitedCountry?.population}</small>
              </p>
              <p>
                <small>{visitedCountry?.region}</small>
              </p>
            </div>
          );
        })}
      </div>
      <h3>All countries:</h3>

      {/* display country  */}
      <div id="countries_container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
