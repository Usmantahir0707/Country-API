import React from 'react'

export default function Filter({setSelected}) {
  return (
    <select onChange={(e)=>{setSelected(e.target.value.toLowerCase())}} name="" id="filter">
          <option hidden>Filter by region</option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
  )
}
