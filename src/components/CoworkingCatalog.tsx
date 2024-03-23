import Link from "next/link";
import CoworkingCard from "./CoworkingCard";

export default async function CoworkingCatalog({coJson}: {coJson:Object}){
    const coJsonReady = await coJson;

    return (
        <>
        <div className="m-3">
            Explore {coJsonReady.count} CoworkingSpaces in our CoworkingCatalog 
        </div>
        <div  style={{margin:"10px", display:"flex", flexDirection:"row", flexWrap:"wrap", 
            justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    coJsonReady.data.map((coItem:Object) => (
                        <Link href={`/coworkings/${coItem.id}`} className="w-1/5 m-10">
                            <CoworkingCard cardName={coItem.name} imgSrc={coItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}