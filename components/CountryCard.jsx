import { Link } from "react-router-dom";

export default function CountryCards({
  img,
  name,
  population,
  region,
  capital,
  href,
  currencies,
  subregion,
  languages,
  borders,
}) {
  return (
    <Link
      to={href}
      className="country-card"
      state={{
        img,
        name,
        population,
        region,
        capital,
        href,
        currencies,
        subregion,
        languages,
        borders,
      }}
    >
      <img src={img} alt="flag" />
      <div className="card-text">
        <h3 className="card-title">{name.common}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString()}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
