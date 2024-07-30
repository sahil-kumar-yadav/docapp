"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";

// 3.21

// 4.05
const BookAppointment = ({doctor}) => {

    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState();
    const [selectedTimeSlot, setselectedTimeSlot] = useState();
    const [note,setNote] = useState();
    const {user} = useKindeBrowserClient();
    const isPastDay = (day) => {
        return day < new Date();
    }
    useEffect(() => {
        getTime();
    })


    const getTime = () => {
        const timeList = [];

        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList);
    }

    const saveBooking=()=>{
        const data={
            data:{
                UserName:user.given_name+" "+user.family_name,
                Email:user.email,
                Time:selectedTimeSlot,
                Date:date,
                doctor:doctor.id,
                Note:note
            }
        }
    }

    GlobalApi.BookAppointment(data).then(resp=>{
        console.log(resp);
        GlobalApi.sendEmail(data).then(resp=>{
            console.log(resp)
        })
        toast("Booking confirmation will send you on mail")
    })

    return (
        <Dialog>
            <DialogTrigger>
                <Button className="mt-3 rounded-full">Book Appointment</Button>

            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                                {/* calender */}
                                <div className="flex flex-col gap-3 items-baseline">
                                    <h2 className="flex flex-col items-center">
                                        <CalendarDays className="text-primary h-5 w-5" />
                                        Select Date

                                    </h2>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        disabled={isPastDay} // past date ky liye disable karna hai
                                        className="rounded-md border"
                                    />
                                </div>

                                {/* Time slot */}
                                <div className="mt-3 md:0">
                                    <h2 className="flex gap-2 items-center mb-3 ">
                                        <Clock className="text-primary h-5 w-5" />
                                        Select Time Slot
                                    </h2>
                                    <div className="grid  grid-col-3 gap-2 border rounded-lg p-5
                                    ">
                                        {timeSlot?.map((item, index) => (
                                            <h2
                                                onClick={() => setselectedTimeSlot(item.time)}
                                                className={`p-2 border cursor-pointer
                                             text-center hover:bg-primary hover:text-white
                                            rounded-full 
                                            ${item.time === selectedTimeSlot && 'bg-primart text-white'} 
                                            `}>{item.time}</h2>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </DialogDescription>
                </DialogHeader>
                {/* text discription input  */}
                {/* dialoge close  */}
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <>
                        <Button type="button"
                        className="text-red-500 border-red-500 "
                        variant="outline">
                            Close
                        </Button>
                        <Button type="button" variant="secondary" disabled={!(date&&selectedTimeSlot)}
                        onClick={()=>saveBooking()}
                        >
                            Submit
                        </Button>
                        </>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );
}

export default BookAppointment;