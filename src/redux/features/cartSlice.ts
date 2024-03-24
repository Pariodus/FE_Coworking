import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type CartState = {
    cardItems: ReservationItem[]
}

const initialState: CartState = { cardItems:[] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            state.cardItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
            const remainItems = state.cardItems.filter(obj=>{
                return((obj.cardName !== action.payload.cardName) 
                        || (obj.pickupDate !== action.payload.pickupDate)
                        || (obj.returnDate !== action.payload.returnDate));
            })
            state.cardItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer