'use client'
import DateReserve from "@/components/DateReserve"
import TimeReserve from "@/components/TimeReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import { useDispatch  } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/cartSlice";
// import { ReservationItem } from "../../../interface";

export default function Reservetions(){

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const name = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = ()=>{
        if(cid && name && pickupDate && startTime && endTime){
            const item: ReservationItem = {
                cardId: cid,
                cardName: name,
                pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                startTime: dayjs(startTime).format("hh:mm:ss"),
                endTime: dayjs(endTime).format("hh:mm:ss")
            }
            dispatch(addReservation(item))
        }
    }

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [startTime, setStartTime] = useState<Dayjs|null>(null)
    const [endTime, setEndTime] = useState<Dayjs|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="text-xl font-medium">CoworkingSpace: {name}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600 m-3">Pick-Up Date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">Start Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">End Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>
            </div>

            <button className="block rounded-md bg-rose-400 hover:bg-pink-700 px-3 py-2 text-white shadow-sm"
            onClick={makeReservation}>
                Reserve
            </button>
        </main>
    )
}