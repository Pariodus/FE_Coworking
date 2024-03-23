import getCard from "@/libs/getCard"
import Image from "next/image"

export default async function CoworkingDetailPage({params}: {params:{cid:string}}) {
    const coworkingDetail = await getCard(params.cid)

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{coworkingDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <div>
                    <Image src={coworkingDetail.data.picture}
                    alt="Product Picture"
                    // fill={true}
                    width={0} height={0} sizes="100vw"
                    className="object-cover w-[30%] rounded-t-lg"/>
                </div>
                
                <div className="text-md mx-5 text-left">
                    <div className="text-md mx-5">{coworkingDetail.data.address}</div>
                    <div className="text-md mx-5">{coworkingDetail.data.tel}</div>
                    <div className="text-md mx-5">{coworkingDetail.data.openTime}</div>
                    <div className="text-md mx-5">{coworkingDetail.data.closeTime}</div>
                </div>
            </div>
        </main>
    )
}