
//4.26

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/BookingList";


const MyBooking = () => {
    return (
        <div className="px-4 md:px-10 mt-10">
            <h2 className="font-bold text-2xl">My Booking</h2>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className='w-full justify-start'>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <BookingList/>
                    </TabsContent>
                <TabsContent value="expired">
                    <BookingList/>
                    </TabsContent>
            </Tabs>

        </div>
    );
}

export default MyBooking;