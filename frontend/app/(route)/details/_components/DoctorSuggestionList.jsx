import Image from "next/image";
import Link from "next/link";

const DoctorSuggestionList = () => {
    return (
        <div className="p-4 border-[1px] mt-5 md:ml-5">
            <h2 className="mb-3 font-bold">Suggestions</h2>

            {DoctorList.map((doctor, index) => {

                <Link href={'/details/' + doctor.id}
                    className="cursor-pointer hover:bg-slate-100
                rounded-lg flex items-center gap-3"
                >
                    <Image src={doctor.Image}
                    width={70}
                    height={70}
                    className="w-[70px] rounded-lg"
                    />
                    <div className="mt-3 flex flex-col  ">
                        <h2 className="text-[10px] bg-gray-100 text-primary">{doctor.name}</h2>
                        <h2 className="font-medium text-sm "></h2>
                    </div>

                </Link>

            })}
        </div>
    );
}

export default DoctorSuggestionList;