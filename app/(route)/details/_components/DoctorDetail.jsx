
// 3.17

import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import BookAppointment from "./BookAppointment";

const DoctorDetail = ({ doctor }) => {

    const socialMediaList = [
        {
            id: 1,
            icon: '/youtube.png',
            url: ""
        },
        {
            id: 2,
            icon: '/linkdin.png',
            url: ""
        },
        {
            id: 3,
            icon: '/twitter.png',
            url: ""

        },
        {
            id: 4,
            icon: '/facebook.png',
            url: ""

        },
    ]

    return (
        <>
            <div className='gird grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg '>
                {/* doctor image */}
                <div>
                    <Image src={doctor.url}
                        width={200}
                        height={200}
                        alt="doctor-img"
                        className="rounded-lg w-full h-[280px] object-cover"

                    />

                </div>
                {/* doctor info */}
                <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline'>
                    <h2 className="font-bold text-2xl ">{doctor.name}</h2>
                    <h2 className="flex text-gray-500 text-md ">
                        <GraduationCap />
                        <span>{doctor.yearofexp} of experiece</span>
                    </h2>
                    <h2 className="text-md flex gap-2 text-gray-500">
                        <MapPin />
                        <span>{doctor.address}</span>
                    </h2>
                    <h2 className="text-[10px] bg-blue-100 p-1 rounded-fullpx-2 text-primary">{item.categories.name}</h2>
                    <div className="flex gap-3">
                        {socialMediaList.map((item, index) => {
                            <Image src={item.icon} key={index}
                                width={30}
                                height={30}

                            />
                        })}
                    </div>
                    <BookAppointment/>
                </div>

                {/* About Doctor  */}
            </div>
            <div className="p-3 border-[1px] rounded-lg mt-5">
                <h2 className="font-bold text-[20px] ">About me</h2>
                <p className="text-gray-500 tracking-wide mt-2">{doctor.info}</p>
            </div>
        </>
    );
}

export default DoctorDetail;