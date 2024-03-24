export interface CoworkingItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    openTime:string,
    closeTime:string,
    picture: string,
    __v: number,
    id: string
  }
  
export interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingItem[]
}

export interface ReservationItem {
  cardId: string
  cardName: string
  numOfDays: number
  pickupDate: string
  returnDate: string
}