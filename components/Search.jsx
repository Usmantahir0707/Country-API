

export default function Search({setQuery}) {
  return (
    <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} type="text" placeholder="Search any country" autoComplete="off"/>
        </div>
  )
}
