import { Theme } from "../contexts/Theme";

const { useState, useEffect, useContext } = require("react");

export const useTheme = ()=> useContext(Theme);




export const useFilter = (data, query, selected)=>{
    const filteredData = data.filter((f) => f.name.common.toLowerCase().includes(query))
        .filter((f) => f.region.toLowerCase().includes(selected));

        return filteredData;
}

