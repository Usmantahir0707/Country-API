import { useEffect, useState } from "react";
import "../country.css";
import {
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import DetailsShimmer from "./DetailsShimmer";
import { useTheme } from "../hooks/utility";


export default function CountryDetails() {
  const [params] = useSearchParams(window.location.search);
  const name = params.get("name");
  const location = useLocation();
  const [state, setState] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [dark] = useTheme();

  useEffect(() => {
    setState(location.state);
  }, [location.state]);

  useEffect(() => {
    if (state === null) {
      fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
          if (data.borders) {
            Promise.all(
              data.borders.map((b) => {
                return fetch(`https://restcountries.com/v3.1/alpha/${b}`)
                  .then((res) => res.json())
                  .then(([border]) => border);
              })
            ).then((allBorders) => {
              setState({
                name: data.name,
                population: data.population,
                region: data.region,
                capital: data.capital,
                subregion: data.subregion,
                img: data.flags.png,
                currencies: data.currencies
                  ? Object.values(data.currencies)
                      .map((c) => c.name)
                      .join(", ")
                  : "",
                languages: data.languages
                  ? Object.values(data.languages).join(", ")
                  : "",
                borders: data.borders ? allBorders : "",
              });
            });
          }
        });

      return;
    }

    if (typeof state.borders[0] === "string") {
      Promise.all(
        state.borders.map((b) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${b}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry);
        })
      )
        .then((allBorders) => {
          setState((prev) => ({ ...prev, borders: allBorders }));
        })
        .catch(() => setNotFound(true));
    }
  }, [state]);

  if (notFound) {
    return <h2>Country not Found !</h2>;
  }

  return state === null ? (
    <DetailsShimmer dark={dark}/>
  ) : (
    <main className={dark ? "dark" : ""}>
      <Link to="/" className="back-button">
        <i className="fa-solid fa-arrow-left-long"></i> Back
      </Link>
      <div className="country-details">
        <img src={state.img} alt="flag" />
        <div className="details-text-container">
          <h1>{state.name.common}</h1>
          <div className="details-text">
            <p>
              <b>Native Name : </b>{" "}
              <span className="native-name">
                {Object.values(state.name.nativeName)[0].official}
              </span>
            </p>
            <p>
              <b>Population : </b>{" "}
              <span className="population">
                {" "}
                {state.population.toLocaleString()}
              </span>
            </p>
            <p>
              <b>Region : </b> <span className="region">{state.region}</span>
            </p>
            <p>
              <b>Sub-region : </b>{" "}
              <span className="subRegion"> {state.subregion}</span>
            </p>
            <p>
              <b>Capital : </b>{" "}
              <span className="capital"> {state.capital}</span>
            </p>
            <p>
              <b>Currencies : </b>{" "}
              <span className="curencies"> {state.currencies}</span>
            </p>
            <p>
              <b>Languages : </b>{" "}
              <span className="languages"> {state.languages}</span>
            </p>
          </div>
          <div className="border-countries">
            {!(typeof state.borders[0] === "object") ? (
              ""
            ) : (
              <p>
                <b>Border Countries : </b>
                {state.borders.map((b) => (
                  <Link
                    key={b.name.common}
                    to={`/country?name=${b.name.common}`}
                    state={{
                      name: b.name,
                      population: b.population,
                      region: b.region,
                      capital: b.capital,
                      subregion: b.subregion,
                      img: b.flags.png,
                      currencies: b.currencies
                        ? Object.values(b.currencies)
                            .map((c) => c.name)
                            .join(", ")
                        : "",
                      languages: b.languages
                        ? Object.values(b.languages).join(", ")
                        : "",
                      borders: b.borders ? b.borders : "",
                    }}
                  >
                    {b.name.common}
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
