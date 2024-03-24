'use client'

import DateReserve from "@/components/DateReserve"
import dayjs, { Dayjs } from "dayjs";
import { useState } from 'react'


export default function Reservetion(){

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
        
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600 m-3">Pick-Up Date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>
            </div>
        </main>
    )
}