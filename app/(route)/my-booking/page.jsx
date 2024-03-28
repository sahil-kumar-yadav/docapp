
//4.29
"use client"

import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/BookingList";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";


const MyBooking = () =>
{

    const {user} = useKindeBrowserClient();
    const [bookingList,setbookingList] = useState([]);
    useEffect(()=>{
        user&&useKindeBrowserClient();
    },[user])

    const getUserBookingList=() =>
    {
        GlobalApi.getUserBookingList(user?.email).then(resp=>
        {
           console.log(resp.data.data)
           setbookingList(resp.data.data);
        })
    }

    //used to filter User Booking
    
    const filterUserBooking=(type)=>
    {
        const result = bookingList.filter(item=>
            type=='upcoming'? new Date(item.attribute.Date) >= new Date():
            new Date(item.attribute.Date) <= new Date()
            )
            console.log(result);
        return result;
    }

    return (
        <div className="px-4 md:px-10 mt-10">
            <h2 className="font-bold text-2xl">My Booking</h2>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className='w-full justify-start'>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <BookingList bookingList={filterUserBooking('upcoming')} />
                    </TabsContent>
                <TabsContent value="expired">
                    <BookingList bookingList={filterUserBooking('expired')} />
                    </TabsContent>
            </Tabs>

        </div>
    );
}

export default MyBooking;