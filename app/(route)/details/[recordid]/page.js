"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';


const Details = (params) => {
    const [doctor, setDoctor] = useState();
    useEffect(() => {
        // 3.12
        getDoctorbyId();
    }, [])

    const getDoctorbyId = () => {
        GlobalApi.getDoctorbyId(params.recordId).then(resp => {
            console.log(resp);
            setDoctor(resp.data.data);
        })

    }
    return (
        <div className='p-5 md:px-20'>
            <h2 className='font-bold text-[22px]'>Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                {/* doctor detail  */}
                <div className='col-span-3'>
                    <DoctorDetail doctor={doctor}/>
                </div>
                <div>
                    {/* doctor suggestion  */}

                </div>
            </div>
        </div>
    );
}

export default Details;