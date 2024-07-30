import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment/moment";
import Image from "next/image";

// 4.43

const BookingList = (bookingList) => {
    return (
        <div>
            {bookingList&&bookingList.map((item,index)=>(
                <div className="flex gap-4 items-center border p-5 m-3 rounded-lg">

                    <Image src={item.url}
                    className="rounded-full h-[70px] w-[70px] object-cover"
                    width={70}
                    height={70}
                    alt="doctor-image"
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-[18px] ">{item.doctor.name}</h2>
                        <h2 className="flex gap-2 text-gray-500"><MapPin className="text-primary"/> {item.doctor.address}</h2>
                        <h2 className="flex gap-2">
                            <Calendar className="text-primary"/> Appoitment On: {moment(item.Date).format('DD-MMM-YYYY') }
                        </h2>
                        <h2 className="flex gap-2">
                            <Clock className="text-primary" /> At Time: {item.Time}
                        </h2>
                    </div>

                </div>

            ))}
        </div>
    );
}

export default BookingList;