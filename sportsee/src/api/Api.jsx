import React, { useState, useEffect } from "react";

export function API(){
    const [data, setData] = useState([])

    useEffect(() =>{
        async function getData(){
            const response = await fetch(URL)
            const data = await response.json
            setData(data)
        }
        getData(data)
    })
}