import Image from "next/image";
// 1.44

const DoctorList = ({ doctorList,heading='Popular Doctors' }) => {
    return (
        <div className="mb-10 px-8">
            <h2 className="font-bold text-xl ">{heading}</h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
                {doctorList.length > 0 ? doctorList.map((item, index) => {
                    <div key={index} className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out ">
                        <Image src={item.url} alt="doctorimg"
                            width={500} height={200}
                            className="h-[200px] w-full object-cover rounded-lg" />
                        <div className="mt-3 items-baseline flex flex-col gap-1 ">
                            <h2 className="text-[10px] bg-blue-100 p-1 rounded-fullpx-2 text-primary">{item.categories.name}</h2>
                            <h2 className="font-bold">{item.name}</h2>
                            <h2 className="text-primary text-sm">{item.yearofexperience}</h2>
                            <h2 className="text-gray-500 text-sm">{item.address}</h2>
                            <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white">Book Now</h2>
                        </div>

                    </div>
                })
                    :
                    // skeleton effect 
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className="h-[220px] bg-slate-100 w-full rounded-lg animate-pulse">
                        </div>

                    ))

                }

            </div>
        </div>
    );
}

export default DoctorList;