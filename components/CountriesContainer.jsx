import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountriesShimmer from "./CountriesShimmer.jsx";
import { useFilter } from "../hooks/utility.js";

export default function CountriesContainer({ query, selected }) {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,borders,population,subregion,flags,languages,currencies,borders"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const filteredData = useFilter(data, query, selected);

  return !filteredData.length ? (
    <CountriesShimmer />
  ) : (
    <div className="countries-container">
      {filteredData.map((country) => {
          return (
            <CountryCard
              img={country.flags.png}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              href={`/country?name=${country.name.common}`}
              key={country.name.common}
              currencies={
                country.currencies
                  ? Object.values(country.currencies)
                      .map((c) => c.name)
                      .join(" , ")
                  : ""
              }
              subregion={country.subregion}
              languages={
                country.languages
                  ? Object.values(country.languages).join(" , ")
                  : ""
              }
              borders={
                country.borders ? country.borders : ''
              }
            />
          );
        })}
    </div>
  );
}
