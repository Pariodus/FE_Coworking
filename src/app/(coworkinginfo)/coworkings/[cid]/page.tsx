import getCard from "@/libs/getCard"
import Image from "next/image"

export default async function CoworkingDetailPage({params}:{params:{cid:string}}){

   const coworkingDetail = await getCard(params.cid)
   return(
      <main className="text-center p-5 w-full">
         <h1 className="text-lg font-medium">CoworkingSpace ID {params.cid}</h1>
         
         <div className="my-5 flex flex-row w-full text-center">
            <div className="flex flex-row justify-center">
                <div className="w-[30%]">
                    <Image src={ coworkingDetail.data.picture }
                    alt="Coworking Image"
                    width={0} height={0} sizes="20vw"
                    className="object-cover rounded-lg w-full"
                    />
                </div>
            
                <div className="text-xl m-10 text-left">
                    <div className="text-md mx-5">Name: { coworkingDetail.data.name }</div>
                    <div className="text-md mx-5">address: { coworkingDetail.data.address }</div>
                    <div className="text-md mx-5">tel:{ coworkingDetail.data.tel }</div>
                    <div className="text-md mx-5">openTime-closeTime: { coworkingDetail.data.openTime } - {coworkingDetail.data.closeTime}</div>
                    <div className="text-md mx-5">{ coworkingDetail.data.picture }</div>
                </div>
            </div>
         </div>
      </main>
   )
}
