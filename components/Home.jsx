import { useState } from "react";
import CountriesContainer from "./CountriesContainer.jsx";
import Filter from "./Filter.jsx";
import Search from "./Search.jsx";
import { useTheme } from "../hooks/utility.js";




export default function Home() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [dark] = useTheme();
  

  return (
    <main className={dark ? "dark" : ""}>
      <div className="search-filter-container">
        <Search setQuery={setQuery} />
        <Filter setSelected={setSelected} />
      </div>
      <CountriesContainer query={query} selected={selected} />
    </main>
  );
}
