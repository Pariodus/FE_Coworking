interface CoworkingItem {
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
  
  interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingItem[]
  }