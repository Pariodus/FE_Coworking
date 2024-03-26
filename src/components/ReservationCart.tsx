import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"
import { ReserveJson, ReservationItem2 } from "../../interface"

export default async function ReservationCart({reserveJson}: {reserveJson: Promise<ReserveJson>}){
    
    const reserveJsonReady = await reserveJson
    // const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            reserveJsonReady.data.map((reservationItem:ReservationItem2)=>(
                <div className="bg-slate-200 rounded-lg mx-5 py-2 my-2" key={reservationItem.coworking?.name}>
                        <div className="text-xl mx-2"> {reservationItem.coworking?.name}</div>
                        <div className="text-sm mx-2">StartTime: {reservationItem.reserveDateStart}</div>
                        <div className="text-sm mx-2">EndTime: {reservationItem.reserveDateEnd}</div>

                        <button className="block rounded-md bg-sky-600 mx-2 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                            Remove from Cart
                        </button>
                </div>
            ))
        }
        </>
    )
}