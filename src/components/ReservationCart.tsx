'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { UseDispatch, useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart(){
    const cardItems = useAppSelector((state) => state.cartSlice.cardItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            cardItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded-px-5 mx-5 py-2 my-2" key={reservationItem.carId}>
                        <div className="text-xl mx-2">{reservationItem.carModel}</div>
                        <div className="text-sm mx-2">Pick-up {reservationItem.pickupDate}
                         from {reservationItem.pickupLocation}</div>
                        <div className="text-sm mx-2">Return {reservationItem.returnDate}
                         from {reservationItem.returnLocation}</div>
                        <div className="text-md mx-2">Duration: {reservationItem.numOfDays}</div>

                        <button className="block rounded-md bg-sky-600 mx-2 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={()=>dispatch(removeReservation(reservationItem))}>
                            Remove from Cart
                        </button>
                </div>
            ))
        }
        </>
    )
}