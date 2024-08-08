"use client"

import DoctorList from "@/app/_components/DoctorList";
import { useEffect, useState } from "react";

// abi bhi search ek route hai
// but (route) route nahi hai

// dynamic route params my aayega

// 3.00

const Search = ({ params }) => {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
        console.log(params.cname);
        getDoctors();
    }, [])

    const getDoctors = () => {
        GlobalApi.getDoctorByCategory(params.cname).then(resp => {
            setDoctorList(resp.data.data);
        })
    }
    return (
        <div className='mt-5'>
            <DoctorList heading={params.cname}
                doctorList={doctorList}
            />
        </div>
    );
}

export default Search;