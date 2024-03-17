"use client"

import { useEffect } from "react";

// abi bhi search ek route hai
// but (route) route nahi hai

// dynamic route params my aayega
const Search = ({params}) => {
    
    useEffect(()=>{
        console.log(params.cname)
    })
    return (
        <div>
            Enter
        </div>
    );
}

export default Search;